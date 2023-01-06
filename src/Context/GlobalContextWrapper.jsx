import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";

const GlobalContextWrapper = (props) => {
  const [currYearIndex, setCurrYearIndex] = useState(dayjs().year());
  const [currMonthIndex, setCurrMonthIndex] = useState(dayjs().month());
  const [currDayIndex, setCurrDayIndex] = useState(dayjs().date());
  const [daySelected, setDaySelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showRequestSuccess, setShowRequestSuccess] = useState(false);
  const [errorResponse, setErrorResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [postEvent, setPostEvent] = useState(null);
  const [currDateAppointments, setCurrDateAppointments] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [viewEvent, setViewEvent] = useState(null);
  const [deleteEvent, setDeleteEvent] = useState(null);
  const [updateEvent, setUpdateEvent] = useState(null);
  const [eventUpdate, setEventUpdate] = useState(null);
  const [eventsSeparated,setEventsSeparated]=useState(null);

  const handleGetByDate = async () => {
    try {
      const response = await axios.get("http://localhost:5169/v1/api/appointments", {
        params: {
          date: dayjs(
            new Date(currYearIndex, currMonthIndex, currDayIndex)
          ).format("YYYY-MM-DD"),
        },
      });
      setCurrDateAppointments(response.data.appointments);
      console.log(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  //get by date
  useEffect(() => {
    if (currDayIndex != null) {
      setIsLoading(true);
      setTimeout(() => {
        handleGetByDate();
      }, 500);
    }
  }, [currDayIndex]);

  // //delete
  useEffect(() => {
    const handleDeleteEvent = async () => {
      try {
        const response = await axios.delete(`http://localhost:5169/v1/appointments/${deleteEvent}`);
        setShowRequestSuccess(true);
        setDeleteEvent(null);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          const error = {
            message: err.response.data,
            statusCode: err.response.status,
          };
          setErrorResponse(error);
        } else console.log(`Error: ${err.message}`);
      } finally {
        setIsLoading(false);
        handleGetByDate();
      }
    };
    if (deleteEvent != null) {
      setIsLoading(true);
      setTimeout(() => {
        handleDeleteEvent();
      }, 500);
    }
  }, [deleteEvent]);

  //post
  useEffect(() => {
    const handlePost = async () => {
      try {
        const response = await axios.post("http://localhost:5169/v1/appointments", postEvent);
        if (response.data) {
          Object.assign(postEvent, {
            appointmentId: response.data.appointmentId,
          });
          setCurrDateAppointments([...currDateAppointments, postEvent]);
          setShowModal(false);
          setShowRequestSuccess(true);
          setPostEvent(null);
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
        setIsLoading(false);
      }
    };
  
    if (postEvent != null) {
      setIsLoading(true);
      setTimeout(() => {
        handlePost();
      }, 1000);
    }
  }, [postEvent]);

   //update
   useEffect(() => {
    const handleUpdate = async () => {
      try {
        const response = await axios.put(`http://localhost:5169/v1/appointments/${eventUpdate.appointmentId}`,eventUpdate.eventSubmitted );
        if (response.data) {
          Object.assign(postEvent, {
            appointmentId: response.data.appointmentId,
          });
          
          setShowRequestSuccess(true);
          setShowModal(false);
          setEventUpdate(null);
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
        
        setIsLoading(false);
        handleGetByDate();
      }
    };
    if (eventUpdate != null) {
      setIsLoading(true);
      setTimeout(() => {
        handleUpdate();
      }, 1000);
    }
  }, [eventUpdate]);





  return (
    <GlobalContext.Provider
      value={{
        currYearIndex,setCurrYearIndex,
        currMonthIndex,setCurrMonthIndex,
        currDayIndex,setCurrDayIndex,
        showModal,setShowModal,
        daySelected,setDaySelected,
        postEvent,setPostEvent,
        showRequestSuccess,setShowRequestSuccess,
        errorResponse,setErrorResponse,
        isLoading,setIsLoading,
        searchInput, setSearchInput,
        currDateAppointments,setCurrDateAppointments,
        viewEvent,setViewEvent,
        deleteEvent,setDeleteEvent,
        updateEvent,setUpdateEvent,
        eventUpdate,setEventUpdate,
        eventsSeparated,setEventsSeparated
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;

