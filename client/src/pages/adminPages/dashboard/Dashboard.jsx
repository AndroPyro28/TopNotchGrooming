import React from 'react'
import {DashboardContainer, GlobalStyles} from "./components"
import Welcome from "../../../components/dashboard/Welcome"
import DashboardCharts from "../../../components/dashboard/DashboardCharts"
import AppointmentTodayList from "../../../components/dashboard/AppointmentTodayList"
function Dashboard() {
  return (
    <DashboardContainer>
      <GlobalStyles />
      <Welcome />
      <DashboardCharts />

      <AppointmentTodayList />
      
    </DashboardContainer>
  )
}

export default Dashboard