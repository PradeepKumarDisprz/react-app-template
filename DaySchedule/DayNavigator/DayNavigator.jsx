import "./DayNavigator.scss";
import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

const DayNavigator = () => {
  const {
    currMonthIndex,
    setCurrMonthIndex,
    currDayIndex,
    setCurrDayIndex,
    currYearIndex,
    setCurrYearIndex,
    setDaySelected,
  } = useContext(GlobalContext);
  const dayViewDate = dayjs(
    new Date(currYearIndex, currMonthIndex, currDayIndex)
  );

  useEffect(() => {
    if (currMonthIndex != dayViewDate.month()) {
      setCurrMonthIndex(dayViewDate.month());
      setCurrDayIndex(dayViewDate.date());
      setCurrYearIndex(dayViewDate.year());
    }
  }, [currDayIndex]);

  const handlePrevDay = () => {
    setTimeout(() => {
      setCurrDayIndex(currDayIndex - 1);
    }, 500);
   
  };

  const handleNextDay = () => {
    setTimeout(() => {
      setCurrDayIndex(currDayIndex + 1);
    }, 500);
   
  };

  return (
    <>
      <div className="nav-month-year">
        <button onClick={handlePrevDay}>
          <FontAwesomeIcon icon={faChevronLeft} className="day-navigate-icons" />
        </button>
        <div>{dayViewDate.format(" MMMM D, YYYY").toString()}</div>
        <button onClick={handleNextDay}>
          <FontAwesomeIcon icon={faChevronRight} className="day-navigate-icons" />
        </button>
      </div>
    </>
  );
};

export default DayNavigator;
