import dayjs from "dayjs";
import React, { useContext, useEffect, useState,Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./SmallCalendar.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { calendarActions } from "../../../Reducer/CalendarReducer";

const SmallCalendar = () => {
  const {calendarDispatch,calendarState} = useContext(GlobalContext);
  const [selectedDay, setselectedDay] = useState(dayjs());

  const handlePrevMonth = () => {
    calendarDispatch({type:calendarActions.DECREMENT_MONTH,payload:1});
    
  };

  const handleNextMonth = () => {
    calendarDispatch({type:calendarActions.INCREMENT_MONTH,payload:1});
  };

  const handleSelectedDay = (day) => {
      if (calendarState.currMonthIndex !== day.month()) {
        calendarDispatch({type:calendarActions.SET_CURR_YEAR,payload:day.year()})
        calendarDispatch({type:calendarActions.SET_CURR_MONTH,payload:day.month()})
      }
      calendarDispatch({type:calendarActions.SET_CURR_DAY,payload:day.date()})
      day===selectedDay?setselectedDay(""): setselectedDay(day);
  };

  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const today = dayjs().format(format);
    const receivedDay = day.format(format);
    const fadeDay = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex));

    if (today === receivedDay) {
      return "curr-day-bg";
    } 
    else if (
      selectedDay&&
      day.date() === calendarState.currDayIndex&&
      day.month() === calendarState.currMonthIndex
    ) {
      return "other-day-bg";
    } 
    else if (fadeDay.month() !== day.month()) {
      return "faded-bg";
    } 
    else {
      return "";
    }
  };

  return (
    <div className="calendar">
      <header className="cal-header">
          <div className="month-year">
            <span title="currMonth-currYear">
              {dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex))
                .format(" MMMM YYYY")
                .toString()}
            </span>
          </div>

          <div className="month-nav-btns">
          <button title="prev-month" onClick={handlePrevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button title="next-month" onClick={handleNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          </div>
      </header>

      <div className="cal-month">
      <div className="cal-week-days">
          {calendarState.daysOfCurrMonth[0].map((day, index) => (
            <span key={index} className="week-days" title={`${day.format("dddd")}`}>
              {day.format("ddd")}
            </span>
          ))}
        </div>
        <div className="cal-days">
          {calendarState.daysOfCurrMonth.map((row, index) => (
            <Fragment key={index}>
              {row.map((day, index) => (
                <button
                  className={`days ${getDayClass(day)}`}
                  onClick={() => {
                    handleSelectedDay(day);
                  }}
                  key={index}
                  title={`${day.format("DD-MM-YYYY")}`}
                >
                  <span>{day.format("D")}</span>
                </button>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCalendar;
