import React, { useContext, useEffect } from "react";
import "./Response.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck,faExclamation} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../Context/GlobalContext";
// import { requestActions } from "../../../Reducer/RequestReducer";
import { actions } from "../../../Reducer/ModalReducer";


function Response() {

  const {requestState,requestDispatch,modalState,modalDispatch} =useContext(GlobalContext);

  useEffect(()=>
  {
    if(modalState.showRequestSuccess)
    {
      setTimeout(()=>
      {
        modalDispatch({type:actions.CLOSE_REQUEST_SUCCESS});
      },1000)
    }
  },[modalState.showRequestSuccess])

  return (
    <>     
      { modalState.errorResponse!=null&& (
          <div className="error-pop-up-overlay" onClick={() => {modalDispatch({type:actions.REMOVE_ERROR_RESPONSE});}}>
            <div className="error-pop-up-box" onClick={(e)=>e.stopPropagation()}>
              <div className="error-header">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() =>{ modalDispatch({type:actions.REMOVE_ERROR_RESPONSE});}}
                  className="error-faXmark"
                />
              </div>

              <div className="error-content">
              <div className="error-content-name">
               Error Occurred
                  <FontAwesomeIcon icon={faExclamation} className="error-symbol"/>
              </div>               
              <div className="error-message">
                  {modalState.errorResponse}
              </div>
              </div>

            </div>
          </div>
        )}
        
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
        )}
      
    </>
  );
}

export default Response;
