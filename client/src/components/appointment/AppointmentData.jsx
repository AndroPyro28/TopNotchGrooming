import React from "react";
import {
  TableData,
  T_Data,
} from "../../pages/adminPages/appointment/components";
import Logic from "./logic";
function AppointmentData({ data }) {
  const { dateNtimeFormatter } = Logic();

  const { newDate, newTime } = dateNtimeFormatter(data.date_n_time);
  return (
    <TableData>
      <T_Data class="table__customer">
        <img src={data.profile_image_url} />
        {data.firstname} {data.lastname}
      </T_Data>
      <T_Data class="table__petname">{data.pet_name}</T_Data>
      <T_Data class="table__date">{newDate}</T_Data>
      <T_Data class="table__time">{newTime}</T_Data>
      <T_Data class="table__service">{data.appointment_type}</T_Data>
      <T_Data class="table__status">
        <span class={data.status}>{data.status}</span>
      </T_Data>
      <T_Data class="table__action">
        <i class="fa-solid fa-ellipsis"></i>
      </T_Data>
    </TableData>
  );
}

export default AppointmentData;
