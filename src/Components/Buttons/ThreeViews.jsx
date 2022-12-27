import "./Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState,useRef,useEffect } from "react";

function ThreeViewButton() {
  const [selectedDay, setDay] = useState("Day");
  const [isSelected, setIsSelected] = useState(false);

  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setIsSelected(!isSelected));

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  const threeViews = ["Month", "Day"];

  return (
    <div>
      <button className="choose-view"  onClick={()=>{setIsSelected(!isSelected)}}>
        {selectedDay}
        <FontAwesomeIcon icon={faCaretDown}  />
      </button>
      {
       isSelected&& <div className="three-view-btn" ref={modalRef} >
          {threeViews.map((i, o) => (
            <button key={o} className="btn" onClick={() =>{ 
                setDay(i)
                setIsSelected(false)
            }} >
              {i}
            </button>
          ))}
        </div>}
    </div>
  );
}

export default ThreeViewButton;
