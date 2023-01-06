import { useContext, useState } from "react";
import React from "react";
import EllipsisButton from "../../Buttons/DropDown/Ellipsis/EllipsisButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faFileLines,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { CloseButton } from "../../Buttons/Buttons";
import "./ViewEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import dayjs from "dayjs";

const ViewEvent = () => {
  const { viewEvent, setViewEvent } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  // const [click, setClick] = useState(true);
  return (
    <>
      {viewEvent != null && (
        <div className="view-pop-up-overlay" onClick={() => setViewEvent(null)}>
          <div className="view-pop-up-box" onClick={(e) => {e.stopPropagation()
          isOpen&&setIsOpen(false);
           }}>
            <div className="view-event-header">
              <span className="view-header-ellipsis">
                <EllipsisButton isOpen={isOpen} setIsOpen={setIsOpen} meet={viewEvent}/>
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setViewEvent(null)}
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
                          // .subtract(5, "hours")
                          // .subtract(30, "minutes")
                          .format("DD-MM-YYYY")}
                      </div>
                    )}
                    {viewEvent != null && (
                      <div>
                        <span className="txt">Time</span>
                        {dayjs(viewEvent.appointmentStartTime)
                          // .subtract(5, "hours")
                          // .subtract(30, "minutes")
                          .format(" hh:mm a")+" - "+dayjs(viewEvent.appointmentEndTime)
                          // .subtract(5, "hours")
                          // .subtract(30, "minutes")
                          .format(" hh:mm a")}
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
              <span onClick={() => setViewEvent(null)}>
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

// import React, { useState } from "react";
// import Modal from "react-modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTrashCan,
//   faPenToSquare,
//   faXmark,
//   faFileLines,
//   faStar,
//   faClock,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   CloseButton
// } from "../../Buttons/Buttons";
// import "./ViewEventPopup.scss";

// const customStyles = {
//   overlay: {
//     backgroundColor: "none",
//   },
//   content: {
//     boxShadow: "1px 2px 10px #9d9c9c",
//     border: "1px solid #fff",
//     top: "25%",
//     left: "35%",
//     width: "380px",
//     height: "220px",
//     background: "rgb(255,255,255)",
//     border: "1px solid #ccc",
//     transition: "0.5s ease-in",
//   },
// };

// export function ViewEventPopup(props) {
//   const [modalIsOpen, setIsOpen] = useState(false);

//   const onDeleteClick = () => {
//     closeModal();
//   };

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="show-content">
//       <FontAwesomeIcon icon={faTrashCan} onClick={openModal} />
//       <Modal
//       ariaHideApp={false}
//         closeTimeoutMS={500}
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         <div className="view-header">
//             <img src="" alt="" />
//           {/* should open delete popup */}
//           <div className="view-icons">
//             <FontAwesomeIcon icon={faTrashCan} onClick={openModal} className="view-btn"/>
//             <FontAwesomeIcon icon={faPenToSquare} onClick={openModal} className="view-btn view-edit" />
//             <FontAwesomeIcon
//               icon={faXmark}
//               onClick={closeModal}
//               className=" view-close"
//             />
//           </div>

//         <div className="view-body">
//             <div>Event</div>
//           <div className="view-title">
//             <FontAwesomeIcon icon={faStar} className="view-text-btn" />
//             <span className="view-event-text">
//               Event Title will come from props
//             </span>
//           </div>

//           <div className="view-time">
//             <FontAwesomeIcon icon={faClock} className="view-text-btn"/>
//             <span className="view-event-text">Time will come here</span>
//           </div>

//           <div className="view-desc">
//             <FontAwesomeIcon icon={faFileLines} className="view-text-btn"/>
//             <span className="view-event-text">Description will come here</span>
//           </div>
//         </div>

//           <div className="view-close-btn" onClick={closeModal}>
//               <CloseButton />
//           </div>

//         </div>
//       </Modal>
//     </div>
//   );
// }
