import { useContext, useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faCheck } from "@fortawesome/free-solid-svg-icons";
import { CancelButton, SaveButton,UpdateButton } from "../../../Buttons/Buttons";
import TextareaAutosize from "react-textarea-autosize";
import "./CreateUpdateEvent.scss";
import GlobalContext from "../../../../Context/GlobalContext";
import Discard from "../../DiscardModal/Discard"
import dayjs from "dayjs";
import ViewEvent from "../../ViewEventModal/ViewEvent";

const CreateEvent = () => {
  const { showModal, setShowModal,daySelected,setPostEvent,updateEvent,setUpdateEvent,setEventUpdate} = useContext(GlobalContext);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  
  useEffect(()=>
  {
    setStartTime(daySelected.startTime)
    setEndTime(daySelected.endTime)
    if(updateEvent!=null)
    {
      settitle(updateEvent.appointmentTitle);
      setDescription(updateEvent.appointmentDescription);
      setStartTime(updateEvent.appointmentStartTime);
      setEndTime(updateEvent.appointmentEndTime);
    }
  },[daySelected,updateEvent])


  const handleSubmit=(e)=>
  {
    if(title.replace(/\s/g, " "))
    e.preventDefault();
    if(updateEvent!=null)
    {
      const eventSubmitted={
        appointmentTitle:title,
        appointmentDescription:description,
        appointmentStartTime:startTime,
        appointmentEndTime:endTime
      }
      console.log(startTime);
      const event={appointmentId:updateEvent.appointmentId,eventSubmitted};
      setEventUpdate(event);
    }
    else
    {
      const eventSubmitted={
        appointmentTitle:title,
        appointmentDescription:description,
        // console.log()
        // appointmentStartTime: dayjs.utc(startTime,"YYYY-MM-DD HH:mm:ss"),
        appointmentStartTime: startTime,
        appointmentEndTime:endTime,
        // appointmentEndTime: dayjs(startTime).format('YYYY-MM-DDTHH:mm:ssZ[Z]')
        // appointmentStartTime:(dayjs(startTime).add(5,'hours').add(30,'minutes')).toISOString(),
        // appointmentEndTime:(dayjs(endTime).add(5,'hours').add(30,'minutes')).toISOString()
      }
      // console.log(eventSubmitted);
      setPostEvent(eventSubmitted); 
    }
    settitle("");
    setDescription("");
    // setStartTime("");
    // setEndTime("");
    ViewEvent==null?setShowModal(true): 
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <div className="create-pop-up-overlay" onClick={() => setShowModal(false)} >
          <form className="create-pop-up-box"  onSubmit={handleSubmit}  onClick={(e) => e.stopPropagation()}>
            <div className="create-header"><FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} className="create-faXmark"  /></div>

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
              <span onClick={() => {
                setShowModal(false);
                }} className="cancel-btn-create"><CancelButton /></span>
              {updateEvent==null?<span><SaveButton/></span>
              :<span><UpdateButton/></span>}
            </div>

          </form>
        </div>
      )}
    </>
  );
};

export default CreateEvent;

// onClick={(e) => e.stopPropagation()}


// onSubmit={handleSubmit}

// onClick={()=>setShowModal(false)}


{/* <div className="color-labels">
<span className="color-label-name">Color</span> 
 {COLOR_LABELS.map((color,index)=>(
   <span key={index} className={`each-color ${color}`} onClick={()=>setColorChoosen(color)}>
     {isColorChoosen===color&&<FontAwesomeIcon icon={faCheck} className="check-icon"/>}
   </span>
 ))}
</div> */}