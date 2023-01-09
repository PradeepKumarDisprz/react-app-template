import React from "react";
import "./Appointment.scss";
import dayjs from "dayjs";

const Appointment = ({ event }) => {
  const { appointmentEndTime, appointmentStartTime, appointmentTitle } = event;
  const HEIGHT = 81.05;
  let fontValue = 12;
  let heightValue = 0;
  let paddingTop = 0;
  let fontWeight = "";
  const startTime = dayjs(appointmentStartTime).hour() * 60;
  const startTimeMinutes = dayjs(appointmentStartTime).minute();
  const endTime = dayjs(appointmentEndTime).hour() * 60;
  const endTimeMinutes = dayjs(appointmentEndTime).minute();
  const hourDuration = endTime - startTime;
  const minutesDuration = endTimeMinutes - startTimeMinutes;
  const TotalDuration = hourDuration + minutesDuration;

  if (TotalDuration >= 60) {
    heightValue = (TotalDuration / 60) * 80.1;
    paddingTop = 10;
    fontValue = 14;
    fontWeight = 600;
  } else if (TotalDuration < 60) {
    if (TotalDuration <= 5) {
      heightValue = 5;
      fontValue = 4;
    }
    if (TotalDuration <= 10) {
      heightValue = 10;
      fontValue = 5;
    } else if (TotalDuration <= 20) {
      heightValue = 10;
      fontValue = 8;
    } else {
      fontValue = 12;
      paddingTop = 10;
      heightValue = (TotalDuration / 60) * 78;
    }
  }

  const appointmentCardStyle = {
    position: "absolute",
    top: (startTime / 60) * HEIGHT + (startTimeMinutes / 60) * HEIGHT,
    height: heightValue,
    fontSize: fontValue,
    fontWeight: fontWeight,
  };

  const appointmentContentStyle = {
    paddingTop: paddingTop,
  };

  return (
    <div className="appointmentContent" style={appointmentCardStyle}>
      <div className="appointment-timestamp" style={appointmentContentStyle}>
        {event &&
          dayjs(appointmentStartTime).format("HH:mm") +
            " - " +
            dayjs(appointmentEndTime).format("HH:mm")}
      </div>
      <div className="appointment-title" style={appointmentContentStyle}>
        {appointmentTitle}
      </div>
    </div>
  );
};

export default Appointment;
