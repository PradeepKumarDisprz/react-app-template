import React, { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./NavBar.scss";
import EventLogo from "../../Assests/EventLogo.svg";
import { TodayButton, CreateButton } from "../Buttons/Buttons";
import CreateEvent from "../Modal/CreateEventModal/CreateEvent";
import dayjs from "dayjs";
import { actions } from "../../Reducer/ModalReducer";

const NavBar = () => {
  const {
    currMonthIndex,
    currYearIndex,
    currDayIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
    setCurrWeekIndex,
    setDaySelected,
    setCurrYearIndex,
    modalDispatch,
  } = useContext(GlobalContext);

  const handleReset = () => {
    setCurrYearIndex(dayjs().year());
    setCurrMonthIndex(
      currMonthIndex === dayjs().month()
        ? currMonthIndex + Math.random()
        : dayjs().month()
    );
    setCurrDayIndex(dayjs().date());
    setCurrWeekIndex(dayjs(currYearIndex, currMonthIndex, currDayIndex).week());
    setDaySelected("");
  };

  return (
    <>
      <div className="nav-bar">

        <div className="nav-start">
          <div className="nav-logo-container">
            <img src={EventLogo} alt="calendar" className="nav-logo" />
            <span className="nav-title">Calendar</span>
          </div>
          <div className="nav-day">
            <button title="current-day">
              {dayjs(new Date(currYearIndex, currMonthIndex, currDayIndex)).format("MMMM DD, YYYY")}
            </button>
          </div>
        </div>

        <div className="nav-end">
          <div className="nav-btns" onClick={handleReset} title="reset-to-today's-date">
            <TodayButton />
          </div>
          <div className="nav-btns" onClick={()=>{ modalDispatch({ type: actions.OPEN_ADD_EVENT });}} title="create">
            <CreateButton />
          </div>
        </div>

      </div>
    </>
  );
};

export default NavBar;
