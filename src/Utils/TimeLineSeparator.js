import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const GetEvents = () => {
    const {currDateAppointments,setEventsSeparated}=useContext(GlobalContext)
    const styles=[]
    const HEIGHT=80;
    currDateAppointments.map((event,index)=>
    {
        const startTime=dayjs(event.appointmentStartTime).hour();
        const minutes=dayjs(event.appointmentStartTime).minute();
        const top=startTime*HEIGHT+minutes;
        styles.push({event,top})
    });

    setEventsSeparated(styles);

    return styles;

}
 
export default GetEvents;