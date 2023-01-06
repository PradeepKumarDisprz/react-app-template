import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark } from "@fortawesome/free-solid-svg-icons";
import { CancelButton, DiscardButton } from "../../Buttons/Buttons";
import "./Discard.scss";

const Discard=()=>{
  const [click, setClick] = useState(false);
  return(
    <>
      <div className="hi" onClick={() => setClick(!click)}>
        hi
      </div>
      {click && (
        <div className="discard-pop-up-overlay" onClick={() => setClick(false)}>
          <div className="discard-pop-up-box" onClick={(e) => e.stopPropagation()}>
            <div className="discard-header">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setClick(false)}
                className="discard-faXmark"
              />
            </div>

            <span className="discard-txt">Do you want to discard unsaved changes?</span>
            <div className="discard-popup-btns">
              <span onClick={() => setClick(false)} className="discard-cancel-btn">
                <CancelButton />
              </span>
              <span onClick={() => setClick(false)}>
                <DiscardButton />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Discard;




