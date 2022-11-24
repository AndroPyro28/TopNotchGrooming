import React from "react";
import { EmployeeContainer } from "./components";
import CustomAxios from "../../customer hooks/CustomAxios";
import { useState } from "react";

function Employee({ data }) {
  const [isPinned, setIsPinned] = useState(Boolean(data.pin));
  const pinEmployee = () => {
      try {
        const res = CustomAxios({
          uri: `/api/admin/pinEmployee/${data.id}`,
          METHOD: "PATCH",
          values:!Boolean(data.pin)
        });
  
        setIsPinned((prev) => !prev);
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <EmployeeContainer>
      <td>
        <img src={data.profile_image_url} alt="" />
      </td>
      <td>
        {data.firstname} {data.lastname}
      </td>
      <td>{data.email}</td>
      <td>
        Appointment This month:{" "}
        <strong>{data.appointment_activities.length}</strong>{" "}
      </td>
      <td>
        <i
          className="fa-solid fa-award"
          onClick={pinEmployee}
          style={{ color: isPinned ? "rgb(255,151,0)" : "black" }}
        ></i>
      </td>
    </EmployeeContainer>
  );
}

export default Employee;
