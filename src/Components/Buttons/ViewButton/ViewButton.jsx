import "./ViewButton.scss";
import React, { useContext} from "react";
import GlobalContext from "../../../Context/GlobalContext";

function ViewButton() {
  const {setMonthView,setSearch}=useContext(GlobalContext);
  const Views = [
    {
      view: "Day",
    },
    {
      view: "Month",
    },
  ];
  
  const handleView=(view)=>
  {
    if(view=="Month")
    {
      setMonthView(true);
      setSearch(false);
    }
    else
    setMonthView(false);
    setSearch(false);
  }

  return (
    <>
      {(
        <div className="two-view-btn">
          {Views.map((view, index) => (
              <div onClick={()=>handleView(view.view)} key={index} className="btn">{view.view}</div>
          ))}
        </div>
      )}
    </>
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
