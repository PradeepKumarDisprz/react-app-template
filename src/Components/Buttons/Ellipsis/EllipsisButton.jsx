import React, { useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./EllipsisButton.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import { apiActions } from "../../../Reducer/TriggerApiReducer";

function EllipsisButton({meet,isOpen,setIsOpen}) {
  const {apiDispatch,modalDispatch}=useContext(GlobalContext);
  const handleDelete=()=>
  {
    apiDispatch({type:apiActions.DELETE_EVENT,payload:meet.appointmentId})
    modalDispatch({type:actions.RESET_VIEW_EVENT})
    setIsOpen(!isOpen)
    
  }

  const handleEdit=()=>
  {
    // handleViewEvent();
    setIsOpen(!isOpen);
    modalDispatch({type:actions.RESET_VIEW_EVENT})
    modalDispatch({type:actions.OPEN_UPDATE_EVENT,payload:meet});
    
  }


  return (
    <>
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
    </>
  );
}

export default EllipsisButton;
