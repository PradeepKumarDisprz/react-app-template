import React, { useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef,useEffect} from "react";
import "./EllipsisButton.scss";
import GlobalContext from "../../../Context/GlobalContext";

function EllipsisButton({meet,isOpen,setIsOpen}) {
  const {setDeleteEvent,viewEvent,setViewEvent,setUpdateEvent,setShowModal}=useContext(GlobalContext);
  const handleDelete=()=>
  {
    // const meeting=meet!=null?meet:""

    setDeleteEvent(meet!=null&&meet.appointmentId)
    setViewEvent(null);
    setIsOpen(!isOpen)
  }

  const handleEdit=()=>
  {
    setUpdateEvent(meet!=null&&meet)
    setViewEvent(null);
    setIsOpen(!isOpen)
    setShowModal(true);
  }





  return (
    <div >
    <span onClick={()=>setIsOpen(!isOpen)} className="ellipsis-icon"><FontAwesomeIcon icon={faEllipsis}  /></span>
    {isOpen&&
    <div className="ellipsis-overlay">
    <div className="ellipsis-buttons">
      <button className="btn" onClick={handleDelete}>
          <span>Delete</span>
      </button>
      <button className="btn edit" onClick={handleEdit}>
          <span>Edit</span>
      </button>
    </div>
    </div>}
    </div>
  );
}

export default EllipsisButton;
