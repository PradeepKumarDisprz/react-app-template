import { useContext, useState } from "react";
import React from "react";
import EllipsisButton from "../../Buttons/Ellipsis/EllipsisButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faFileLines,faStar,faClock,faTrash,faPen} from "@fortawesome/free-solid-svg-icons";
import { CloseButton } from "../../Buttons/Buttons";
import "./ViewEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import dayjs from "dayjs";
import { actions } from "../../../Reducer/ModalReducer";

const ViewEvent = () => {
  const {modalState,modalDispatch}=useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {modalState.viewEvent != null &&(
        <div className="view-pop-up-overlay" onClick={() => modalDispatch({type:actions.RESET_VIEW_EVENT})}>
          <div className="view-pop-up-box" onClick={(e) => {e.stopPropagation()
          isOpen&&setIsOpen(false);
           }}>
            <div className="view-event-header">
              <span className="view-header-ellipsis">
                <EllipsisButton isOpen={isOpen} setIsOpen={setIsOpen} meet={modalState.viewEvent}/>
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                size={"lg"}
                onClick={() => modalDispatch({type:actions.RESET_VIEW_EVENT})}
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
                    {modalState.viewEvent != null && modalState.viewEvent.appointmentTitle}
                  </div>
                </div>

                <div className="view-txt-common-style view-time">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="view-content-icon"
                  />
                  <div className="view-event-text">
                    {
                      <div className="time">
                        <span className="txt">Date</span>{" "}
                        {dayjs(modalState.viewEvent.appointmentStartTime)
                          .format("DD-MM-YYYY")}
                      </div>
                    }
                    {
                      <div>
                        <span className="txt">Time</span>
                        {dayjs(modalState.viewEvent.appointmentStartTime)
                          .format(" HH:mm a")+" - "+dayjs(modalState.viewEvent.appointmentEndTime)
                          .format(" HH:mm a")}
                      </div>
                    }
                  </div>
                </div>

                <div className="view-txt-common-style view-desc">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="view-content-icon"
                  />
                  <div className="view-event-text description">
                    {modalState.viewEvent != null&&modalState.viewEvent.appointmentDescription?modalState.viewEvent.appointmentDescription: "No Description Added"}
                  </div>
                </div>
              </div>
            </div>

            <div className="view-event-popup-btns">
              <span onClick={() => modalDispatch({type:actions.RESET_VIEW_EVENT})}>
                <CloseButton />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewEvent;
