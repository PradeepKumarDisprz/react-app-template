import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import GetHour from "../../../Utils/Hour";
import "./DayView.scss";
import DayNavigator from "../DayNavigator/DayNavigator";
import Appointment from "../../AppointmentCard/Appointment";
import { actions } from "../../../Reducer/ModalReducer";
import ViewEvent from "../../Modal/ViewEventModal/ViewEvent";

const DayView = () => {
  const [viewEvent,setViewEvent]=useState(null);
  const arrayOfTime = GetHour();
  const {
    currDayIndex,
    currMonthIndex,
    currYearIndex,
    currDateAppointments,
    daySelected,
    setDaySelected,
    // viewEvent,
    // setViewEvent,
    modalDispatch,
  } = useContext(GlobalContext);
  const CURRENT_DATE = dayjs(
    new Date(currYearIndex, currMonthIndex, currDayIndex)
  );

  const handleViewEvent=()=>{
    setViewEvent(null);
  }

  useEffect(() => {
    const currDate = CURRENT_DATE;
    const currenthour = dayjs();
    const endTime = currDate
      .add(currenthour.hour() + 1, "hours")
      .format("YYYY-MM-DDThh:mm");
    const startTime = currDate
      .add(currenthour.hour(), "hours")
      .format("YYYY-MM-DDThh:mm");
    const timeStamp = { startTime, endTime };
    setDaySelected(timeStamp);
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
    setDaySelected(timeStamp);
    modalDispatch({type:actions.OPEN_ADD_EVENT});
  };

  return (
    <>
    <div className="day-view-parent">
      <div className="day-view-header">
        <DayNavigator />
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
          {arrayOfTime.map((hour, index) => (
            <div className="timeline" key={index} onClick={() => handleCreateModal(hour)}></div>
          ))}
          <div>
          {
          currDateAppointments?.map((event,index)=>
          (
            <div key={index} onClick={()=>{
              setViewEvent(event)
            }}>
               <Appointment event={event}/>
            </div>             
          )     
         )} 
          </div>
         
        </div>
      </div>
    </div>

    {viewEvent!=null && <ViewEvent viewEvent={viewEvent} handleViewEvent={handleViewEvent}/>}
    </>
  );
};

export default DayView;

