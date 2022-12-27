import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EllipsisButton from '../Modal/Ellipsis/EllipsisButton'
import "./Appointment.scss"
const Appointment = () => {

 const appointmentCardStyles=
 {

    width:"200px",
    height:"35px"
    
   
 }
  return (
    <div className="appointmentContent" style={appointmentCardStyles}>
        <div className="appointment-header">
            <span className="appointment-title">hi</span>
            <EllipsisButton/>
        </div>
        <div className="appointment-timestamp">
            5:30 PM to 6.30 PM
        </div>
    </div>
  )
}

export default Appointment