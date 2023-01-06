import "./ViewButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ViewButton({ setMonthView }) {
  const [selectedDay, setDay] = useState("Day");
  const [isSelected, setIsSelected] = useState(false);
  const Views = [
    {
      view: "Day",
      route: "/",
    },
    {
      view: "Month",
      route: "/monthview",
    },
  ];

  const handleView = (view) => {
    setDay(view);
    setIsSelected(false);
    view === "Day" ? setMonthView(false) : setMonthView(true);
  };

  return (
    <div>
      <button
        className="choose-view"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <span className="sel-day">{selectedDay}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isSelected && (
        <div className="two-view-btn">
          {Views.map((view, index) => (
            <NavLink
              to={view.route}
              key={index}
              className="btn"
              onClick={() => {
                setDay(view.view);
                setIsSelected(false);
                view === "Day" ? setMonthView(false) : setMonthView(true);
              
                // handleView(view.view); 
              }}
            >
              <div>{view.view}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewButton;

// import "./ViewButton.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import React, { useContext, useEffect, useState} from "react";
// // import GlobalContext from "../../../../Context/GlobalContext";

// function ViewButton() {
//   const [selectedDay, setDay] = useState("Month");
//   const [isSelected, setIsSelected] = useState(false);
//   const Views = ["Month", "Day"];

//   // const {setDayView}=useContext(GlobalContext);

//   // useEffect(()=>{
//   //   if(selectedDay==="Day")
//   //   {
//   //     setDayView(true)
//   //   }
//   //   // else
//   //   // {
//   //   //   setDayview(false)
//   //   // }
//   // },[selectedDay])

//   const handleView=(view)=>
//   {
//     setDay(view);
//     setIsSelected(false);
//     // view==="Day"?setDayView(true):setDayView(false);
//   }

//   return (
//     <div>
//       <button
//         className="choose-view"
//         onClick={() => {
//           setIsSelected(!isSelected);
//         }}
//       >
//         <span className="sel-day">{selectedDay}</span>
//         {isSelected ? (
//           <FontAwesomeIcon icon={faCaretUp} />
//         ) : (
//           <FontAwesomeIcon icon={faCaretDown} />
//         )}
//       </button>
//       {isSelected && (
//         <div className="three-view-btn">
//           {Views.map((view, index) => (
//             <button
//               key={index}
//               className="btn"
//               onClick={()=>{handleView(view)}}
//             >
//               {view}

//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ViewButton;
