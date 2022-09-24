import React, {useEffect} from "react";
import { UserActivities, RowInfo, Activity, Pagination } from "./components";
import CustomAxios from "../../customer hooks/CustomAxios";
import { useState } from "react";
import Get_Date_N_Time from "../../helpers/Get_Date_N_Time";
function AppointmentActivities() {

  const [loading, setLoading] = useState(false)
  const [appointments, setAppointments] = useState([])
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const results = await CustomAxios({METHOD:"GET", uri:"/api/customer/getAllAppointmentActivities"})
        const {msg, data} = results;

        if(msg?.includes("session expired")) {
          return window.location.reload();
        }
        setAppointments(data);
        setMaxPage(Math.ceil(data.length / 6));
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  const fetchAppointments = loading ? <h4>Loading activities...</h4> 
  : appointments?.length > 0 ? appointments.slice(6 * currentPage, 6 * currentPage + 6).map((appointment, index) => {
    const {newDate, newTime} = Get_Date_N_Time(appointment.date_n_time);
    return <RowInfo key={index}>
    <Activity status={appointment.status}>
          <span class="date"> {newDate} at {newTime} </span>
        </Activity>

        <Activity status={appointment.status}>
          <span class="service">Service: {appointment.appointment_type}</span>
        </Activity>

        <Activity status={appointment.status}>
          <span class="status">{appointment.status}</span>
        </Activity>
  </RowInfo>
  }) : <h4>No activities found</h4>;

  const fetchPagination = !loading && <Pagination>
  <i class="fa-solid fa-chevron-left" onClick={() => setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))}></i>{" "}
  <span>{`${currentPage + 1} / ${maxPage}`}</span>
  <i class="fa-solid fa-chevron-right" onClick={() =>setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))}
  ></i>
    </Pagination>

  return (
    <UserActivities>
      
      <h2>Appointment History</h2>

     {fetchAppointments}

     {fetchPagination}
    </UserActivities>
  );
}

export default AppointmentActivities;
