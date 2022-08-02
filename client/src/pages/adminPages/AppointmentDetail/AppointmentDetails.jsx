import React from 'react'
import AppointmentInfo from '../../../components/appointment/AppointmentInfo';
import Details from '../../../components/appointment/Details';
import {Container} from "./components";
function AppointmentDetails() {
  return (
    <Container>
        <Details />

        <AppointmentInfo />

    </Container>
  )
}

export default AppointmentDetails