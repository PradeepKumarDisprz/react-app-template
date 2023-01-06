// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// const DaySchedule = () => {
//   return (
//     <div>
//         <div>
//         <span>Today's Appointment</span>
//         <div>
//             <FontAwesomeIcon icon={faChevronLeft}/>
//             <FontAwesomeIcon icon={faChevronRight}/>
//         </div>
//         </div>
//         <div>
//             currentMonth day, year
//         </div>
     
//     </div>
//   )
// }

// export default DaySchedule












// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );



// import DayView from "../DayView/DayView";
// import MonthView from "../MonthView/MonthView";
// import SearchResult from "../Search/SearchResult/SearchResult";
// import {Routes, Route } from "react-router-dom";

// import "./EventPage.scss";

// const EventPage = () => {
//   return (
    
//       <div className="event-page-parent">
        
//         <Routes>
//           <Route path="/" element={<DayView />} />
//           <Route path="/monthview" element={<MonthView />} />
//           <Route path="/searchresult" element={<SearchResult />} />
//         </Routes>

//       </div>
   
//   );
// };

// export default EventPage;






// import "./Buttons.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import React, { useState,useRef,useEffect } from "react";
// import { NavLink } from "react-router-dom";

// function ViewButton() {
//   const [selectedDay, setDay] = useState("Day");
//   const [isSelected, setIsSelected] = useState(false);
//   const modalRef = useRef();
  

//   const Views = [
//   {
//     view: "Month",
//     route: "/monthview",
//   },
//   {
//     view: "Day",
//     route: "/",
//   },
// ];

//   return (
//     <div>
//       <button className="choose-view"  onClick={()=>{setIsSelected(!isSelected)}}>
//         <span className="sel-day">{selectedDay}</span>
//         <FontAwesomeIcon icon={faCaretDown}  />
//       </button>
//       {
//        isSelected&& <div className="three-view-btn" >
//           {Views.map((view,index) => 
           
//            (
//             <NavLink to={view.route} key={index}>
//             <button  className="btn" onClick={() =>{ 
//                 setDay(view.view)
//                 setIsSelected(false)
//             }} >
//               {view.view}
              
//             </button>
//             </NavLink>
//            )
           
//           )}
//         </div>
//         }
//     </div>
//   );
// }

// export default ViewButton;







// <NavLink to={view.route}>

//  {/* </NavLink>; */}


// const Views = [
//   {
//     view: "Month",
//     route: "/monthview",
//   },
//   {
//     view: "Day",
//     route: "/dayview",
//   },
// ];












// const modalRef = useRef();
  // useOnClickOutside(modalRef, () => setIsSelected(!isSelected));

  // function useOnClickOutside(ref, handler) {
  //   useEffect(
  //     () => {
  //       const listener = (event) => {
  //         // Do nothing if clicking ref's element or descendent elements
  //         if (!ref.current || ref.current.contains(event.target)) {
  //           return;
  //         }
  //         handler(event);
  //       };
  //       document.addEventListener("mousedown", listener);
  //       document.addEventListener("touchstart", listener);
  //       return () => {
  //         document.removeEventListener("mousedown", listener);
  //         document.removeEventListener("touchstart", listener);
  //       };
  //     },
  //     // Add ref and handler to effect dependencies
  //     // It's worth noting that because passed in handler is a new ...
  //     // ... function on every render that will cause this effect ...
  //     // ... callback/cleanup to run every render. It's not a big deal ...
  //     // ... but to optimize you can wrap handler in useCallback before ...
  //     // ... passing it into this hook.
  //     [ref, handler]
  //   );
  // }