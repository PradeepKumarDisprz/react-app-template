import "./DayNavigator.scss";
import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GetMonth from "../../Utils/Month";
import dayjs from "dayjs";

const DayNavigator = () => {
  const [currYear, setCurrYear] = useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth(currMonth,currYear));
  const [rowIndex, setRowIndex] = useState(0);

  const {
    currYearIndex,
    setCurrYearIndex,
    currMonthIndex,
    currDayIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
  } = useContext(GlobalContext);

  const dayViewDate = dayjs(
    new Date(currYearIndex, currMonthIndex, currDayIndex)
  );

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth, currYear));
  }, [currMonth, currYear]);


  useEffect(() => {
    if (currMonthIndex != dayViewDate.month()) {
      setCurrMonthIndex(dayViewDate.month());
      setCurrDayIndex(dayViewDate.date());
      setCurrYearIndex(dayViewDate.year());
    }
  }, [currDayIndex]);

  const handlePrevDay = () => {
    // if((dayViewDate.format("ddd"))==="Sun"&&(dayViewDate.format("D")=="1")||(dayViewDate.format("ddd"))==="Sat"&&(dayViewDate.format("D")==))
    if(dayViewDate.format("ddd")==="Sun")
    {
      setRowIndex(rowIndex-1) 
    }
    // setTimeout(() => {
      setCurrDayIndex(currDayIndex - 1);
    // }, 500);
  };

  const handleNextDay = () => {
    if(dayViewDate.format("ddd")=="Sat")
    {
      setRowIndex(rowIndex+1) 
    }
    // setTimeout(() => {
      setCurrDayIndex(currDayIndex + 1);
    // }, 500);
  };

  const handleSelectedDay = (day) => {
      // if (currMonthIndex != day.month()) {
      //   setCurrMonthIndex(day.month());
      //   setCurrYearIndex(day.year());
      // }
      setCurrDayIndex(day.date());

      if (day === daySelected) {
        setDaySelected("");
      } 
      else {
        setDaySelected(day);
      }
  };
  function getDayClass(day) {
    const today = dayjs()
    if (
      day.date() === currDayIndex &&
      day.month() === currMonthIndex &&
      daySelected
    ) {
      return "curr-day-in-week-bg";
    } 
    else if(day.date()<today.date())
    {
      return "faded-day-in-week-bg"
    }
  }

  return (

      <div className="nav-month-year">
        <button onClick={handlePrevDay}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="day-view-week">
          {daysOfCurrMonth[rowIndex].map((day, index) => (
            <div
              className={`day-view-week-day ${getDayClass(day)}`}
              onClick={() => {
                handleSelectedDay(day);
              }}
              key={index}
            >
              <div className="week-day-name" >{day.format("ddd")}</div>
              <div className="week-date">{day.format("DD")}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNextDay}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>
   
  );
};

export default DayNavigator;

// import "./DayNavigator.scss";
// import React, { useState,useContext, useEffect } from "react";
// import GlobalContext from "../../Context/GlobalContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import GetMonth from "../../Utils/Month";
// import dayjs from "dayjs";

// const DayNavigator = () => {
//   const {
//     currMonthIndex,
//     setCurrMonthIndex,
//     currDayIndex,
//     setCurrDayIndex,
//     currYearIndex,
//     setCurrYearIndex,
//     setDaySelected,
//   } = useContext(GlobalContext);
//   // const [daySelected, setDaySelected] = useState(dayjs());
//   const dayViewDate = dayjs(
//     new Date(currYearIndex, currMonthIndex, currDayIndex)
//   );
//   const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth());

//   useEffect(() => {
//     if (currMonthIndex != dayViewDate.month()) {
//       setCurrMonthIndex(dayViewDate.month());
//       setCurrDayIndex(dayViewDate.date());
//       setCurrYearIndex(dayViewDate.year());
//     }
//   }, [currDayIndex]);

//   const handlePrevDay = () => {
//     console.log(daysOfCurrMonth)
//     setTimeout(() => {
//       setCurrDayIndex(currDayIndex - 1);
//     }, 500);

//   };

//   const handleNextDay = () => {
//     setTimeout(() => {
//       setCurrDayIndex(currDayIndex + 1);
//     }, 500);

//   };

//   return (
//     <>
//       <div className="nav-month-year">
//         <button onClick={handlePrevDay}>
//           <FontAwesomeIcon icon={faChevronLeft} className="day-navigate-icons" />
//         </button>

//         <div className="day-view-week">
//           {daysOfCurrMonth[0].map((day, index) => (
//             <div key={index} className={`day-view-week-day ${getDayClass()}`}>
//               <div>
//               {day.format("ddd")}
//               </div>
//               <div>
//               {day.format("DD")}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div>{dayViewDate.format(" MMMM D, YYYY").toString()}</div> */}
//         <button onClick={handleNextDay}>
//           <FontAwesomeIcon icon={faChevronRight} className="day-navigate-icons" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default DayNavigator;
