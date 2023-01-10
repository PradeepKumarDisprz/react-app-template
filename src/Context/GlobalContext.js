import { createContext } from "react";

const GlobalContext = createContext(
    {
        currYearIndex:0, setCurrYearIndex:(index)=>{},
        currMonthIndex: 0, setCurrMonthIndex: (index) => { },
        currDayIndex: 0, setCurrDayIndex: (index) => { },
        currWeekIndex: 0, setCurrWeekIndex: (index) => { },
        daySelected: null, setDaySelected: () => { },
        errorResponse:null,setErrorResponse:()=>{},
        currDateAppointments:null,setCurrDateAppointments:()=>{},
    }
);

export default GlobalContext;