import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../../../Context/GlobalContext";
import { calendarActions } from "../../../../Reducer/CalendarReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./DayNavigator.scss";

const DayNavigator = () => {
    const {calendarState,calendarDispatch,monthView}=useContext(GlobalContext);
    
      const handlePrevDay = () => {
        calendarDispatch({type:calendarActions.DECREMENT_DAY,payload:1});
      };

      const handleNextDay = () => {
        calendarDispatch({type:calendarActions.INCREMENT_DAY,payload:1});
      };

    return ( 
        <div className="nav-day">
        <div className="nav-week-day">
        {monthView?dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("MMMM")+"'s Schedule"
        :dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("DD-MM-YY")===dayjs().format("DD-MM-YY")?"Today's Schedule":dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("dddd")+"'s Schedule"
        }
        </div>

        <div title="current-day" className="current-day">
           {dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("MMMM DD, YYYY")}
           {!monthView&&<div className="day-navigator">
              <button title="prev-day" onClick={handlePrevDay}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button title="next-day" onClick={handleNextDay}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
           </div>}
        </div>
     </div>
     );
}
 
export default DayNavigator;