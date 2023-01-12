import React from "react";
import { createPortal } from "react-dom";
import CreateEvent from "./Components/Modal/CreateEventModal/CreateEvent";
import Response from "./Components/Modal/ResponseModal/Response";
import RequestLoader from "./Components/Modal/Loader/RequestLoader";
// import UpdateEvent from "./Components/Modal/UpdateEventModal/UpdateEvent";
import ViewEvent from "./Components/Modal/ViewEventModal/ViewEvent";

const Modal = () => {
  return  createPortal(
    <>
      <CreateEvent />
      {/* <UpdateEvent /> */}
      <Response/>
      <RequestLoader/>
      <ViewEvent/>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
