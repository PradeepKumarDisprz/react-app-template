import dayjs from "dayjs";
import EllipsisButton from "../Buttons/Ellipsis/EllipsisButton";
import "./AppointmentDetails.scss";

const AppointmentDetails = ({event}) => {
    return ( 
        <>
        <div className="appointment-details-card-container">
            <div className="appointment-title-and-time-stamp">
                <div className="appointment-title">
                  {event.appointmentTitle}
                </div>
                <div className="appointment-timestamp">
                   {dayjs(event.appointmentStartTime).format("hh:mm a")+"-"+dayjs(event.appointmentEndTime).format("hh:mm a")}
                </div>
            </div>
            <div className="desc">
                <div className="appointment-desc">
                  {event.appointmentDescription?event.appointmentDescription:"No Description Added.."}
                </div>
  
            </div>
        </div>
        </>
     );
}
 
export default AppointmentDetails;