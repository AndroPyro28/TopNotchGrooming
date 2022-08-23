import React from "react";
import { AppointmentListContainer, TableHeader, T_Head } from "./components";
import Data from "./Data";
import { useState, useEffect } from "react";
import GetDateToday from "../../helpers/DateToday";
import axios from "axios";
import Cookies from "js-cookie";
import CustomAxios from "../../customer hooks/CustomAxios";

function AppointmentTodayList() {
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setScheduleList([]);
        const dateToday = GetDateToday();

        const response = await CustomAxios({METHOD:"GET", uri:`/api/admin/getScheduleToday/${dateToday}`})

        const { msg, success, result } = response;

        if ((!success, msg?.includes("session expired"))) {
          return window.location.reload();
        }

        setScheduleList(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AppointmentListContainer>
      <h1>Schedule today</h1>

      <TableHeader>
        <T_Head>Customer</T_Head>
        <T_Head className="appointment__type">Appointment type</T_Head>
        <T_Head className="pet__name">Pet name</T_Head>
        <T_Head className="date">Date</T_Head>
        <T_Head>Time</T_Head>
      </TableHeader>

      {loading ? (
        <h1 style={{ color: "gray", textAlign:"center" }}>Loading please wait</h1>
      ) : scheduleList.length === 0 ? (
        <h1 style={{ color: "gray", textAlign:"center" }}>No Schedule today</h1>
      ) : (
        scheduleList.map((data) => (
          <Data data={data} key={data.appointment.id} />
        ))
      )}
    </AppointmentListContainer>
  );
}

export default AppointmentTodayList;
