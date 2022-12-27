import dayjs from "dayjs";
// import React,{useState} from 'react'
import { GetTime } from "../../Helpers/Builder";
import "./Day.scss";

const Day = () => {
  const arrayOfTime = GetTime();
  return (
    <div className="day-view-parent">
    <div className="curr-day-width">
      <div className="curr-day-parent">
        <span>{dayjs().format("ddd").toUpperCase()}</span>
        <span className="curr-day">{dayjs().format("D")}</span>
      </div>
      </div>

      <div className="timeline">
        {arrayOfTime.map((hour, index) => (
          <div className="timeline-component" key={index}>
            <div className="time-component">
              <div className="time">
                {hour.format("H") === "0"
                  ? hour.format("H A")
                  : hour.format("h A")}
              </div>
            </div>
            <div className="timeline-event"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;

/* <div className="timeline-component">
        <div className="time-component">
            <div className="time">
                12  AM
            </div>
        </div>
        <div className="timeline-event">
        
        </div>
    </div> */
