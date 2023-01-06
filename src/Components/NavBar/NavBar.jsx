import React, { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./NavBar.scss";
import EventLogo from "../../Assests/EventLogo.svg";
import { TodayButton, CreateButton } from "../Buttons/Buttons";
import SearchBar from "../Search/SearchBar/SearchBar";
import DayNavigator from "../DayNavigator/DayNavigator";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const {
    currMonthIndex,
    setCurrMonthIndex,
    setCurrDayIndex,
    setDaySelected,
    setCurrYearIndex,
    setShowModal,
  } = useContext(GlobalContext);
  const [isNotSearched, setIsNotSearched] = useState(true);

  const navigate = useNavigate();

  const handleCreateModal = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    setCurrYearIndex(dayjs().year());
    setCurrMonthIndex(
      currMonthIndex === dayjs().month()
        ? currMonthIndex + Math.random()
        : dayjs().month()
    );
    setCurrDayIndex(dayjs().date());
    setDaySelected("");
  };

  return (
    <div className="nav-bar">
      <div className="dashboard">
        <div className="nav-logo-container">
          <img src={EventLogo} alt="" className="nav-logo" />
         
          <span className="nav-title">Calendar</span>
        </div>    
      <div className="dashboard-end">
          <div className="nav-today" onClick={handleReset}>
            <TodayButton />
          </div>
          <div className="nav-create-btn">
            <span onClick={handleCreateModal}>
              <CreateButton />
            </span>
          </div>
      </div>
      </div>

    </div>
  );
};

export default NavBar;
