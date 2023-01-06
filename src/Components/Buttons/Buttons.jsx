import "./Buttons.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBell, faBars } from "@fortawesome/free-solid-svg-icons";

//Create Event Button
export function CreateButton() {
  return (
    <button className="common-button-style create">
      <FontAwesomeIcon icon={faAdd} className="add-icon" />
      <span>New Task</span>
    </button>
  );
}

//SetAlarm Button
export function SetAlarmButton() {
  return (
    <button className="common-button-style set-rem">
      <FontAwesomeIcon icon={faBell} className="bell-icon" />
      <span>Set Remainder</span>
    </button>
  );
}

//Previous Button
export function PreviousButton() {
  return (
    <button className="common-button-style previous">
      <span>Previous</span>
    </button>
  );
}

//Next Button
export function NextButton() {
  return (
    <button className="common-button-style next">
      <span>Next</span>
    </button>
  );
}

//Save Event Button
export function SaveButton() {
  return (
    <button type="submit" className="common-button-style save">
      <span>Save</span>
    </button>
  );
}

//Edit Event Button
export function EditButton() {
  return (
    <button className="common-button-style edit">
      <span>Edit</span>
    </button>
  );
}

//Add Event Button
export function AddButton() {
  return (
    <button className="common-button-style add">
      <span>Add</span>
    </button>
  );
}

//Update Event Button
export function UpdateButton() {
  return (
    <button type="submit" className="common-button-style update">
      <span>Update</span>
    </button>
  );
}

//Close Event Button
export function CloseButton() {
  return (
    <button className="common-button-style close">
      <span>Close</span>
    </button>
  );
}

//Cancel Event Button
export function CancelButton() {
  return (
    <button className="common-button-style cancel">
      <span>Cancel</span>
    </button>
  );
}

//Delete Event Button
export function DeleteButton() {
  return (
    <button className="common-button-style delete">
      <span>Delete</span>
    </button>
  );
}

//Discard Button
export function DiscardButton() {
  return (
    <button className="common-button-style discard">
      <span>Discard</span>
    </button>
  );
}

export function TodayButton() {
  return (
    <button className="today-btn">
      <span>Today</span>
    </button>
  );
}
