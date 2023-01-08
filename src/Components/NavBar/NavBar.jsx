import React, { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./NavBar.scss";
import EventLogo from "../../Assests/EventLogo.svg";
import { TodayButton, CreateButton } from "../Buttons/Buttons";
import dayjs from "dayjs";

const NavBar = () => {
  const {
    currMonthIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
    setDaySelected,
    setCurrYearIndex,
    setShowModal,
  } = useContext(GlobalContext);

  const handleCreateModal = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    setCurrYearIndex(dayjs().year());
    setCurrMonthIndex(
      currMonthIndex === dayjs().month()
        ? currMonthIndex + Math.random()
        : dayjs().month()
    );
    setCurrDayIndex(dayjs().date());
    setDaySelected("");
  };

  return (
    <div className="nav-bar">
      <div className="nav-logo-container">
        <img src={EventLogo} alt="calendar" className="nav-logo" />
        <span className="nav-title">Calendar</span>
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
  );
};

export default NavBar;
