import dayjs from "dayjs";
import React, {useState, useContext, Fragment } from "react";
import "./MonthView.scss";
import GetEachDayAppointment from "../../../Utils/EachDayAppointment";
import GlobalContext from "../../../Context/GlobalContext";
import MonthEvents from "../../Modal/ViewEventModal/MonthEvents";

const Month = () => {
  const { calendarState,currDateAppointments} =useContext(GlobalContext);
  
  const [showAppointment, setShowAppointment] = useState(false);
  const [eventChoosen, setEvent] = useState("");
  const appointmentsSeparated = GetEachDayAppointment(calendarState.daysOfCurrMonth,currDateAppointments);

  function getDayClass(day) {
    const format = "DD MM YY";
    const today = dayjs().format("DD MM YY");
    const receivedDay = day.format(format);
    const fadeDay = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex));
    if (today === receivedDay) 
    {
      return "curr-day-bg";
    }
    else if (day.date() === calendarState.currYearIndex &&day.month() === calendarState.currMonthIndex )
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
    <div className="big-cal-month">
      <div className="big-cal-days">
        {calendarState.daysOfCurrMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) =>
              i === 0 ? (
                <button className="each-day" key={index}>
                  <span className="week-name"> {day.format("ddd")}</span>
                  <span className={`day-num ${getDayClass(day)}`}>
                    {day.format("D") === "1" && day.format("MMM")}{" "}
                    {day.format("D")}
                  </span>
                  {appointmentsSeparated.map(
                    (event) =>
                      event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                      (
                        <Fragment key={event.date}>
                        <div className="calendar-meet"  onClick={() => {
                            setShowAppointment(true);
                            setEvent(event.date);
                          }}
                        >
                          {"Meetings - " + event.events.length}
                          {showAppointment && event.date == eventChoosen && 
                          (
                            <MonthEvents appointment={event} setShowAppointment={setShowAppointment}/>
                          )}
                        </div>
                        {showAppointment && event.date == eventChoosen && 
                          (
                            <MonthEvents appointment={event} setShowAppointment={setShowAppointment}/>
                          )}
                        </Fragment>
                      )
                  )}
                </button>
              ) : (
                <button className="each-day" key={index}>
                  <span className={`day-num ${getDayClass(day)}`}>
                    {day.format("D")}
                  </span>

                  {appointmentsSeparated.map((event) =>
                    event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                    (
                      <Fragment key={event.date}>
                      <div className="calendar-meet" onClick={() => {
                          setShowAppointment(true);
                          setEvent(event.date);
                        }}
                      >
                        {"Meetings - " + event.events.length}
                        
                      </div>
                      {showAppointment && event.date == eventChoosen && 
                        (
                          <MonthEvents appointment={event} setShowAppointment={setShowAppointment}/>
                        )}
                      </Fragment>
                    )
                  )}
                </button>
              )
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Month;
