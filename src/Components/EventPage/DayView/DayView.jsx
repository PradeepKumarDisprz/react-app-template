import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import GetHour from "../../../Utils/Hour";
import "./DayView.scss";
import Appointment from "../../AppointmentCard/Appointment";
import { actions } from "../../../Reducer/ModalReducer";
import ViewEvent from "../../Modal/ViewEventModal/ViewEvent";
import GetCurrTimeStyle from "../../../Utils/CurrTimeStyle";

const DayView = () => {
  const currTimeStyle=GetCurrTimeStyle();
  const today=dayjs();
  const arrayOfTime = GetHour();
  const {
    currDateAppointments,
    setTimeStamp,
    modalDispatch,
    calendarState,
  } = useContext(GlobalContext);
  const CURRENT_DATE = dayjs(
    new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)
  );


  useEffect(() => {
    const currDate = CURRENT_DATE;
    const currenthour = dayjs();
    const endTime = currDate
      .add(currenthour.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime = currDate
      .add(currenthour.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
  }, [CURRENT_DATE.date()]);

  const handleCreateModal = (hour) => {
    const currDate = CURRENT_DATE;
    const endTime = currDate
      .add(hour.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime = currDate
      .add(hour.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
    modalDispatch({ type: actions.OPEN_ADD_EVENT });
  };

  return (
    <>
      <div className="day-view-parent">
        <div className="day-view-header">
          {dayjs(new Date(calendarState.currYearIndex,calendarState.currMonthIndex,calendarState.currDayIndex)).format("DD MMM, YYYY")}
        </div>

        <div className="time-view">
          <div>
            {arrayOfTime.map((hour, index) => (
              <div className="time-container" key={index}>
                <div className="time-stamp">{hour.format("HH:mm")}</div>
                <div className="dotted-lines"></div>
                <div className="dotted-lines"></div>
                <div className="dotted-lines"></div>
              </div>
            ))}
          </div>

          <div className="timeline-container">
            {today.date()===CURRENT_DATE.date()&&<div className="curr-time" style={currTimeStyle}></div>}
            {arrayOfTime.map((hour, index) => (
              <div
                className="timeline"
                key={index}
                onClick={() => handleCreateModal(hour)}
              ></div>
            ))}
            <div>
              {currDateAppointments?.map((event, index) => (
                <div
                  key={index}
                  onClick={() => {
                    modalDispatch({type:actions.SET_VIEW_EVENT,payload:event})
                  }}
                >
                  <Appointment event={event} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DayView;
