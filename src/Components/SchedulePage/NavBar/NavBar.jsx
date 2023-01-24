import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { TodayButton} from "../../Buttons/Buttons";
import SearchBar from "./SearchBar/SearchBar";
import GlobalContext from "../../../Context/GlobalContext";
import "./NavBar.scss";
import { calendarActions } from "../../../Reducer/CalendarReducer";
import DayNavigator from "./DayNavigator/DayNavigator";


const NavBar = () => {
  const {calendarDispatch,search} = useContext(GlobalContext);
  const [isNotSearched, setIsNotSearched] = useState(true);
  
  const handleReset = () => {
    calendarDispatch({type:calendarActions.RESET_TODAY})
  };


  return (
      <div className="nav-bar">
         {!search?<DayNavigator/>
         :
         <div className="search-result-head" >
          Search Results
         </div>
         }
         

        <div className="right-nav">
           {isNotSearched&&
          <FontAwesomeIcon icon={faSearch} className="search-icon nav-right-gap"  onClick={() => setIsNotSearched(false)}/>
           }
      
           
         {!search&&<div className="nav-right-gap" onClick={handleReset} title="reset-to-today's-date">
            <TodayButton />
          </div>
         }
        </div>

        {!isNotSearched&&
            <SearchBar setIsNotSearched={setIsNotSearched} />
        }
      </div>
  );
};

export default NavBar;