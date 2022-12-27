import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef,useEffect} from "react";
import "./EllipsisButton.scss";

function EllipsisButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setIsOpen(false));

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

  const handleOptions=()=>
  {
    setIsOpen(!isOpen)
  }



  return (
    <div >
      <FontAwesomeIcon icon={faEllipsis} onClick={handleOptions} className="ellipsis-icon" />
    {isOpen&&<div className="ellipsis-buttons" ref={modalRef}>
      <button className="btn" onClick={handleOptions}>
          <span>Delete</span>
      </button>
      <button className="btn edit" onClick={handleOptions}>
          <span>Edit</span>
      </button>
    </div>}
    </div>
  );
}

export default EllipsisButton;
