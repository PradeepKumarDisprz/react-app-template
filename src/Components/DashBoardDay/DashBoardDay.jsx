import "./DashBoardDay.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { useState } from "react";
function DashBoardDay({resetToday}) {
    const [currMonth, setCurrMonth] = useState(dayjs().month());

    const handlePrevMonth = () => 
    {
  
      setCurrMonth(currMonth - 1);
    };
  
    const handleNextMonth = () => 
    {
      setCurrMonth(currMonth+1);
  
    };
  return (
    <>
    <div className="dash-month-year">
        <button onClick={handlePrevMonth}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button onClick={handleNextMonth}  ><FontAwesomeIcon icon={faChevronRight}/></button>
    
    <div>
        {dayjs(new Date(dayjs().year(),currMonth)).format(" MMMM, YYYY").toString()}
    </div>

    </div>
    </>
  )
}

export default DashBoardDay 