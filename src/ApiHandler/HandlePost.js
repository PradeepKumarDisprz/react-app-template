import { PostAppointment } from "../Network/AppointmentAPI";

export const handlePost = async (postInput,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions) => {
    const postResponse = await PostAppointment(postInput);
    if (postResponse.status==201) {
      modalDispatch({ type: actions.REQUEST_SUCCESS });
      modalDispatch({ type: actions.ADD_EVENT });
      monthView ? handleGetByMonth():handleGetByDate();
    }
  else if (postResponse.response) {
    console.log(postResponse.response.data.errorMessage)
      modalDispatch({
        type: actions.SET_ERROR_RESPONSE,
        payload: postResponse.response.data.errorMessage,
      });
    } 
  else console.log(`Error: ${postResponse.message}`);
  
};