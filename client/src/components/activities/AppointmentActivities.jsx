import React, {useEffect} from "react";
import { UserActivities, RowInfo, Activity } from "./components";
import CustomAxios from "../../customer hooks/CustomAxios";
function AppointmentActivities() {

  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({METHOD:"GET", uri:"/api/customer/getAllAppointmentActivities"})
        console.log('appointment...')
      } catch (error) {
        console.error(error.message)
      }
    })()
  }, []);


  return (
    <UserActivities>
      <h2>Appointment History</h2>
      <RowInfo>
        <Activity status={'onGoing'}>
          <span class="date">12 May 2022 9:00AM</span>
        </Activity>

        <Activity status={'onGoing'}>
          <span class="service">Service-Grooming</span>
        </Activity>

        <Activity status={'onGoing'}>
          <span class="status">onGoing</span>
        </Activity>
      </RowInfo>

      <RowInfo>
        <Activity>
          <span class="date">12 May 2022 9:00AM</span>
        </Activity>

        <Activity>
          <span class="service">Service-Grooming</span>
        </Activity>

        <Activity status={'complete'}>
          <span class="status">Completed</span>
        </Activity>
      </RowInfo>

      <RowInfo>
        <Activity status={'cancelled'}>
          <span class="date">12 May 2022 9:00AM</span>
        </Activity>

        <Activity status={'cancelled'}>
          <span class="service">Service-Grooming</span>
        </Activity>

        <Activity status={'cancelled'}>
          <span class="status">cancelled</span>
        </Activity>
      </RowInfo>
    </UserActivities>
  );
}

export default AppointmentActivities;
