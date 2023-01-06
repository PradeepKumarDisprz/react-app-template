import React, { useContext } from "react";
import { useState } from "react";
import "./Response.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck,faExclamation} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../Context/GlobalContext";


function Response() {

  const {showRequestSuccess,setShowRequestSuccess,setErrorResponse,errorResponse,isLoading} =useContext(GlobalContext);

  return (
    <>     
      { errorResponse!==null && (
          <div className="error-pop-up-overlay" onClick={() => setErrorResponse(null)}>
            <div className="error-pop-up-box" onClick={(e)=>e.stopPropagation()}>
              <div className="error-header">

                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setErrorResponse(null)}
                  className="error-faXmark"
                />
              </div>

              <div className="error-content">
              <div className="error-content-name">
              {/* {errorResponse.statusCode} */}
               Error Occurred
                  <FontAwesomeIcon icon={faExclamation} className="error-symbol"/>
              </div>

              <div className="error-code">
                 😥😥😥
                </div>
                
                <div className="error-message">
                  {errorResponse.message.errorMessage}
                </div>
              </div>
            </div>
          </div>
        )}
       { showRequestSuccess&&(
          <div className="resp-pop-up-overlay" onClick={() => setShowRequestSuccess(false)}>
            <div
              className={`resp-pop-up-box ${showRequestSuccess&&"resp-trans"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faCheck} className="resp-check"/>
              <div className="resp-txt">Request Successfull 😎!</div>
              <div className="resp-header">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setShowRequestSuccess(false)}
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
