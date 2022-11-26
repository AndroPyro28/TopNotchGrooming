import React from 'react'
import { useState } from 'react';
import { useEffect, useTransition } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import AppointmentInfo from '../../../components/appointment/AppointmentInfo';
import Details from '../../../components/appointment/Details';
import CustomAxios from '../../../customer hooks/CustomAxios';
import {Container} from "./components";
import Loader from "../../../components/loader/Loader";
function AppointmentDetails() {

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
       
        const response = await CustomAxios({METHOD:"GET", uri:`/api/admin/getAppointment/${id}`});
        const {success, msg} = response

        if(!success && msg?.includes('session expired')) {
          return window.location.reload();
        }
        const {result} = response
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
      {
        loading && <Loader bg={"rgba(0, 0, 0, 0.548)"} />
      }
        <Details data={details}/>
        <AppointmentInfo data={details} setData={setDetails} setLoading={setLoading} />
    </Container>
  )
}

export default AppointmentDetails