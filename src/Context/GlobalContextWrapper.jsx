import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";
import { actions, initialState, modalReducer } from "../Reducer/ModalReducer";
import {
  TriggerApiReducer,
  apiInitialState,
  apiActions,
} from "../Reducer/TriggerApiReducer";
import GetMonth from "../Utils/Month";
import { calendarInitialState, calendarReducer } from "../Reducer/CalendarReducer";

const GlobalContextWrapper = (props) => {
  const [calendarState,calendarDispatch]=useReducer(calendarReducer,calendarInitialState)
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState);
  const [apiState, apiDispatch] = useReducer(TriggerApiReducer,apiInitialState); 

  const [timeStamp, setTimeStamp] = useState({});
  const [currDateAppointments, setCurrDateAppointments] = useState([]);
  const [searchResult, setSearchResult] = useState({isTruncated: false,appointments: [],});
  const [monthView, setMonthView] = useState(false);
  const [search, setSearch] = useState(false);
  

  const handleGetByDate = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5169/v1/api/appointments",
        {
          params: {
            offSet: 0,
            fetchCount: -1,
            startDate: dayjs(
              new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)
            ).format("YYYY-MM-DD"),          
          },
        }
      );
      setCurrDateAppointments(response.data.appointments);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //get by date
  useEffect(() => {
    if (!monthView) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleGetByDate();
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
      }, 500);
    }
  }, [calendarState.currDayIndex, monthView]);

  const handleGetByMonth = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5169/v1/api/appointments",
        {
          params: {
            offSet: 0,
            fetchCount: -1,
            startDate: dayjs(
              new Date(calendarState.currYearIndex,calendarState.currMonthIndex, calendarState.currDayIndex)
            )
              .startOf("month")
              .format("YYYY-MM-DD"),
            endDate: dayjs(
              new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)
            )
              .endOf("month")
              .format("YYYY-MM-DD"),
          },
        }
      );
      setCurrDateAppointments(response.data.appointments);
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //get by month
  useEffect(() => {
    if (monthView == true) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      {
        setTimeout(() => {
          handleGetByMonth();
          modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
        }, 500);
      }
    }
  }, [monthView == true, calendarState.currMonthIndex]);

  // //post
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5169/v1/api/appointments",
          {
            params: {
              offSet: apiState.searchEvent.offSet,
              fetchCount: apiState.searchEvent.fetchCount,
              startDate: apiState.searchEvent.startDate,
              endDate: apiState.searchEvent.endDate,
              searchTitle: apiState.searchEvent.searchTitle,
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          setSearchResult({
            isTruncated: response.data.isTruncated,
            appointments: response.data.appointments,
          });
        }
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    if (apiState.searchEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleSearch();
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
      }, 1000);
    }
  }, [apiState.searchEvent]);

  //post
  useEffect(() => {
    const handlePost = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5169/v1/api/appointments",
          apiState.postEvent
        );
        if (response.data) {
         modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS });
          // requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
          apiDispatch({type:apiActions.RESET_POST_EVENT});
          modalDispatch({ type: actions.CLOSE_ADD_EVENT });
          monthView ? handleGetByMonth() : handleGetByDate();
        }
      } catch (err) {
        if (err.response) {
          modalDispatch({
            type: actions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
          // if (requestState.errorResponse == null) {
          //   modalDispatch({ type: actions.OPEN_ADD_EVENT });
          // }
        } else console.log(`Error: ${err.message}`);
      }
    };

    if (apiState.postEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handlePost();
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
      }, 1000);
    }
  }, [apiState.postEvent]);

  // // //delete
  useEffect(() => {
    const handleDeleteEvent = async () => {
      try {
        await axios.delete(
          `http://localhost:5169/v1/api/appointments/${apiState.deleteEvent}`
        );
        // requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
        modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS });
        apiDispatch({ type: apiActions.RESET_DELETE_EVENT });
        monthView ? handleGetByMonth() : handleGetByDate();
      } catch (err) {
        if (err.response) {
          modalDispatch({
            type: actions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
        } else console.log(`Error: ${err.message}`);
      }
    };
    if (apiState.deleteEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleDeleteEvent();
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
      }, 1000);
    }
  }, [apiState.deleteEvent]);

  // //update
  useEffect(() => {
    const handleUpdate = async () => {
      try {
        await axios.put(
          `http://localhost:5169/v1/api/appointments/${apiState.updateEvent.appointmentId}`,
          apiState.updateEvent.eventSubmitted
        );
        // requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
        modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS });
        apiDispatch({ type: apiActions.RESET_UPDATE_EVENT });
        modalDispatch({ type: actions.CLOSE_UPDATE_EVENT });
        monthView ? handleGetByMonth() : handleGetByDate();
      } catch (err) {
        if (err.response) {
          modalDispatch({
            type: actions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
          // if (requestState.errorResponse == null) {
          //   modalDispatch({
          //     type: actions.OPEN_UPDATE_EVENT,
          //     payload: modalState.updateEvent,
          //   });
          // }
        } else console.log(`Error: ${err.message}`);
      }
    };
    if (apiState.updateEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleUpdate();
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
      }, 1000);
    }
  }, [apiState.updateEvent]);

  return (
    <GlobalContext.Provider
      value={{
        calendarState,calendarDispatch,
        monthView,setMonthView,
        modalState,modalDispatch,
        apiState,apiDispatch,
        searchResult,setSearchResult,
        timeStamp, setTimeStamp,
        currDateAppointments,
        setCurrDateAppointments,
        search, setSearch
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
