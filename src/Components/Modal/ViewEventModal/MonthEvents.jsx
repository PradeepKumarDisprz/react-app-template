import { useContext, useState } from "react";
import React from "react";
import { CloseButton } from "../../Buttons/Buttons";
import "./MonthEvents.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import dayjs from "dayjs";
import { createPortal } from "react-dom";

const MonthEvent = ({appointment,setShowAppointment}) => {
  const {modalDispatch } = useContext(GlobalContext);
  console.log(appointment)
  return createPortal(
    <>
        <div className="month-view-pop-up-overlay" onClick={()=>setShowAppointment(false)}>
          <div className="month-view-pop-up-box" onClick={(e) => {e.stopPropagation();}}>
            <div className="month-view-event-body">
              <div className="month-view-event-title">
                {appointment?.date.format("dddd DD, YYYY")}
              </div>
              <div className="month-view-event-content">
                
                {appointment?.events.map((event, index) => (
                  <div
                    className="appointment-details-card-container"
                    key={index}
                    onClick={()=>modalDispatch({type:actions.SET_VIEW_EVENT,payload:event})}
                  >
                    <div className="appointment-title-and-time-stamp">
                      <div className="appointment-title">
                        {event.appointmentTitle}
                      </div>
                      <div className="appointment-timestamp">
                        {dayjs(event.appointmentStartTime).format("HH:mm a") +
                          "-" +
                          dayjs(event.appointmentEndTime).format("HH:mm a")}
                      </div>
                    </div>
                    <div className="desc">
                      <div className="appointment-desc">
                        {event.appointmentDescription ? event.appointmentDescription : "No Description Added.."}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="month-view-event-popup-btn">
              <span onClick={()=>
              setShowAppointment(false)}>
                <CloseButton />
              </span>
            </div>
          </div>
        </div>
      
    </>,
    document.getElementById('modal')
  );
};

export default MonthEvent;
