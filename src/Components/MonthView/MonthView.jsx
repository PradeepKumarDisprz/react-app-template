import dayjs from "dayjs";
import React, { useEffect, useState,useContext } from "react";
import "./MonthView.scss";
import GetMonth from "../../Utils/Month";
import GlobalContext from "../../Context/GlobalContext";

const Month = () => {

  const {currMonthIndex}=useContext(GlobalContext);

  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth(currMonthIndex));
  const [daySelected, setDaySelected] = useState("");
  const currYearIndex =dayjs().year();

  //daySelected=+1

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonthIndex));
  }, [currMonthIndex]);


  const handleSelectedDay = (day) => {
    const today = dayjs();
    if (!(day < today)) {
      if (day === daySelected) {
        setDaySelected("");
      } else {
        setDaySelected(day);
      }
    }
  };

  function getDayClass(day) {
    const format = "DD MM YY";
    const nowDay = dayjs().format(format);
    const receivedDay = day.format(format);
    const fadeDay = dayjs(new Date(currYearIndex, currMonthIndex));
    if (nowDay === receivedDay) {
      return "curr-day-bg";
    } else if (fadeDay.month() !== day.month()) {
      return "faded-bg";
    } else {
      return "";
    }
  }

  return (
    <div className="big-cal-month">
      <div className="big-cal-days">
        {daysOfCurrMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) =>(
              i === 0 ? (
                <button
                  className=" each-day"
                  key={index}
                >
                  <span className="week-name"> {day.format("ddd")}</span>
                  <span className={`day-num ${getDayClass(day)}`}>
                    {day.format("D") === "1" && day.format("MMM")}{" "}
                    {day.format("D")}
                  </span>
                </button>
              ) : (
                <button
                  className="each-day"
                  key={index}
                >
                  <span className={`day-num ${getDayClass(day)}`}>
                    {day.format("D")}
                  </span>
                </button>
              )
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Month;




























// {
//   // day.format("ddd") !== "Sun" &&
//   //   day.format("ddd") !== "Sat" &&
//     (i === 0 ? (
//       <button
//         className=" each-day"
//         onClick={() => handleSelectedDay(day)}
//         key={index}
//       >
//         <span className="week-name"> {day.format("ddd")}</span>
//         <span className={`day-num ${getDayClass(day)}`}>
//           {day.format("D") === "1" && day.format("MMM")}{" "}
//           {day.format("D")}
//         </span>
//       </button>
//     ) : (
//       <button
//         className="each-day"
//         onClick={() => handleSelectedDay(day)}
//         key={index}
//       >
//         <span className={`day-num ${getDayClass(day)}`}>
//           {day.format("D")}
//         </span>
//       </button>
//     ))}
