import dayjs from "dayjs";
import EllipsisButton from "../Buttons/Ellipsis/EllipsisButton";
import "./AppointmentDetails.scss";

const AppointmentDetails = ({ event }) => {
  return (
    <>
      <div className="appointment-details-card-container">
        <div className="appointment-title-and-time-stamp">
          <div className="appointment-title">{event.appointmentTitle}</div>
        </div>
       
        <div className="desc">
          <div className="appointment-timestamp">
            {dayjs(event.appointmentStartTime).format("DD-MM-YY") +
              " to " +
              dayjs(event.appointmentEndTime).format("DD-MM-YY")}
          </div>
          <div className="appointment-timestamp">
            {dayjs(event.appointmentStartTime).format("HH:mm a") +
              " - " +
              dayjs(event.appointmentEndTime).format("HH:mm a")}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
