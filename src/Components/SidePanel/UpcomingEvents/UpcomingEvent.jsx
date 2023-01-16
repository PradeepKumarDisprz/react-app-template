import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";
import "./UpcomingEvent.scss";
import GetUpcomingEvents from "../../../Utils/UpcomingEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../../../Reducer/ModalReducer";


const UpcomingEvents = () => {
  const { modalDispatch, currDateAppointments } = useContext(GlobalContext);
   var upcomingEvents=GetUpcomingEvents(currDateAppointments);
  // const [upcomingEvents, setUpcomingEve] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  // console.log(upcomingEvents,"first")
  // const MINUTE_MS =1000;
  // useEffect(() => {
  //   // if(upcomingEvents.length==0)
  //   // {
  //   //   setUpcomingEve(GetUpcomingEvents(currDateAppointments))
  //   // }

  //   const interval = setInterval(() => {
  //     upcomingEvents=(GetUpcomingEvents(currDateAppointments));
  //       console.log((GetUpcomingEvents(currDateAppointments))); 
  //     }, MINUTE_MS);
  //     return () => clearInterval(interval);
 

  // }, [currDateAppointments.length>0]);

  return (
    <>
    
      <div className="upcoming-event-container">
        <div className="upcoming-header">
          <div className="header-name">
            {upcomingEvents.length > 0
              ? "Upcoming Events..."
              : "No Events Scheduled..."}
          </div>
          <div className="view-all-option" onClick={() => setViewAll(!viewAll)}>
            {upcomingEvents.length > 3 ? (viewAll ? "close" : "view-all") : " "}
            {upcomingEvents.length > 3 && (
              <FontAwesomeIcon
                icon={viewAll ? faAngleUp : faAngleDown}
                className="see-more-icon"
              />
            )}
          </div>
        </div>
      </div>
      <div className="upcoming-events">
        {viewAll
          ? upcomingEvents.map((event, index) => {
              return (
                <div key={index} 
                  onClick={() =>
                    modalDispatch({
                      type: actions.SET_VIEW_EVENT,
                      payload: event,
                    })
                  }
                >
                  <AppointmentDetails event={event} />
                </div>
              );
            })
          : upcomingEvents.slice(0, 3).map((event, index) => {
              return (
                <div key={index}
                  onClick={() =>
                    modalDispatch({
                      type: actions.SET_VIEW_EVENT,
                      payload: event,
                    })
                  }
                >
                  <AppointmentDetails event={event} />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default UpcomingEvents;

// import React, { useState, useEffect } from "react";

// export const Count = () => {
// const [currentCount, setCount] = useState(1);

// useEffect(() => {
//  if (currentCount <= 0) {
//    return;
//  }

//  const id = setInterval(timer, 500);
//  return () => clearInterval(id);
// }, [currentCount]);

// const timer = () => setCount(currentCount + 1);

// console.log(currentCount);

// return <div>Count : - {currentCount}</div>;
// };
