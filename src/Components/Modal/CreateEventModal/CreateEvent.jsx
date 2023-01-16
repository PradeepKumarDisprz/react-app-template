import { useContext, useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { CancelButton,UpdateButton,SaveButton} from "../../Buttons/Buttons";
import TextareaAutosize from "react-textarea-autosize";
import "./CreateEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import { apiActions } from "../../../Reducer/TriggerApiReducer";
import Discard from "../DiscardModal/Discard";

const CreateEvent = () => {
  const { timeStamp,modalState,modalDispatch,apiDispatch} = useContext(GlobalContext);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  
  const [discard,setDiscard]=useState(false)
  
  useEffect(()=>
  { 
    if(modalState.showModal==true)
    {
      setStartTime(timeStamp.startTime)
      setEndTime(timeStamp.endTime)
    }

    if(modalState.showModal==false)
    {    
      settitle("");
      setDescription("");
      setStartTime("")
      setEndTime("")
    }

    if(modalState.updateEvent!=null)
    {
      settitle(modalState.updateEvent.appointmentTitle);
      setDescription(modalState.updateEvent.appointmentDescription);
      setStartTime(modalState.updateEvent.appointmentStartTime);
      setEndTime(modalState.updateEvent.appointmentEndTime);
    }
  },[timeStamp,modalState.updateEvent,modalState.showModal])

  const handleCloseModal=()=>
  {
    modalDispatch({type:actions.CLOSE_ADD_EVENT})
  }

  const handleCancel=()=>
  {
    if(title.length>0)
    {
      setDiscard(true)
    }
    else{
     handleCloseModal()
    }
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(title.replace(/\s/g,"")!=="")
    {
      const titleSpaces=title.replace(/\s/g, " ")
      const eventSubmitted={
        appointmentTitle:titleSpaces,
        appointmentDescription:description,
        appointmentStartTime: startTime,
        appointmentEndTime:endTime
      } 
      
      if(modalState.updateEvent!=null)
      {
        const event={appointmentId:modalState.updateEvent.appointmentId,eventSubmitted};
        apiDispatch({type:apiActions.UPDATE_EVENT,payload:event});
      }

      else{
      apiDispatch({type:apiActions.POST_EVENT,payload:eventSubmitted});
    }
    }
  }

  return (
    <>
      {
     (modalState.updateEvent!=null|| modalState.showModal)&& 
      (
        <div className="create-pop-up-overlay" >
          <form className="create-pop-up-box"  onSubmit={handleSubmit} >
            <div className="create-header"><FontAwesomeIcon icon={faXmark} onClick={() =>modalDispatch({type:actions.CLOSE_ADD_EVENT})} className="create-faXmark"  /></div>

            <div className="create-event-content">
              <div className="event"><input type="text" value={title} className="add-input" spellCheck="false" autoFocus placeholder="Add Title" onChange={(e) => {settitle(e.target.value);}}required/></div>
              <div className="choose-time">
                <span className="time-label">Start Time</span>
                <input type="datetime-local"  name="Start Time" className="time-sel-style" value={startTime} onChange={(e) => { setStartTime(e.target.value); }} required/>
              </div>
              <div className="choose-time">
                <span className="time-label">End Time</span>
                <input type="datetime-local" className="time-sel-style" name="End Time" value={endTime} onChange={(e) => {setEndTime(e.target.value);}}required />
              </div>
              <div className=" event"><TextareaAutosize className="input-text-area" maxRows={6} value={description} placeholder="Add Description" onChange={(e) => {setDescription(e.target.value); }} /></div>
            </div>

            <div className="create-popup-btns">
              <span onClick={handleCancel} className="cancel-btn-create"><CancelButton /></span>
              {modalState.updateEvent!=null?<UpdateButton/>:<SaveButton/>}
            </div>

          </form>
        </div>
      )}
      {
        discard&&<Discard setDiscard={setDiscard} handleCloseModal={handleCloseModal}/>
      }
    </>
  );
};

export default CreateEvent;

