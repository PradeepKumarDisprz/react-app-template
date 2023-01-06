import React from "react";
import { useState } from "react";
import "./Delete.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CancelButton, DeleteButton } from "../../Buttons/Buttons";

function Delete() {
  const [click, setClick] = useState(false);
  return(
    <>
      <div className="hi" onClick={() => setClick(!click)}>
        hihello
      </div>
      {click && (
        <div className="dlt-pop-up-overlay" onClick={() => setClick(false)}>
          <div className="dlt-pop-up-box" onClick={(e) => e.stopPropagation()}>
            <div className="dlt-header">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setClick(false)}
                className="dlt-faXmark"
              />
            </div>

            <span className="dlt-txt">Do You want to continue Delete?</span>
            <div className="dlt-popup-btns">
              <span onClick={() => setClick(false)} className="dlt-btn">
                <DeleteButton />
              </span>
              <span onClick={() => setClick(false)}>
                <CancelButton />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Delete;
