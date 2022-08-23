import React from "react";
import { TableData, T_Data } from "./components";
import Logic from "../appointment/logic";
function Data({ data }) {
  const { firstname, lastname, profile_image_url } = data.customer;
  const { appointment_type, pet_name, date_n_time } = data.appointment;
  const { dateNtimeFormatter } = Logic({});
  const { newDate, newTime } = dateNtimeFormatter(date_n_time);
  return (
    <TableData>
      <T_Data className="customer">
        <img src={profile_image_url} />
        {`${firstname} ${lastname} `}{" "}
      </T_Data>
      <T_Data className="appointment__type">{appointment_type}</T_Data>
      <T_Data className="pet__name">{pet_name}</T_Data>
      <T_Data className="date">{newDate}</T_Data>
      <T_Data className="time">{newTime}</T_Data>
    </TableData>
  );
}

export default Data;
