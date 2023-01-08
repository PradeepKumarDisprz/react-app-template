import "./Buttons.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

//Create Button
export function CreateButton() {
  return (
    <button className="create-btn">
      <FontAwesomeIcon icon={faAdd} className="add-icon" />
      <span>Create</span>
    </button>
  );
}

//Save Button
export function SaveButton() {
  return (
    <button type="submit" className="save-btn">
      <span>Save</span>
    </button>
  );
}


//Update Button
export function UpdateButton() {
  return (
    <button type="submit" className="update-btn">
      <span>Update</span>
    </button>
  );
}

//Close Button
export function CloseButton() {
  return (
    <button className="close-btn">
      <span>Close</span>
    </button>
  );
}

//Cancel Button
export function CancelButton() {
  return (
    <button className="cancel-btn">
      <span>Cancel</span>
    </button>
  );
}


//Discard Button
export function DiscardButton() {
  return (
    <button className="discard-btn">
      <span>Discard</span>
    </button>
  );
}

//Today Button
export function TodayButton() {
  return (
    <button className="today-btn">
      <span>Today</span>
    </button>
  );
}
