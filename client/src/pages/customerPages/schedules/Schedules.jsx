import React from 'react'
import { useEffect, useState } from 'react'
import {SchedulesContainer, ScheduleList} from './components'
import CustomAxios from "../../../customer hooks/CustomAxios";
import Logic from "../../../components/appointment/logic";
import Schedule from './Schedule'

function Schedules() {
    const [appointments, setAppointments] = useState([]);
    const { dateNtimeFormatter, } = Logic({  });

    useEffect(() => {
        (async () => {
            setAppointments([]);

            const response = await CustomAxios({METHOD:"GET", uri:`/api/customer/getAppointments`});
            const { success, msg, results } = response;

            if (!success && msg?.includes("session expired")) {
                return window.location.reload();
            }
            
            const organizedData = results?.sort((a, b) => b.date_n_time.localeCompare(a.date_n_time))?.map((appointment) => {
                const { newDate, newTime } = dateNtimeFormatter(
                  appointment.date_n_time
                );
                return {
                  ...appointment,
                  formattedDate_n_time: {
                    date: newDate,
                    time: newTime,
                  }
                };
              });
              setAppointments(organizedData)
        })()
    }, [])

  return (
    <SchedulesContainer>
        <h1>Your schedules</h1>

        <ScheduleList>
            {
                appointments?.map((appointment) => {
                    return <Schedule data={appointment}/>
                })
            }
        </ScheduleList>
    </SchedulesContainer>
  )
}

export default Schedules