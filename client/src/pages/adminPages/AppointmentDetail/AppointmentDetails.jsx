import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { useState } from 'react';
import { useEffect, useTransition } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentInfo from '../../../components/appointment/AppointmentInfo';
import Details from '../../../components/appointment/Details';
import {Container} from "./components";

function AppointmentDetails() {

  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await axios.get(`/api/admin/getAppointment/${id}`, {
          headers: {
            userinfo: Cookies.get('userToken')
          }
        });
        const {success, msg} = res.data;
        if(!success && msg?.includes('session expired')) {
          return window.location.reload();
        }

        const {result} = res.data;
        setDetails(result);

      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  return (
    <Container>

        <Details data={details}/>
        <AppointmentInfo data={details} setData={setDetails} />

    </Container>
  )
}

export default AppointmentDetails