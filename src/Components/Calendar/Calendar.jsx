import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import EventPage from "../EventPage/EventPage";
import SidePanel from "../SidePanel/SidePanel";
import Modal from "../../Modal";



const Calendar = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <>
    <Modal/>
    <NavBar/>
    <SidePanel/>
    <EventPage/>
    </>  
  );
};

export default Calendar;
