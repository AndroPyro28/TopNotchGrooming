import React from 'react'
import {DashboardContainer, GlobalStyles} from "./components"
import Welcome from "../../../components/dashboard/Welcome"
import DashboardCharts from "../../../components/dashboard/DashboardCharts"
import FeedbackList from "../../../components/modals/admin_modals/feeback/FeedbackList";
import AppointmentTodayList from "../../../components/dashboard/AppointmentTodayList"
import { useState } from 'react';
function Dashboard() {

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false)
  return (
    <DashboardContainer>
      <GlobalStyles />
      {
        openFeedbackModal && <FeedbackList setOpenFeedbackModal={setOpenFeedbackModal}/>
      }
      <Welcome />
      <DashboardCharts setOpenFeedbackModal={setOpenFeedbackModal}/>

      <AppointmentTodayList />
      
    </DashboardContainer>
  )
}

export default Dashboard