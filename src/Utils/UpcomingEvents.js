import dayjs from "dayjs";

const GetUpcomingEvents = (currDateAppointments) => {
    const separatedEvents=[];
    const currTime=dayjs();
    currDateAppointments.map((event)=>
    {
        if(dayjs(event.appointmentStartTime)>=currTime||dayjs(event.appointmentEndTime)>=currTime)
        {
            separatedEvents.push(event);
        }
    });
    return separatedEvents;
}
export default GetUpcomingEvents;