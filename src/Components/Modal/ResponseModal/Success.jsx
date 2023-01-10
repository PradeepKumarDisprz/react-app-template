import React, { useContext } from "react";
import { useState } from "react";
import "./Response.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck,faExclamation} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";


const Success = () => {
    const {modalState,modalDispatch} =useContext(GlobalContext);
    return ( <>
           { modalState.showRequestSuccess&&(
          <div className="resp-pop-up-overlay" onClick={() => modalDispatch({type:actions.CLOSE_REQUEST_SUCCESS})}>
            <div
              className="resp-pop-up-box"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faCheck} className="resp-check"/>
              <div className="resp-txt">Request Successful !</div>
              <div className="resp-header">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => modalDispatch({type:actions.CLOSE_REQUEST_SUCCESS})}
                  className="resp-faXmark"
                />
              </div>
            </div>
          </div>
        )}</> );
}
 
export default Success;