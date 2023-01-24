import { DeleteAppointment } from "../Network/AppointmentAPI";


export const handleDeleteEvent = async (deleteInput,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions) => {
    const deleteResponse = await DeleteAppointment(deleteInput);
    if (deleteResponse.status == 204) {
      modalDispatch({ type: actions.REQUEST_SUCCESS });
      monthView ? handleGetByMonth() : handleGetByDate();
    } else if (deleteResponse.response) {
      modalDispatch({
        type: actions.SET_ERROR_RESPONSE,
        payload: deleteResponse.response.data.errorMessage,
      });
    } else console.log(`Error: ${deleteResponse.message}`);
  };