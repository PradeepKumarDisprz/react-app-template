import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faAnglesLeft,faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import "./Calendar.scss";
import { GetMonth } from "../../Helpers/Builder";

const Calendar = () => {
  const [currYear,setCurrYear]=useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth(currMonth));
  const [daySelected,setDaySelected]=useState("");
  const [count,setCount]=useState(0)

  //daySelected=+1

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth,currYear));
  }, [currMonth,currYear]);

  const handlePrevYear = () => {
    setCurrYear(currYear - 1);
  };

  const handleNextYear = () => {
    setCurrYear(currYear + 1);
  };

  const handlePrevMonth = () => 
  {

    setCurrMonth(currMonth - 1);
  };

  const handleNextMonth = () => 
  {
    setCurrMonth(currMonth+1);

  };

  const handleSelectedDay=(day)=>
  {
    const today=dayjs();
    if(!(day<today))
    {
    if(day===daySelected)
    {
        setCount(0);
        setDaySelected("")
    }
    else
    {
      setCount(1)
      setDaySelected(day)
    }
  }
  
  }

  function getDayClass(day) {
    const format = "DD MM YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const selectedDay=daySelected&&daySelected.format(format)
    const fadeDay=dayjs(new Date(currYear,currMonth));

    
    if 
    (nowDay === currDay) 
    {
      return "curr-day-bg";
    } 
    
    else if (currDay === selectedDay) 
    {
      return "other-day-bg"
    }

     else if(fadeDay.month()!==day.month())
        {
      return "faded-bg"
    }

    else {
      return "";
    }
  }

  return (
    
      <div className="calendar">
        <header className="cal-header">
          <button onClick={handlePrevYear}><FontAwesomeIcon icon={faChevronLeft} /></button>
              
              <div className="month-year">
                <button onClick={handlePrevMonth} ><FontAwesomeIcon icon={faAnglesLeft} /></button>
                  <span >{dayjs(new Date(currYear,currMonth)).format(" MMMM, YYYY").toString()}</span>
                <button onClick={handleNextMonth}  ><FontAwesomeIcon icon={faAnglesRight}/></button>
              </div>
            
          <button onClick={handleNextYear}><FontAwesomeIcon icon={faChevronRight} /></button>
        </header>

      
        <div className="cal-month">  
            <div className="cal-week-days">
            {daysOfCurrMonth[0].map((day, index) => (
              <span key={index} className="week-days">
                {day.format("ddd")}
              </span>))
            }
            </div>

          <div className="cal-days">
          {daysOfCurrMonth.map((row, index) => (
              <React.Fragment key={index}>
                {row.map((day, index) => ( 
                <button className={`days ${getDayClass(day)}`} onClick={()=>handleSelectedDay(day)} key={index}> <span  >{day.format("D")}</span></button>
              ))}
              </React.Fragment>
          ))}
          </div>
        </div>

      </div>
  );
};

export default Calendar;

