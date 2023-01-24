import dayjs from "dayjs";

const GetAppointments = (appointments, CURRENT_DATE,monthView=false) => {

    const selectedDayAppointments = []
    if(!monthView)
    {
        appointments.map((event) => {
            if (dayjs(event.appointmentStartTime).date() == CURRENT_DATE.date()) {
                selectedDayAppointments.push(event)
            }
        });
    }
    else
    {
        appointments.map((event) => {
                selectedDayAppointments.push(event)           
        });
    }
   return selectedDayAppointments ;

}
export default GetAppointments;