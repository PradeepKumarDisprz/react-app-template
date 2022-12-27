import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Month.scss";
import { GetMonth } from "../../Helpers/Builder";

const Month = () => {
  const [currYear, setCurrYear] = useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth(currMonth));
  const [daySelected, setDaySelected] = useState("");
  const [count, setCount] = useState(0);

  //daySelected=+1

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth, currYear));
  }, [currMonth, currYear]);

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
    const today = dayjs();
    if (!(day < today)) {
      if (day === daySelected) {
        setCount(0);
        setDaySelected("");
      } else {
        setCount(1);
        setDaySelected(day);
      }
    }
  };

  function getDayClass(day) {
    const format = "DD MM YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const selectedDay = daySelected && daySelected.format(format);
    const fadeDay = dayjs(new Date(currYear, currMonth));

    if (nowDay === currDay) {
      return "curr-day-bg";
    } else if (currDay === selectedDay) {
      return "other-day-bg";
    } else if (fadeDay.month() !== day.month()) {
      return "faded-bg";
    } else {
      return "";
    }
  }

  return (
    <div className="big-cal-month">
      {/* <div className="big-cal-week-days">
        {daysOfCurrMonth[0].map((day, index) => (
          <span key={index} className="big-week-days">
            {day.format("dddd")}
          </span>
        ))}
      </div> */}

      <div className="big-cal-days">

        {daysOfCurrMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) => (
             <>
             {
            i===0?
            <button
                className=" each-day"
                onClick={() => handleSelectedDay(day)}
                key={index}
              >
                
                <span className="week-name">  {day.format("ddd")}</span>
                <span className={`day-num ${getDayClass(day)}`}>{day.format("D")==="1"&&day.format("MMM")} {day.format("D")}
                </span>
              </button>:
             <button
                className="each-day"
                onClick={() => handleSelectedDay(day)}
                key={index}
              >
                <span className={`day-num ${getDayClass(day)}`}>
                  {day.format("D")}
                </span>
              </button>
              }
              </>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Month;
