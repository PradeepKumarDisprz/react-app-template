import SmallCalendar from "./SmallCalendar/SmallCalendar";
import UpcomingEvents from "../SidePanel/UpcomingEvents/UpcomingEvent";
import "./SidePanel.scss";

function RightPanel() {
  return (
    <div className="side-panel">
      <SmallCalendar />
      <UpcomingEvents/>
    </div>
  );
}

export default RightPanel;
