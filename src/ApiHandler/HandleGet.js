import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";
import { GetByDate, GetByMonth } from "../Network/AppointmentAPI";

const useGetApi = () => {
  const { calendarState, setAppointments } = useContext(GlobalContext)

  const handleGetByDate = async () => {
    const getByDateInput =
    {
      offSet: 0, fetchCount: -1,
      startDate: dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("YYYY-MM-DD"),
      endDate: dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex + 1)).format("YYYY-MM-DD")
    }
    const getByDateresponse = await GetByDate(getByDateInput);
    if (getByDateresponse.status === 200) {
      setAppointments(getByDateresponse.data.appointments);
    }
    else
      console.log(`Error: ${getByDateresponse.message}`);
  };

  const handleGetByMonth = async () => {
    const getByMonthInput = {
      offSet: 0,
      fetchCount: -1,
      startDate: dayjs(
        new Date(
          calendarState.currYearIndex,
          calendarState.currMonthIndex,
          calendarState.currDayIndex
        )
      )
        .startOf("month")
        .format("YYYY-MM-DD"),
      endDate: dayjs(
        new Date(
          calendarState.currYearIndex,
          calendarState.currMonthIndex,
          calendarState.currDayIndex
        )
      )
        .endOf("month")
        .format("YYYY-MM-DD"),
    };
    const getByMonthresponse = await GetByMonth(getByMonthInput);
    if (getByMonthresponse.status === 200) {
      setAppointments(getByMonthresponse.data.appointments);
    } else console.log(`Error: ${getByMonthresponse.message}`);
  };

  return { handleGetByDate, handleGetByMonth };
}

export default useGetApi;