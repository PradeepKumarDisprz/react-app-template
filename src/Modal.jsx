import React from "react";
import { createPortal } from "react-dom";
import CreateEvent from "./Components/Modal/CreateEventModal/CreateEvent";
import Response from "./Components/Modal/ResponseModal/Response";
import RequestLoader from "./Components/Modal/Loader/RequestLoader";
import ViewEvent from "./Components/Modal/ViewEventModal/ViewEvent";

const Modal = () => {
  return  createPortal(
    <>
      <CreateEvent />
      <Response/>
      <RequestLoader/>
      <ViewEvent/>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
