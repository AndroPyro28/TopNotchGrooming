import React from "react";
import { AppointmentListContainer, TableHeader, T_Head } from "./components";
import Data from "./Data";
import { useState, useEffect } from "react";
import GetDateToday from "../../helpers/DateToday";
import axios from "axios";
import Cookies from "js-cookie";

function AppointmentTodayList() {
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setScheduleList([]);
        const dateToday = GetDateToday();
        const res = await axios.get(
          `/api/admin/getScheduleToday/${dateToday}`,
          {
            headers: {
              userinfo: Cookies.get("userToken"),
            },
          }
        );

        const { msg, success, result } = res.data;

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
        <T_Head>Customer name</T_Head>
        <T_Head>Appointment type</T_Head>
        <T_Head>Pet name</T_Head>
        <T_Head>Date</T_Head>
        <T_Head>Time</T_Head>
      </TableHeader>

      {loading ? (
        <h1 style={{ color: "gray" }}>Loading please wait</h1>
      ) : scheduleList.lenth === 0 ? (
        <h1 style={{ color: "gray" }}>No Schedule today</h1>
      ) : (
        scheduleList.map((data) => (
          <Data data={data} key={data.appointment.id} />
        ))
      )}
    </AppointmentListContainer>
  );
}

export default AppointmentTodayList;