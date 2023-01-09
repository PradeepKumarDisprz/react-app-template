import React, { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./NavBar.scss";
import EventLogo from "../../Assests/EventLogo.svg";
import { TodayButton, CreateButton } from "../Buttons/Buttons";
import CreateEvent from "../Modal/CreateEventModal/CreateEvent";
import dayjs from "dayjs";

const NavBar = () => {
  const [showModal,setShowModal]=useState(false);

  const {
    currMonthIndex,
    currYearIndex,
    currDayIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
    setCurrWeekIndex,
    setDaySelected,
    setCurrYearIndex,
    // setShowModal,
  } = useContext(GlobalContext);

  const handleCreateModal = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    setCurrYearIndex(dayjs().year());
    setCurrMonthIndex(
      currMonthIndex === dayjs().month()
      ? currMonthIndex + Math.random()
      : dayjs().month());
    setCurrDayIndex(dayjs().date());
    setCurrWeekIndex(dayjs(currYearIndex,currMonthIndex,currDayIndex).week())
    setDaySelected("");
  };

  return (
    <>
    <div className="nav-bar">
      <div className="nav-start">
      <div className="nav-logo-container">
        <img src={EventLogo} alt="calendar" className="nav-logo" />
        <span className="nav-title">Simple Calendar</span>
      </div>
      <div className="nav-day">
        <button>{dayjs(new Date(currYearIndex,currMonthIndex,currDayIndex)).format("MMMM DD, YYYY")}</button>
      </div>
      </div>
      <div className="nav-end">
        <div className="nav-btns" onClick={handleReset}>
          <TodayButton />
        </div>
        <div className="nav-btns" onClick={handleCreateModal}>
          <CreateButton />
        </div>
      </div>
    </div>
    {showModal&&<CreateEvent/>}
    </>
  );
};

export default NavBar;
