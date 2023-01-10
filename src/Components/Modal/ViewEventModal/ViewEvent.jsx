import { useContext, useState } from "react";
import React from "react";
import EllipsisButton from "../../Buttons/Ellipsis/EllipsisButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faFileLines,faStar,faClock} from "@fortawesome/free-solid-svg-icons";
import { CloseButton } from "../../Buttons/Buttons";
import "./ViewEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import dayjs from "dayjs";
import { createPortal } from "react-dom";

const ViewEvent = ({viewEvent,handleViewEvent}) => {

  const [isOpen, setIsOpen] = useState(false);
  return createPortal(
    <>
      {(
        <div className="view-pop-up-overlay" onClick={() => handleViewEvent()}>
          <div className="view-pop-up-box" onClick={(e) => {e.stopPropagation()
          isOpen&&setIsOpen(false);
           }}>
            <div className="view-event-header">
              <span className="view-header-ellipsis">
                <EllipsisButton isOpen={isOpen} setIsOpen={setIsOpen} meet={viewEvent} handleViewEvent={handleViewEvent}/>
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleViewEvent()}
                className=" view-header-btn"
              />
            </div>

            <div className="view-event-body">
              <div className="view-event-title">Event</div>
              <div className="view-event-content">
                <div className="view-txt-common-style view-title">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="view-content-icon"
                  />
                  <div className="view-event-text">
                    {viewEvent != null && viewEvent.appointmentTitle}
                  </div>
                </div>

                <div className="view-txt-common-style view-time">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="view-content-icon"
                  />
                  <div className="view-event-text">
                    {viewEvent != null && (
                      <div className="time">
                        <span className="txt">Date</span>{" "}
                        {dayjs(viewEvent.appointmentStartTime)
                          .format("DD-MM-YYYY")}
                      </div>
                    )}
                    {viewEvent != null && (
                      <div>
                        <span className="txt">Time</span>
                        {dayjs(viewEvent.appointmentStartTime)
                          .format(" HH:mm a")+" - "+dayjs(viewEvent.appointmentEndTime)
                          .format(" HH:mm a")}
                      </div>
                    )}
                  </div>
                </div>

                <div className="view-txt-common-style view-desc">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="view-content-icon"
                  />
                  <div className="view-event-text description">
                    {viewEvent != null&&viewEvent.appointmentDescription?viewEvent.appointmentDescription: "No Description Added"}
                  </div>
                </div>
              </div>
            </div>

            <div className="view-event-popup-btns">
              <span onClick={() => handleViewEvent()}>
                <CloseButton />
              </span>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default ViewEvent;
