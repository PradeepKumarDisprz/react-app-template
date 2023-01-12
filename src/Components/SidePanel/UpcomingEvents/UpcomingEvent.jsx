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
  const [upcomingEvents, setUpcomingEve] = useState(GetUpcomingEvents(currDateAppointments));
  const [viewAll, setViewAll] = useState(false);

  // const MINUTE_MS = 1000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setUpcomingEve(GetUpcomingEvents(currDateAppointments));
  //     console.log(upcomingEvents);
  //   }, MINUTE_MS);
  //   return () => clearInterval(interval);
  // }, []);

  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setUpcomingEve(GetUpcomingEvents())
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  //  setInterval(()=>
  //  setUpcomingEve(GetUpcomingEvents()),1000);

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
                <div
                  onClick={() =>
                    modalDispatch({
                      type: actions.SET_VIEW_EVENT,
                      payload: event,
                    })
                  }
                >
                  <AppointmentDetails key={index} event={event} />
                </div>
              );
            })
          : upcomingEvents.slice(0, 3).map((event, index) => {
              return (
                <div
                  onClick={() =>
                    modalDispatch({
                      type: actions.SET_VIEW_EVENT,
                      payload: event,
                    })
                  }
                >
                  <AppointmentDetails key={index} event={event} />
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
