import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./EllipsisButton.scss";
import Delete from "../../Modal/DeleteModal/Delete"

function EllipsisButton({handleDelete,handleEdit,isOpen,setIsOpen}) {
  const [isDelete,setDelete]=useState(false);
  
  return (
    <>
    <span onClick={()=>setIsOpen(!isOpen)} className="ellipsis-icon"><FontAwesomeIcon icon={faEllipsis}  /></span>
    {isOpen&&
    <div className="ellipsis-overlay">
    <div className="ellipsis-buttons">
      <button className="btn" onClick={()=>{setIsOpen(!isOpen);setDelete(true)}}>
          <span>Delete</span>
      </button>
      <button className="btn edit" onClick={()=>{setIsOpen(!isOpen);handleEdit()}}>
          <span>Edit</span>
      </button>
    </div>
    </div>}

    {isDelete&&<Delete handleDelete={handleDelete} setIsDelete={setDelete}/>}
    </>
  );
}

export default EllipsisButton;
