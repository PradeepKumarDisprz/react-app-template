import dayjs from "dayjs";
import React, { useState, useRef, useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import GetHour from "../../Utils/Hour";
import "./DayView.scss";
import Appointment from "../AppointmentCard/Appointment";
import DayNavigator from "../DayNavigator/DayNavigator";
import ViewEvent from "../Modal/ViewEventModal/ViewEvent";

const DayView = () => {
  const arrayOfTime = GetHour();
  const {
    currDayIndex,
    currMonthIndex,
    currYearIndex,
    setShowModal,
    currDateAppointments,
    daySelected,
    setDaySelected,
    viewEvent,
    setViewEvent,
  } = useContext(GlobalContext);
  const CURRENT_DATE = dayjs(
    new Date(currYearIndex, currMonthIndex, currDayIndex)
  );


  useEffect(() => {
    const currDate = CURRENT_DATE;
    const currenthour = dayjs();
    const endTime = currDate
      .add(currenthour.hour() + 1, "hours")
      .format("YYYY-MM-DDThh:mm");
      // const endTime = currDate
      // .add(currDate.hour()+1, "hours")
      // .format("YYYY-MM-DDThh:mm");
    const startTime = currDate
      .add(currenthour.hour(), "hours")
      .format("YYYY-MM-DDThh:mm");
      // const startTime = currDate
      // // .add(currDate.hour()+1, "hours")
      // .format("YYYY-MM-DDThh:mm");
    const timeStamp = { startTime, endTime };
    setDaySelected(timeStamp);
  }, [CURRENT_DATE.date()]);

  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef();

  const handleScroll = () => {
    const scrolledFromTop = scrollRef.current.scrollTop;
    setScroll(scrolledFromTop > 12);
  };
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
    setShowModal(true);
  };


  return (
    <div className="day-view-parent">
      <div className={`day-view-header ${scroll && "header-border"}`}>
        <div className="day-view-content">
          {/* <div className="event-date"> */}
            {/* <span className="curr-date">{CURRENT_DATE.format("DD")}</span> */}
            {/* <span>{CURRENT_DATE.format("dddd, MMM YYYY")}</span> */}
          {/* </div> */}

          {/* {currDateAppointments.length > 0 ? (
            <div className="day-view-title">Scheduled Events</div>
          ) : (
            <div className="day-view-title">No Events Scheduled</div>
          )} */}

          <DayNavigator/>
        </div>
      </div>

      <div
        className={`time-view ${scroll && "add-scroll"}`}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        <div>
        {arrayOfTime.map((hour, index) => (
          <div className="time-container" key={index} >
            <div className="time">
              {
              // hour.format("H") === "0"
                // ?
                 hour.format("HH:mm")
                // :
                //  hour.format("hh:mm A")
                 }
            </div>
          </div>
        ))}
        </div>
        <div className="timeline-container">
        {arrayOfTime.map((hour, index) => (
          <div className="timeline" key={index} onClick={() => handleCreateModal(hour)}
          >

          </div>
        ))}
          {/* {
          currDateAppointments.map((event,index)=>
          (
            <div key={index} onClick={()=>{
              setViewEvent(event)
            }}>
               <Appointment event={event}/>
            </div>             
          )     
         )}  */}
        </div>
      </div>
    </div>
  );
};

export default DayView;

{
  /* {
           currDateAppointments.map((event,index)=>
          (
            
              <Appointment event={event} key={index}/>
                        
          )     
        )} */
}

/* <div className="timeline-component">
        <div className="time-component">
            <div className="time">
                12  AM
            </div>
        </div>
        <div className="timeline-event">
        
        </div>
    </div> */

/* {currDateAppointments.length > 0 &&
                currDateAppointments.map((meet) => (
                  
                  // dayjs(meet.appointmentStartTime).subtract(5,'hours').subtract(30,'minutes') >=
                  //     hour &&
                  //     dayjs(meet.appointmentEndTime).subtract(5,'hours').subtract(30,'minutes') <=
                  //       hour && 
                  <div key={meet.appointmentId} className="event" onClick={()=>{
                    setViewEvent(meet)
                  }}>
                        <Appointment meet={meet} />
                  </div>
                
                ))} */
