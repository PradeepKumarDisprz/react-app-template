import "./SearchResult.scss";
import { NextButton, PreviousButton } from "../../Buttons/Buttons";
import { useContext, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../../Context/GlobalContext";

const SearchResult = () => {
  const [resultDate, setResultDate] = useState(dayjs());
  const [resultStartTime, setResultStartTime] = useState(dayjs());
  const [resultEndTime, setResultEndTime] = useState(dayjs().add(2, "hour"));
  const [resultTitle, setResultTitle] = useState("Hello");

  const {totalAppointments}=useContext(GlobalContext)


  const arr=[
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    {
        eventStartTime:dayjs(),
        eventEndTime:dayjs().add(1,"hour"),
        eventTitle:"hi"
    },
    
]
  const count = 1;
  return (
    <div className="search-result">
      <div className="search-header">
        <div className="head">Search Results</div>
        <div className="nav-buttons">
          <div className="previous-btn">
            <PreviousButton />
          </div>
          <div className="next-btn">
            <NextButton />
          </div>
        </div>
      </div>

      <div className="search-result-content">
        {totalAppointments!=null&&totalAppointments.appoinments.length>0 ? (
          <div className="no-data-found">No Results Found</div>
        ) : (
          totalAppointments!=null&&
            totalAppointments.appoinments.map((i,index)=>
            (
            <div className="data-found" key={index}>
            <div className="data-time-date">
              <div className="result-date">
                {i.eventStartTime.format("D MMM YYYY, ddd")}
              </div>
              <div className="result-time">
                {i.eventStartTime.format("h:mm a").toString() +
                  " - " +
                  i.eventEndTime.format("h:mm a").toString()}
              </div>
            </div>
            <div className="result-title">{i.eventTitle}</div>
          </div>
            ))
          
          
        )}
      </div>
    </div>
  );
};

export default SearchResult;
