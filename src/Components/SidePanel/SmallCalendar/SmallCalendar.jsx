import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SmallCalendar.scss";
import GetMonth from "../../../Utils/Month";
import GlobalContext from "../../../Context/GlobalContext";

const SmallCalendar = () => {
  const [currYear, setCurrYear] = useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth());

  const {
    currYearIndex,
    setCurrYearIndex,
    currMonthIndex,
    currWeekIndex,
    setCurrWeekIndex,
    currDayIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
  } = useContext(GlobalContext);

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth, currYear));
  }, [currMonth, currYear]);

  useEffect(() => {
    setCurrMonth(currMonthIndex);
    setCurrYear(currYearIndex);
  }, [currMonthIndex, currYearIndex]);
  

  const handlePrevYear = () => {
    setCurrYear(currYear - 1);
  };

  const handleNextYear = () => {
    setCurrYear(currYear + 1);
  };

  const handlePrevMonth = () => {
    setCurrMonth(currMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrMonth(currMonth + 1);
  };

  const handleSelectedDay = (day) => {
    const today=dayjs();
    if(day>today){
    const month=day.month();
      if (currMonthIndex != day.month()) {
        setCurrMonthIndex(day.month());
        setCurrYearIndex(day.year());
      }
      setCurrDayIndex(day.date());
      if(currWeekIndex!=day.week()-1)
      {
        setCurrWeekIndex(day.week()-1-month*4);
        console.log(day.week())
      }
      if (day === daySelected) {
        setDaySelected("");
      } else {
        setDaySelected(day);
      }
    }
  };
  function getDayClass(day) {
    const nowDay = dayjs().format("DD MM YY");
    const currDay = day.format("DD MM YY");
    const fadeDay = dayjs(new Date(currYear, currMonth));

    if (nowDay === currDay) {
      return "curr-day-bg";
    }
    else if (
      day.date() === currDayIndex &&
      day.month() === currMonthIndex 
      &&daySelected
    )
    {
      return "other-day-bg";
    }
    else if (fadeDay.month() !== day.month()) 
    {
      return "faded-bg";
    } 
    else 
    {
      return "";
    }
  }

  return (
    <div className="calendar">
      <header className="cal-header-container">
        <div className="cal-header">
          <button onClick={handlePrevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="month-year">
            <button onClick={handlePrevYear}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>

            <span>
              {dayjs(new Date(currYear, currMonth))
                .format(" MMMM, YYYY")
                .toString()}
            </span>

            <button onClick={handleNextYear}>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>

          <button onClick={handleNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="cal-week-days">
          {daysOfCurrMonth[0].map((day, index) => (
            <span key={index} className="week-days">
              {day.format("ddd")}
            </span>
          ))}
        </div>
      </header>

      <div className="cal-month">
        <div className="cal-days">
          {daysOfCurrMonth.map((row, index) => (
            <React.Fragment key={index}>
              {row.map((day, index) => (
                <button
                  className={`days ${getDayClass(day)}`}
                  onClick={() => {
                    handleSelectedDay(day);
                  }}
                  key={index}
                >
                  <span>{day.format("D")}</span>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCalendar;

