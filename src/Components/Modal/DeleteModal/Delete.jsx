import React from "react";
import "./Delete.scss";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DeleteButton,CancelButton } from "../../Buttons/Buttons";

const Delete=({handleDelete,setIsDelete})=> {

  return createPortal(
    <>
        <div className="dlt-pop-up-overlay">
          <div className="dlt-pop-up-box" >
            <div className="dlt-header">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsDelete(false)}
                className="dlt-faXmark"
              />
            </div>

            <span className="dlt-txt">Do You want to continue Delete?</span>
            <div className="dlt-popup-btns">
              <span  className="dlt-cancel-btn" onClick={() => setIsDelete(false)}>
                <CancelButton />
              </span>
              <span onClick={() => {setIsDelete(false);handleDelete()}} >
                <DeleteButton />
              </span>
            </div>
          </div>
        </div>
     
    </>,
    document.getElementById('modal')
  );
}

export default Delete;
