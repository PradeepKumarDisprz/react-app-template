import { UpdateAppointment } from "../Network/AppointmentAPI";

export const handleUpdate = async (updateInput,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions) => {
  
    const updateResponse=await UpdateAppointment(updateInput.appointmentId,updateInput.eventSubmitted)        
    if(updateResponse.status==204)
    {
    modalDispatch({ type: actions.REQUEST_SUCCESS });
    modalDispatch({ type: actions.SET_UPDATE_EVENT });
    monthView ? handleGetByMonth() : handleGetByDate();
    }
    else if (updateResponse.response) {
      modalDispatch({
        type: actions.SET_ERROR_RESPONSE,
        payload: updateResponse.response.data.errorMessage,
      });
    } 
  else console.log(`Error: ${updateResponse.message}`);

};