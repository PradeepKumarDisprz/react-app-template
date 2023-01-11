import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const GetUpcomingEvents = () => {
    const {currDateAppointments}=useContext(GlobalContext)
    const separatedEvents=[];
    const currDate=dayjs();
    currDateAppointments.map((event)=>
    {
        if(dayjs(event.appointmentStartTime)>=currDate||event.appointmentEndTime<=currDate)
        {
            separatedEvents.push(event);
        }
    });


    return separatedEvents;

}
 
export default GetUpcomingEvents;