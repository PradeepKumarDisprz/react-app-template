import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import EventPage from "../EventPage/EventPage";
import SidePanel from "../SidePanel/SidePanel";
import Modal from "../../Modal";



const Calendar = () => {
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
