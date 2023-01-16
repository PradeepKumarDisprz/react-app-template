import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark } from "@fortawesome/free-solid-svg-icons";
import { DiscardButton,CancelButton } from "../../Buttons/Buttons";
import "./Discard.scss";
import { createPortal } from "react-dom";

const Discard=({setDiscard,handleCloseModal})=>{

  return createPortal(
    <>     
    <div className="discard-pop-up-overlay">
          <div className="discard-pop-up-box" >
            <div className="discard-header">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {setDiscard(false)}}
                className="discard-faXmark"
              />
            </div>

            <span className="discard-txt">Do you want to discard unsaved data?</span>
            <div className="discard-popup-btns">
              <span className="discard-cancel-btn" onClick={() => {setDiscard(false)}}>
                <CancelButton />
              </span>
              <span onClick={() => {setDiscard(false);handleCloseModal()}}>
                <DiscardButton  />
              </span>
            </div>
          </div>
        </div>
    
    </>,
    document.getElementById('modal')
  );
}

export default Discard;




