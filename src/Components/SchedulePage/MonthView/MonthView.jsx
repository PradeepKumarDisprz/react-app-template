import dayjs from "dayjs";
import React, {useState, useContext, Fragment } from "react";
import "./MonthView.scss";
import GetEachDayAppointment from "../../../Utils/EachDayAppointment";
import GlobalContext from "../../../Context/GlobalContext";
import MonthEvents from "../../Modal/ViewEventModal/MonthEvents";
import { actions } from "../../../Reducer/ModalReducer";

const Month = () => {
  const { calendarState,appointments,modalDispatch,setTimeStamp} =useContext(GlobalContext);
  
  const [showAppointment, setShowAppointment] = useState(false);
  const [eventChoosen, setEvent] = useState("");
  const appointmentsSeparated = GetEachDayAppointment(calendarState.daysOfCurrMonth,appointments);
  const today=dayjs();

  function getDayClass(day) {
    const format = "DD MM YY";
    const today = dayjs().format("DD MM YY");
    const receivedDay = day.format(format);
    const fadeDay = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex));
    if (today === receivedDay) 
    {
      return "curr-day-bg";
    }
    else if (day.date() === calendarState.currDayIndex &&day.month() === calendarState.currMonthIndex )
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

  const handleCreateModal = (day) => {
    const endTime = day
      .add(today.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime =day
      .add(today.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
    modalDispatch({ type: actions.ADD_EVENT });
  };

  return (
    <div className="big-cal-month">
      <div className="big-cal-days">
        {calendarState.daysOfCurrMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) =>

             ( i === 0 ? (                
                <button className="each-day" key={index} onClick={()=>handleCreateModal(day)} >
                  <span className="week-name"> {day.format("ddd")}</span>
                  <span className={`day-num ${getDayClass(day)}`}>
                    {day.format("DD") === "1" && day.format("MMM")}
                    {day.format("DD")}
                  </span>
                  {appointmentsSeparated.map(
                    (event) =>
                      event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                      (
                        <Fragment key={event.date}>
                        <div className="calendar-meet"  onClick={() => { modalDispatch({ type: actions.ADD_EVENT });setShowAppointment(true);setEvent(event.date);}}>
                          {"Appointments- " + event.events.length}
                        </div>
                        {showAppointment && event.date == eventChoosen && 
                          (
                            <MonthEvents today={today} appointment={event} setShowAppointment={setShowAppointment}/>
                          )}
                        </Fragment>
                      )
                  )}
                </button>
              ) : (
                <button className="each-day" key={index} onClick={()=>handleCreateModal(day)}>
                  <span className={`day-num ${getDayClass(day)}`} >
                    {day.format("DD")}
                  </span>

                  {appointmentsSeparated.map((event) =>
                    event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                    (
                      <Fragment key={event.date}>
                      <div className="calendar-meet" onClick={() => {
                         modalDispatch({ type: actions.ADD_EVENT });
                          setShowAppointment(true);
                          setEvent(event.date);
                        }}
                      >
                        {"Appointments - " + event.events.length}
                        
                      </div>
                      {showAppointment && event.date == eventChoosen && 
                        (
                          <MonthEvents today={today} appointment={event} setShowAppointment={setShowAppointment}/>
                        )}
                      </Fragment>
                    )
                  )}
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
