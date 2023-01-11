import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";
import "./UpcomingEvent.scss";
import GetUpcomingEvents from "../../../Utils/UpcomingEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faAngleUp } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvents = () => {
  const upcomingEvents = GetUpcomingEvents();
  const [viewAll, setViewAll] = useState(false);
//   useEffect(()=>{
//    const upcomingEvents= setTimeout(()=>GetUpcomingEvents(),2000);
//    return function cleanup()
//    {
//     clearInterval(upcomingEvents)
//    }
//   })


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
          
         { upcomingEvents.length>3?(viewAll ? 'close' : 'view-all'):" "}
         {upcomingEvents.length>3&&<FontAwesomeIcon icon={viewAll?faAngleUp:faAngleDown}  className="see-more-icon"/>}
          </div>
        </div>
      </div>
      <div className="upcoming-events">
        {viewAll?
        upcomingEvents.map((event, index) => {
          return <AppointmentDetails key={index} event={event} />;
        }):upcomingEvents.slice(0,3).map((event, index) => {
            return <AppointmentDetails key={index} event={event} />;
          })
          }
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