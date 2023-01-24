import SmallCalendar from "./SmallCalendar/SmallCalendar";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvent";
import { CreateButton } from "../Buttons/Buttons";
import "./CalendarList.scss";
import { useContext,useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { actions } from "../../Reducer/ModalReducer";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarList=()=> {
  const  {modalDispatch,calendarState,setTimeStamp}=useContext(GlobalContext)
  const [isCreateOpen,setCreateOpen]=useState(false);
  const CURRENT_DATE = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex) );
  
  useEffect(() => {
    const currenthour = dayjs();
    const endTime = CURRENT_DATE
      .add(currenthour.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime = CURRENT_DATE
      .add(currenthour.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
    setCreateOpen(false);
  }, [CURRENT_DATE.date(),isCreateOpen]);

  return (
    <div className="cal-list-panel">
      <SmallCalendar />
      <UpcomingEvents/>
        <div className="create-event-btn" onClick={()=>{ {setCreateOpen(true); modalDispatch({ type: actions.ADD_EVENT });}}} title="create">
          <CreateButton/>
        </div>
    </div>
  );
}

export default CalendarList;
