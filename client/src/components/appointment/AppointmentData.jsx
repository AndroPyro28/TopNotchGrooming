import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableData,
  T_Data,
} from "../../pages/adminPages/appointment/components";
function AppointmentData({ data }) {
  const navigate = useNavigate();
  return (
    <TableData
      onClick={() => navigate(`/admin/record/appointments/${data?.id}`)}
    >
      <T_Data class="table__id" style={{ fontStyle: "italic" }}>
        {data.id}
      </T_Data>
      <T_Data class="table__customer" style={{ justifySelf: "flex-start" }}>
        <img src={data.profile_image_url} />
        {data.firstname} {data.lastname}
      </T_Data>
      <T_Data class="table__petname">{data.pet_name}</T_Data>
      <T_Data class="table__date">{data?.date_n_time.date}</T_Data>
      <T_Data class="table__time">{data?.date_n_time.time}</T_Data>
      <T_Data class="table__service">{data.appointment_type}</T_Data>
      <T_Data class="table__status">
        <span class={data.status}>{data.status}</span>
      </T_Data>
    </TableData>
  );
}

export default AppointmentData;
