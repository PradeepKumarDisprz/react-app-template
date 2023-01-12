import dayjs from "dayjs";

const GetUpcomingEvents = (currDateAppointments) => {
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