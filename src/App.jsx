import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import EventPage from "./Components/EventPage/EventPage";
import SidePanel from "./Components/SidePanel/SidePanel";
import "./App.scss";
import Modal from "./Modal";



const App = () => {
  return (
    <>
    <Modal/> 
    <NavBar/>
    <SidePanel/>
    <EventPage/>
    
    </>  
  );
};

export default App;
