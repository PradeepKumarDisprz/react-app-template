import DayView from "./DayView/DayView";
import MonthView from "./MonthView/MonthView";
import SearchResult from "./SearchResult/SearchResult";
import "./EventPage.scss";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

const EventPage = () => {
  const {monthView,search}=useContext(GlobalContext)
  return (
    
      <div className="event-page-parent">
        {(!search&&monthView)?<MonthView />:(!search&&<DayView />)}
        {search&&<SearchResult/>}
      </div>
   
  );
};

export default EventPage;