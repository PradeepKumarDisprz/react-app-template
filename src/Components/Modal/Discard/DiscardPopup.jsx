import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faXmark } from "@fortawesome/free-solid-svg-icons";
import { CancelButton, DiscardButton } from "..//../Buttons/Buttons";
import "./DiscardPopup.scss";

const customStyles = {
  overlay: {
    backgroundColor: "none",
  },
  content: {
    boxShadow: "1px 2px 10px #9d9c9c",
    border: "1px solid #fff",
    top: "25%",
    left: "35%",
    width: "280px",
    height: "180px",
    background: "rgb(255,255,255)",
    border: "1px solid #ccc",
    transition: "0.5s ease-in"
  },
};

export function DiscardPopup() {
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
    <div className="discard-content">
      <FontAwesomeIcon icon={faTrash} onClick={openModal} />
      <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="discard-header">
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} className="faXmark"/>
              <span className="discard-txt">Discard Unsaved Changes</span>
                <div className="discard-popup-btns">
                  <span onClick={closeModal} className="discard-cancel-btn">
                   <CancelButton />
                  </span>
                  <span onClick={closeModal}>
                   <DiscardButton />
                  </span>
                </div>
        </div>
      </Modal>
    </div>
  );
}


