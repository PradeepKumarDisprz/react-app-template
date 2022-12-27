import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DaySchedule = () => {
  return (
    <div>
        <div>
        <span>Today's Appointment</span>
        <div>
            <FontAwesomeIcon icon={faChevronLeft}/>
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
        </div>
        <div>
            currentMonth day, year
        </div>
     
    </div>
  )
}

export default DaySchedule