import "./Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd,faBell,faBars} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

//Create Event Button
export function CreateButton() {
  return (
    <div>
       <button className="common-button-style create">
        <FontAwesomeIcon icon={faAdd}/>
        <span>Create</span>
       </button>
    </div>
  )
}

export function HamBurgerMenu() {
  return (
    <div>
       {/* <button className="common-button-style create"> */}
        <FontAwesomeIcon icon={faBars}/>
       {/* </button> */}
    </div>
  )
}

//SetAlarm Button
export function SetAlarmButton() {
  return (
    <div>
       <button className="common-button-style set-rem">
        <FontAwesomeIcon icon={faBell}/>
        <span>Set Remainder</span>
       </button>
    </div>
  )
}

//Previous Button
export function PreviousButton() {
    return (
      <div>
         <button className="common-button-style previous">
          <span>Previous</span>
         </button>
      </div>
    )
  }


//Next Button
export function NextButton() {
    return (
      <div>
         <button className="common-button-style next">
          <span>Next</span>
         </button>
      </div>
    )
  }


//Save Event Button
export  function SaveButton () {
    return (
      <div>
         <button className="common-button-style save">
          <span>Save</span>
         </button>
      </div>
    )
  }

//Edit Event Button
export  function EditButton() {
    return (
      <div>
         <button className="common-button-style edit">
          <span>Edit</span>
         </button>
      </div>
    )
  }

//Add Event Button
export  function AddButton(){
    return (
      <div>
         <button className="common-button-style add">
          <span>Add</span>
         </button>
      </div>
    )
  }


//Update Event Button
export  function UpdateButton() {
    return (
      <div>
         <button className="common-button-style update">
          <span>Update</span>
         </button>
      </div>
    )
  }

//Close Event Button
export function CloseButton() {
    return (
      <div>
         <button className="common-button-style close">
          <span>Close</span>
         </button>
      </div>
    )
  }

  //Cancel Event Button
export function CancelButton () {
    return (
     
         <button className="common-button-style cancel">
          <span>Cancel</span>
         </button>
     
    )
  }


//Delete Event Button
export function DeleteButton () {
    return (
      
         <button className="common-button-style delete">
          <span>Delete</span>
         </button>
      
    )
  }

//Discard Button
export function DiscardButton () {
  return (
    
       <button className="common-button-style discard">
        <span>Discard</span>
       </button>
    
  )
}


export function TodayButton() {
  return (
    <button className="today-btn">
        <span>Today</span>
       </button>
  )
}





