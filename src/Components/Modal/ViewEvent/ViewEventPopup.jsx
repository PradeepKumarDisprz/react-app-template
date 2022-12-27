import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faXmark,
  faFileLines,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  CloseButton
} from "../../Buttons/Buttons";
import "./ViewEventPopup.scss";

const customStyles = {
  overlay: {
    backgroundColor: "none",
  },
  content: {
    boxShadow: "1px 2px 10px #9d9c9c",
    border: "1px solid #fff",
    top: "25%",
    left: "35%",
    width: "380px",
    height: "220px",
    background: "rgb(255,255,255)",
    border: "1px solid #ccc",
    transition: "0.5s ease-in",
  },
};

export function ViewEventPopup(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onDeleteClick = () => {
    closeModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="show-content">
      <FontAwesomeIcon icon={faTrashCan} onClick={openModal} />
      <Modal
      ariaHideApp={false}
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="view-header">
            <img src="" alt="" />
          {/* should open delete popup */}
          <div className="view-icons">
            <FontAwesomeIcon icon={faTrashCan} onClick={openModal} className="view-btn"/>
            <FontAwesomeIcon icon={faPenToSquare} onClick={openModal} className="view-btn view-edit" />
            <FontAwesomeIcon
              icon={faXmark}
              onClick={closeModal}
              className=" view-close"
            />
          </div>
        
        <div className="view-body">
            <div>Event</div>
          <div className="view-title">
            <FontAwesomeIcon icon={faStar} className="view-text-btn" />
            <span className="view-event-text">
              Event Title will come from props
            </span>
          </div>

          <div className="view-time">
            <FontAwesomeIcon icon={faClock} className="view-text-btn"/>
            <span className="view-event-text">Time will come here</span>
          </div>

          <div className="view-desc">
            <FontAwesomeIcon icon={faFileLines} className="view-text-btn"/>
            <span className="view-event-text">Description will come here</span>
          </div>
        </div>

          <div className="view-close-btn" onClick={closeModal}>
              <CloseButton />
          </div>


        </div>
      </Modal>
    </div>
  );
}


