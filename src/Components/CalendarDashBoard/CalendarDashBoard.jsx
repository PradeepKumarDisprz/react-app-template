import React, { useState } from "react";
import "./CalendarDashBoard.scss";
import { TodayButton } from "../Buttons/Buttons";
import ThreeViewButton from "../Buttons/ThreeViews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DashBoardDay from "../DashBoardDay/DashBoardDay";

function CalendarDashBoard() {
  const [today,setToday]=useState(false);
  const handleReset=()=>
  {
    setToday(true)
  }


  return (
    <div className="cal-dashboard-parent">
      <div className="dashboard-left">
       
          <FontAwesomeIcon icon={faBars} className="ham-menu"/>
       
        <span className="dash-title">Calendar</span>
        <span className="today" onClick={handleReset}><TodayButton /></span>
        <span> <DashBoardDay resetToday={today}/> </span>
      </div>
      <div className="dashboard-right">

        <span className="sel-view"><ThreeViewButton /></span>
      </div>
    </div>
  );
}

export default CalendarDashBoard;
