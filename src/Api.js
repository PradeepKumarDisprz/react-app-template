import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";
import { actions, initialState, modalReducer } from "../Reducer/ModalReducer";
import { TriggerApiReducer,apiInitialState,apiActions } from "../Reducer/TriggerApiReducer";

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
    } finally {
      modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
    }
  };

  //get by date
  useEffect(() => {
    modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
    if (currDayIndex != null) {
      setTimeout(() => {
        handleGetByDate();
      }, 500);
    }
  }, [currDayIndex]);

  //post
  useEffect(() => {
    const handlePost = async () => {
      try {
        const response = await axios.post( "http://localhost:5169/v1/api/appointments",apiState.postEvent);
        if (response.data) {
          modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS });
          apiDispatch({type:apiActions.RESET_POST_EVENT})
        }
      } catch (err) {
        if (err.response) {
          modalDispatch({
            type: actions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
        } else console.log(`Error: ${err.message}`);
      } finally {
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
        handleGetByDate();
      }
    };

    if (apiState.postEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handlePost();
      }, 1000);
    }
  }, [apiState.postEvent]);

  // //delete
  useEffect(() => {
    const handleDeleteEvent = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:5169/v1/api/appointments/${apiState.deleteEvent}`
        );
        modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS });
        apiDispatch({type:apiActions.RESET_DELETE_EVENT})
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          modalDispatch({
            type: actions.SET_ERROR_RESPONSE,
            value: err.response.data.errorMessage,
          });
        } else console.log(`Error: ${err.message}`);
      } finally {
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
        handleGetByDate();
      }
    };
    if (apiState.deleteEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleDeleteEvent();
      }, 500);
    }
  }, [apiState.deleteEvent]);

  //update
  useEffect(() => {
    const handleUpdate = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5169/v1/api/appointments/${apiState.updateEvent.appointmentId}`,
          apiState.updateEvent.eventSubmitted
        );
        if (response.data) {
          modalDispatch({ type: actions.OPEN_REQUEST_SUCCESS});
          apiDispatch({type:apiActions.RESET_UPDATE_EVENT});
        }
      } catch (err) {
        if (err.response) {
          const error = {
            message: err.response.data,
            statusCode: err.response.status,
          };
          setErrorResponse(error);
        } else console.log(`Error: ${err.message}`);
      } finally {
        modalDispatch({ type: actions.CLOSE_REQUEST_LOADER });
        handleGetByDate();
      }
    };
    if (apiState.updateEvent != null) {
      modalDispatch({ type: actions.OPEN_REQUEST_LOADER });
      setTimeout(() => {
        handleUpdate();
      }, 1000);
    }
  }, [apiState.updateEvent]);