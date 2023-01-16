import React, { useState, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import EventLogo from "../../Assests/EventLogo.svg";
import { TodayButton, CreateButton } from "../Buttons/Buttons";
import SearchBar from "./SearchBar/SearchBar";
import dayjs from "dayjs";
import { actions } from "../../Reducer/ModalReducer";
import ViewButton from "../Buttons/ViewButton/ViewButton";
import { calendarActions } from "../../Reducer/CalendarReducer";
const NavBar = () => {
  const {modalDispatch,calendarState,calendarDispatch} = useContext(GlobalContext);
  const [isNotSearched, setIsNotSearched] = useState(true);
  
  const handleReset = () => {
    calendarDispatch({type:calendarActions.RESET_TODAY})
  };

  return (
    <>
      <div className="nav-bar">

        <div className="nav-start">
          <div className="nav-logo-container">
            <img src={EventLogo} alt="calendar" className="nav-logo" />
            <span className="nav-title">Calendar</span>
          </div>
         {isNotSearched&& <div className="nav-day">
            <button title="current-day">
              {dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("MMMM DD, ddd")}
              {/* {dayjs().year(currYearIndex).month(currMonthIndex).day(currDayIndex).format("MMMM DD, dddd")} */}
            </button>
          </div>}
        </div>
        {isNotSearched&&<button type="submit" onClick={() => setIsNotSearched(false)}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>}
          
        {!isNotSearched&&<div className="search-bar">
            <SearchBar setIsNotSearched={setIsNotSearched} />
          </div>}

          <ViewButton/>

        <div className="nav-end">
          {isNotSearched&&<div className="nav-btns" onClick={handleReset} title="reset-to-today's-date">
            <TodayButton />
          </div>}
          <div className="nav-btns" onClick={()=>{ modalDispatch({ type: actions.OPEN_ADD_EVENT });}} title="create">
            <CreateButton />
          </div>
        </div>

      </div>
    </>
  );
};

export default NavBar;
