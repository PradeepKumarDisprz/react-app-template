import { SearchAppointment } from "../Network/AppointmentAPI";

export const handleSearch = async (searchInput,searchDispatch,searchActions) => {
   
    const searchResponse = await SearchAppointment(searchInput);
    if (searchResponse.status === 200) {
      searchDispatch({type:searchActions.SET_SEARCH_RESULT,payload:{
        isTruncated: searchResponse.data.isTruncated,
        appointments: searchResponse.data.appointments,
      }});
    }
   else 
    console.log(`Error: ${searchResponse.message}`);
};