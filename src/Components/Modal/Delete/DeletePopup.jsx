import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CancelButton, DeleteButton } from "..//../Buttons/Buttons";
import "./DeletePopup.scss";

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

export function DeletePopup() {
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
    <div className="delete-content">
      <FontAwesomeIcon icon={faTrash} onClick={openModal} />
      <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="delete-header">
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} className="faXmark"/>
              <span className="dlt-txt">Are You sure You want to Delete?</span>
                <div className="dlt-popup-btns">
                  <span onClick={closeModal} className="dlt-btn">
                   <DeleteButton />
                  </span>
                  <span onClick={closeModal}>
                   <CancelButton />
                  </span>
                </div>
        </div>
      </Modal>
    </div>
  );
}


