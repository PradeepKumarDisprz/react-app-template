import { useContext, useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { CancelButton, SaveButton} from "../../Buttons/Buttons";
import TextareaAutosize from "react-textarea-autosize";
import "./CreateEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import { apiActions } from "../../../Reducer/TriggerApiReducer";
import { createPortal } from "react-dom";

const CreateEvent = () => {
  const { daySelected,modalState,modalDispatch,apiDispatch} = useContext(GlobalContext);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  
  useEffect(()=>
  { setStartTime(daySelected.startTime)
    setEndTime(daySelected.endTime)
    settitle("");
    setDescription("");
    if(modalState.updateEvent!=null)
    {
      settitle(modalState.updateEvent.appointmentTitle);
      setDescription(modalState.updateEvent.appointmentDescription);
      setStartTime(modalState.updateEvent.appointmentStartTime);
      setEndTime(modalState.updateEvent.appointmentEndTime);
    }
  },[daySelected,modalState.updateEvent])

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(title.replace(/\s/g,"")!=="")
    {
      if(modalState.updateEvent!=null)
      {
        const eventSubmitted={
          appointmentTitle:title,
          appointmentDescription:description,
          appointmentStartTime:startTime,
          appointmentEndTime:endTime
        }
        const event={appointmentId:modalState.updateEvent.appointmentId,eventSubmitted};
        apiDispatch({type:apiActions.UPDATE_EVENT,payload:event});
      }

      else{
      const titleSpaces=title.replace(/\s/g, " ")
      const eventSubmitted={
        appointmentTitle:titleSpaces,
        appointmentDescription:description,
        appointmentStartTime: startTime,
        appointmentEndTime:endTime
      } 
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
              <div className="event"><input type="text" value={title} className="add-input" placeholder="Add Title" onChange={(e) => {settitle(e.target.value);}}required/></div>
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
              <span onClick={() => modalDispatch({type:actions.CLOSE_ADD_EVENT})} className="cancel-btn-create"><CancelButton /></span>
                  <button type="submit" onSubmit={handleSubmit} className="save-btn">
                   <span>Save</span>
                  </button>
             </div>

          </form>
        </div>
      )}
    </>
  );
};

export default CreateEvent;

