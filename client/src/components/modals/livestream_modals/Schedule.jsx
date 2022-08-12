import React from 'react'
import {ScheduleData} from "./components"
import Get_Date_N_Time from '../../../helpers/Get_Date_N_Time';
function Schedule({data, setScheduleInfo, scheduleInfo}) {
  
  const {profile_image_url, firstname, id:customerId, lastname, email} = data.customer;
  const {date_n_time, id:appointmentId} = data.appointment;
  const {newTime} = Get_Date_N_Time(date_n_time);
  const isSelected = scheduleInfo?.appointmentId == appointmentId;
  return (
    <ScheduleData onClick={() => setScheduleInfo(prev => ({appointmentId, customerId}))} selected = {isSelected}>
        <img src={profile_image_url} />

        <div className='info'>
            <span className='name'> {`${firstname} ${lastname}`} </span>
            <span className='email'> {email} </span>
        </div>

        <span className='time'>{newTime}</span>
        <span className='select__tag'>{isSelected ? "Selected" : "Select"} </span>
    </ScheduleData>
  )
}

export default Schedule