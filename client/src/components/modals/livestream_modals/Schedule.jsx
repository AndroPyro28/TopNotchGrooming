import React from 'react'
import {ScheduleData} from "./components"
function Schedule({data}) {
  const {profile_image_url, firstname, id, lastname, email} = data.customer;
  return (
    <ScheduleData>
        <img src={profile_image_url} />
        <div className='info'>
            <span className='name'> {`${firstname} ${lastname}`} </span>
            <span className='email'> {email} </span>
        </div>
        <span>Select</span>

    </ScheduleData>
  )
}

export default Schedule