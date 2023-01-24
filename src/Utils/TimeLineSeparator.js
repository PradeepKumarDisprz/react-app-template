import dayjs from "dayjs";

const GetTimeLineEvents = (appointments,CURRENT_DATE) => {

    const eventStyle = []
    const HEIGHT = 80.9;
    const TOTAL_MINUTES_IN_HOUR = 60;

    const findTotalDuration = (appointmentStartTime, appointmentEndTime) => {
        const startTime = dayjs(appointmentStartTime).hour() * TOTAL_MINUTES_IN_HOUR;
        const startTimeMinutes = dayjs(appointmentStartTime).minute();
        const endTime = dayjs(appointmentEndTime).format("HH") == "00" ? 24 * TOTAL_MINUTES_IN_HOUR : dayjs(appointmentEndTime).hour() * TOTAL_MINUTES_IN_HOUR;
        const endTimeMinutes = dayjs(appointmentEndTime).minute();
        const hourDuration = endTime - startTime;
        const minutesDuration = endTimeMinutes - startTimeMinutes;
        const TotalDuration = hourDuration + minutesDuration;
        return { TotalDuration: TotalDuration, top: (startTime / TOTAL_MINUTES_IN_HOUR) * HEIGHT + (startTimeMinutes / TOTAL_MINUTES_IN_HOUR) * HEIGHT };
    }

    const findHeightAndFontValue = (TotalDuration) => {
        let fontWeight = "";
        let fontValue = 12;
        let heightValue = 0;
        let paddingTop = 0;
        if (TotalDuration >= TOTAL_MINUTES_IN_HOUR) {
            heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 78;
            paddingTop = 10;
            fontValue = 14;
            fontWeight = 600;
        }
        else if (TotalDuration < TOTAL_MINUTES_IN_HOUR) {
            if (TotalDuration <= 20 && TotalDuration > 10) {
                heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 77;
                fontValue = 8;
            }
            else if (TotalDuration <= 10 && TotalDuration > 5) {
                heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 77;
                fontValue = 5;
            }

            else if (TotalDuration <= 5) {
                heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 69;
                fontValue = 1;
            }
            else {
                fontValue = 14;
                fontWeight = 600;
                heightValue = (TotalDuration / TOTAL_MINUTES_IN_HOUR) * 77;
            }
        }
        return { fontValue: fontValue, heightValue: heightValue, fontWeight: fontWeight, paddingTop: paddingTop };
    }



    appointments.map((event) => {

            let totalDuration = findTotalDuration(event.appointmentStartTime, event.appointmentEndTime);
            let valueFound = findHeightAndFontValue(totalDuration.TotalDuration);
            // const eventReceived={
            //     appointmentTitle:event.appointmentTitle,
            //     appointmentDescription:event.appointmentDescription,
            //     appointmentStartTime: dayjs(event.appointmentStartTime).add(new Date().getUTCMinutes(),'minutes'),
            //     appointmentEndTime:dayjs(event.appointmentEndTime).add(new Date().getUTCMinutes(),'minutes')
            //   } 
            eventStyle.push({
                appointment: event,
                appointmentCardStyle: { position: "absolute", top: totalDuration.top, height: valueFound.heightValue, fontSize: valueFound.fontValue, fontWeight: valueFound.fontWeight }, appointmentContentStyle: { paddingTop: valueFound.paddingTop }
            })
    });


    return eventStyle;

}

export default GetTimeLineEvents;