import React from "react";
import { AppointmentListContainer, TableHeader, T_Head} from "./components";
import Data from "./Data";
function AppointmentTodayList() {
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

      {
        [1,2,3,4,5,6,7,8,9,10].map(n => (
          <Data />
        ))
      }
    </AppointmentListContainer>
  );
}

export default AppointmentTodayList;
