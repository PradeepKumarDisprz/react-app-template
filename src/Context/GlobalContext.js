import { createContext } from "react";

const GlobalContext = createContext(
    {
        currYearIndex:0, setCurrYearIndex:(index)=>{},
        currMonthIndex: 0, setCurrMonthIndex: (index) => { },
        currDayIndex: 0, setCurrDayIndex: (index) => { },
        daySelected: null, setDaySelected: () => { },
        showModal:false, setShowModal:()=>{},
        postEvent:null,setPostEvent:()=>{},
        showRequestSuccess:false,setShowRequestSuccess:()=>{},
        errorResponse:null,setErrorResponse:()=>{},
        isLoading:false, setIsLoading:()=>{},
        currDateAppointments:null,setCurrDateAppointments:()=>{},
        searchInput:null,setSearchInput:()=>{},
        totalAppointments:null,setTotalAppointments:()=>{},
        viewEvent:null,setViewEvent:()=>{},
        deleteEvent:null,setDeleteEvent:()=>{},
        updateEvent:null,setUpdateEvent:()=>{},
        eventUpdate:null,setEventUpdate:()=>{},
        eventsSeparated:null,setEventsSeparated:()=>{}
    }
);

export default GlobalContext;