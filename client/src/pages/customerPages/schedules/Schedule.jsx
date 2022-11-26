import React from 'react'
import {ScheduleContainer} from "./components"
import {format} from 'timeago.js'
import {useNavigate} from 'react-router-dom';

function Schedule({data}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${data.id}`)
  }
  return (
    <ScheduleContainer onClick={handleClick}>
        <td> <img src={data.pet_image} /> </td>
        <td>{data.formattedDate_n_time.date} at {data.formattedDate_n_time.time} ({format(data.date_n_time)})</td>
        <td>{data.status}</td>
    </ScheduleContainer>
  )
}

export default Schedule