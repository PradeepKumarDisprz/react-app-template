import DayView from "../DayView/DayView";
import "./EventPage.scss";
import MonthView from "../MonthView/MonthView"
import SearchResult from "../Search/SearchResult/SearchResult"

const EventPage = () => {
  return (
    
      <div className="event-page-parent">        
       <DayView />
       {/* <SearchResult/> */}
       {/* <MonthView/> */}
      </div>
   
  );
};

export default EventPage;
