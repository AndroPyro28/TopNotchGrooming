import React from 'react'
import { Container } from '../../adminPages/AppointmentDetail/components'
import AppointmentInfo from '../../../components/appointment/AppointmentInfo';
import Details from '../../../components/appointment/Details';
import Loader from "../../../components/loader/Loader";
import { useState, useEffect } from 'react';
import CustomAxios from '../../../customer hooks/CustomAxios';
import {useParams, useNavigate} from 'react-router-dom';
    

function Schedule() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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

export default Schedule