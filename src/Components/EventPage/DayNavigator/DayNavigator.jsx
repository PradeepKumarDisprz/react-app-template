import "./DayNavigator.scss";
import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GetMonth from "../../../Utils/Month";
import dayjs from "dayjs";
import GetWeek from "../../../Utils/Week";

const DayNavigator = () => {
  const [currYear, setCurrYear] = useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [rowIndex, setRowIndex] = useState(0);
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(
    GetMonth(currMonth, currYear)
  );
  const {
    setCurrYearIndex,
    currMonthIndex,
    currYearIndex,
    currDayIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
    currWeekIndex,
    setCurrWeekIndex,
  } = useContext(GlobalContext);

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth, currYear));
  }, [currMonth, currYear]);

  useEffect(() => {
    setCurrMonth(currMonthIndex);
    setCurrYear(currYearIndex);
  }, [currMonthIndex, currYearIndex]);


  useEffect(() => {
    if (currWeekIndex != rowIndex) {
      setRowIndex(currWeekIndex);
    }
    setDaysOfCurrMonth(GetMonth(currMonthIndex, currYearIndex));
  }, [currMonthIndex, currWeekIndex]);



  const handlePrevWeek = () => {
    if (rowIndex - 1 < 0) {
      setCurrMonthIndex(currMonthIndex - 1);
      setCurrWeekIndex(4);
    } else {
      setRowIndex(rowIndex - 1);
      setCurrWeekIndex(rowIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (rowIndex + 1 > 4) {
      setCurrMonthIndex(currMonthIndex + 1);
      setCurrWeekIndex(0);
    } else {
      setRowIndex(rowIndex + 1);
      setCurrWeekIndex(rowIndex + 1);
    }
  };

  const handleSelectedDay = (day) => {
    if (currMonthIndex != day.month()) {
      setCurrMonthIndex(day.month());
      setCurrYearIndex(day.year());
    }
    setCurrDayIndex(day.date());
    setDaySelected(day);
  };

  function getDayClass(day) {
    if (
      day.date() === currDayIndex &&
      daySelected
    ) {
      return "curr-day-in-week-bg";
    }
  }

  return (
    <div className="week-navigator">
      <button onClick={handlePrevWeek}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="day-view-week">
        {daysOfCurrMonth[rowIndex]?.map((day, index) => (
          <div
            className={`day-view-day ${getDayClass(day)}`}
            onClick={() => {
              handleSelectedDay(day);
            }}
            key={index}
          >
            <div className="week-day-name">{day.format("ddd")}</div>
            <div className="week-date">{day.format("DD")}</div>
          </div>
        ))}
      </div>
      <button onClick={handleNextWeek}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default DayNavigator;
