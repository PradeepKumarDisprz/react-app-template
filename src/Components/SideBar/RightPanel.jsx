import Calendar from "../CalendarComponent/Calendar";
import {CreateButton,SetAlarmButton} from "../Buttons/Buttons";
import "./RightPanel.scss";


function RightPanel() {
  return (
  <div className="right-panel">
    <div className="rp-btns">
   <span className="rp-btn-1"><CreateButton /></span>
   {/* <span className=""><SetAlarmButton /></span> */}
   </div>
   <Calendar/>
   </div>
   
  )
}

export default RightPanel