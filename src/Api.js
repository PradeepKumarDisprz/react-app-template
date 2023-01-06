// import { useContext } from "react";
// import GlobalContext from "./Context/GlobalContext";

// const Api = () => {

//     const {
//         currYearIndex,
//         currMonthIndex,
//         currDayIndex,
//         setShowModal,
//         postEvent, setPostEvent,
//         setShowRequestSuccess,
//         setErrorResponse,
//         setIsLoading,
//         currDateAppointments, setCurrDateAppointments,
//         deleteEvent, setDeleteEvent,
//         eventUpdate, setEventUpdate,
//     } = useContext(GlobalContext)

//     useEffect(() => {
//         const handleGetByDate = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5169/v1/appointments/date", {
//                     params: {
//                         appointmentDate: dayjs(
//                             new Date(currYearIndex, currMonthIndex, currDayIndex)
//                         ).format("YYYY-MM-DD"),
//                     },
//                 });
//                 setCurrDateAppointments(response.data);
//                 console.log(response.data);
//             } catch (err) {
//                 console.log(`Error: ${err.message}`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (currDayIndex != null) {
//             setIsLoading(true);
//             setTimeout(() => {
//                 handleGetByDate();
//             }, 500);
//         }
//     }, [currDayIndex, eventUpdate, deleteEvent]);



//     // //delete
//     useEffect(() => {
//         const handleDeleteEvent = async () => {
//             try {
//                 const response = await axios.delete(`http://localhost:5169/v1/appointments/${deleteEvent}`);
//                 setShowRequestSuccess(true);
//                 setDeleteEvent(null);
//                 console.log(response.data);
//             } catch (err) {
//                 if (err.response) {
//                     const error = {
//                         message: err.response.data,
//                         statusCode: err.response.status,
//                     };
//                     setErrorResponse(error);
//                 } else console.log(`Error: ${err.message}`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (deleteEvent != null) {
//             setIsLoading(true);
//             setTimeout(() => {
//                 handleDeleteEvent();
//             }, 500);
//         }
//     }, [deleteEvent]);



//     //post
//     useEffect(() => {
//         const handlePost = async () => {
//             try {
//                 const response = await axios.post("http://localhost:5169/v1/appointments", postEvent);
//                 if (response.data) {
//                     Object.assign(postEvent, {
//                         appointmentId: response.data.appointmentId,
//                     });
//                     setCurrDateAppointments([...currDateAppointments, postEvent]);
//                     setShowModal(false);
//                     setShowRequestSuccess(true);
//                     setPostEvent(null);
//                 }
//             } catch (err) {
//                 if (err.response) {
//                     const error = {
//                         message: err.response.data,
//                         statusCode: err.response.status,
//                     };
//                     setErrorResponse(error);
//                 } else console.log(`Error: ${err.message}`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (postEvent != null) {
//             setIsLoading(true);
//             setTimeout(() => {
//                 handlePost();
//             }, 1000);
//         }
//     }, [postEvent]);

//     //update
//     useEffect(() => {
//         const handleUpdate = async () => {
//             try {
//                 const response = await axios.put(`http://localhost:5169/v1/appointments/${eventUpdate.appointmentId}`, eventUpdate.eventSubmitted);
//                 if (response.data) {
//                     Object.assign(postEvent, {
//                         appointmentId: response.data.appointmentId,
//                     });
//                     setShowModal(false);
//                     setShowRequestSuccess(true);
//                     setEventUpdate(null);
//                 }
//             } catch (err) {
//                 if (err.response) {
//                     const error = {
//                         message: err.response.data,
//                         statusCode: err.response.status,
//                     };
//                     setErrorResponse(error);
//                 } else console.log(`Error: ${err.message}`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (eventUpdate != null) {
//             setIsLoading(true);
//             setTimeout(() => {
//                 handleUpdate();
//             }, 1000);
//         }
//     }, [eventUpdate]);


// }

// export default Api;