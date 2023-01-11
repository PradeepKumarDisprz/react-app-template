import Calendar from "./Components/Calendar/Calendar";
import "./App.scss";
import GetUpcomingEvents from "./Utils/UpcomingEvents";
import { Count } from "./Components/SidePanel/UpcomingEvents/UpcomingEvent";

const App = () => {

  return (
    <>
   {/* <UpcomingEvents/> */}
   {/* <Count/> */}
    <Calendar/>   
    </>  
  );
};

export default App;
