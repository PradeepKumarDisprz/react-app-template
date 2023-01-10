import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";
import {
  requestActions,
  requestInitialState,
  requestReducer,
} from "../Reducer/RequestReducer";
import { actions, initialState, modalReducer } from "../Reducer/ModalReducer";
import {
  TriggerApiReducer,
  apiInitialState,
  apiActions,
} from "../Reducer/TriggerApiReducer";
var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

const GlobalContextWrapper = (props) => {
  const [currYearIndex, setCurrYearIndex] = useState(dayjs().year());
  const [currMonthIndex, setCurrMonthIndex] = useState(dayjs().month());
  const [currDayIndex, setCurrDayIndex] = useState(dayjs().date());
  const [currWeekIndex, setCurrWeekIndex] = useState(dayjs(currYearIndex, currMonthIndex, currDayIndex).week());
  const [daySelected, setDaySelected] = useState({});
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState);
  const [apiState, apiDispatch] = useReducer(TriggerApiReducer,apiInitialState);
  const [currDateAppointments, setCurrDateAppointments] = useState([]);
  const [requestState, requestDispatch] = useReducer( requestReducer,requestInitialState);

  const handleGetByDate = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5169/v1/api/appointments",
        {
          params: {
            date: dayjs(
              new Date(currYearIndex, currMonthIndex, currDayIndex)
            ).format("YYYY-MM-DD"),
          },
        }
      );
      setCurrDateAppointments(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //get by date
  useEffect(() => {
    modalDispatch({type:actions.OPEN_REQUEST_LOADER});
    if (currDayIndex != null) {
      setTimeout(() => {
        handleGetByDate();
        modalDispatch({type:actions.CLOSE_REQUEST_LOADER});
      }, 500);
    }
  }, [currDayIndex]);

  //post
  useEffect(() => {
    const handlePost = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5169/v1/api/appointments",
          apiState.postEvent
        );
        if (response.data) {
          requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
          modalDispatch({ type: actions.CLOSE_ADD_EVENT });
          handleGetByDate();
        }
      } catch (err) {
        if (err.response) {
          requestDispatch({
            type: requestActions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
          if(requestState.errorResponse == null)
          {
            modalDispatch({type:actions.OPEN_ADD_EVENT})
          }
        } else console.log(`Error: ${err.message}`);
      } 
    };

    if (apiState.postEvent != null) {
      modalDispatch({type:actions.OPEN_REQUEST_LOADER});
      setTimeout(() => {
        handlePost();
        modalDispatch({type:actions.CLOSE_REQUEST_LOADER});
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
        requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
        apiDispatch({ type: apiActions.RESET_DELETE_EVENT });
        handleGetByDate();
      } catch (err) {
        if (err.response) {
          requestDispatch({
            type: requestActions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
    
        } else console.log(`Error: ${err.message}`);
      } 
    };
    if (apiState.deleteEvent != null) {
      modalDispatch({type:actions.OPEN_REQUEST_LOADER});
      setTimeout(() => {
        handleDeleteEvent();
      modalDispatch({type:actions.CLOSE_REQUEST_LOADER});
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
          requestDispatch({ type: requestActions.OPEN_REQUEST_SUCCESS });
          apiDispatch({ type: apiActions.RESET_UPDATE_EVENT });
          modalDispatch({ type: actions.CLOSE_UPDATE_EVENT });
          handleGetByDate();
      } catch (err) {
        if (err.response) {
          requestDispatch({
            type: requestActions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
          if(requestState.errorResponse == null)
          {
            modalDispatch({type:actions.OPEN_UPDATE_EVENT,payload:modalState.updateEvent})
          }
        } else console.log(`Error: ${err.message}`);
      } 
    };
    if (apiState.updateEvent != null) {
      modalDispatch({type:actions.OPEN_REQUEST_LOADER});
      setTimeout(() => {
        handleUpdate();
        modalDispatch({type:actions.CLOSE_REQUEST_LOADER});
      }, 1000);
    }
  }, [apiState.updateEvent]);

  return (
    <GlobalContext.Provider
      value={{
        requestState,
        requestDispatch,
        modalState,
        modalDispatch,
        apiState,
        apiDispatch,
        currYearIndex,
        setCurrYearIndex,
        currMonthIndex,
        setCurrMonthIndex,
        currDayIndex,
        setCurrDayIndex,
        currWeekIndex,
        setCurrWeekIndex,
        daySelected,
        setDaySelected,
        currDateAppointments,
        setCurrDateAppointments,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
