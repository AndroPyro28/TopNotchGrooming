import React, { useState, useTransition } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from "../../../components/loader/Loader";
import {
  AdminListWrapper,
  ListNavigationButton,
  ShiftScheduleContainer,
  T_Head,
  T_Data,
  AdminListContainer,
  TableData,
  TableHeader,
  GlobalStyles,
  Pagination,
  Shifts,
} from "./components";
import AppointmentData from "../../../components/appointment/AppointmentData";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      setAppointments([]);
      try {
        const res = await axios.get(`/api/admin/appointments/${"pending"}`, {
          // might change later to post request
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        });

        const { success, msg, results } = res.data;

        if (!success && msg.includes("session expired")) {
          return window.location.reload();
        }

        setAppointments(results);
      } catch (error) {
        console.log(error.message);
      }
    });
  }, []);

  if (loading) return <Loader bg="rgba(0,0,0,0.5)" />;

  return (
    <>
      <ShiftScheduleContainer>
        <Shifts>
          <div class="am__shifts active">
            <h3>AM</h3>
            <span>Schedule</span>
          </div>
          <div class="pm__shifts">
            <h3>PM</h3>
            <span>Schedule</span>
          </div>
        </Shifts>
        <select>
          <option value={""}>Select by Status</option>
          <option value={""}>On going Schedules</option>
          <option value={""}>Completed Schedules</option>
          <option value={""}>Pending Schedules</option>
        </select>
      </ShiftScheduleContainer>

      <TableHeader>
        <T_Head class="table__customer">Customer</T_Head>
        <T_Head class="table__petname">Pet Name</T_Head>
        <T_Head class="table__date">Date</T_Head>
        <T_Head class="table__time">Time</T_Head>
        <T_Head class="table__service">Service</T_Head>
        <T_Head class="table__status">Status</T_Head>
        <T_Head class="table__action">Action</T_Head>
      </TableHeader>

      <AdminListContainer>
        {appointments.length > 0 ? (
          appointments?.map((data) => (
            <AppointmentData key={data.id} data={data} />
          ))
        ) : (
          <h1>No Appointments yet</h1>
        )}
      </AdminListContainer>

      <Pagination>
        <i class="fa-solid fa-chevron-left"></i> <span>1</span>
        <i class="fa-solid fa-chevron-right"></i>
      </Pagination>
    </>
  );
}

export default AppointmentList;
