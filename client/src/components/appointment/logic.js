import { useNavigate } from "react-router-dom";
import CustomAxios from "../../customer hooks/CustomAxios";
import { useParams } from "react-router-dom";

function Logic({ appointment, setData, toast, setAppointments, setLoading, customer, live_stream_data}) {
  const navigate = useNavigate()
  const { id } = useParams();
  
  const dateNtimeFormatter = (dateLocal) => {
    const date = new Date(dateLocal);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    let hour = date.getHours();
    const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const ampm = hour >= 12 ? "pm" : "am";
    hour = hour % 12 < 10 ? `${hour % 12 == 0 ? 12 : `0${hour % 12 }`}` : hour % 12;
    const newTime = `${hour}:${minutes} ${ampm}`;

    const newDate = `${year}-${month}-${day}`;
    return { newDate, newTime };
  };

  const updateAppointment = async (status) => {
    try {
      setData((prev) => ({
        ...prev,
        appointment: {
          ...prev.appointment,
          status: status,
        },
      }));
        toast(`Appointment ${status}`, { type: "info" });
      
      const response = await CustomAxios({METHOD:"PATCH", uri:`/api/admin/updateAppointment/${id}`, values:{appointment, customer, status }})
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false)
    }
  };

  const sortDataByShift = (shift, appointmentData) => {
    if(shift === 'all') {
      return appointmentData;
    }
    const shiftedData = appointmentData.filter(data => data.date_n_time.time.includes(shift))
    return shiftedData
  }

  const completeSchedule = async () => {
    try {
      setLoading(true)
      const result = await CustomAxios({METHOD:"PATCH", uri:`/api/admin/markComplete/${id}`});

      const {msg, success} = result;

      if(msg?.includes("session expired") && !success) {
        return window.location.reload();
      }

      setData((prev) => ({
        ...prev,
        appointment: {
          ...prev.appointment,
          status: 'completed',
        },
      }));

      return toast(msg, {type:"success"});
    } catch (error) {
      console.error(error.message)
      return toast(error.message, {type:"error"});

    } finally {
      setLoading(false)
    }
  }

  const deleteAppointment = async () => {
    try {
      const result = await CustomAxios({METHOD: "DELETE", uri:`/api/admin/deleteAppointment/${id}=${live_stream_data.id}`,});
    } catch (error) {
      console.error(error.message)
    }
  }

  const updateScheduleByCustomer = async () => {
    try {
      const result = await CustomAxios({METHOD: "PATCH", uri:`/api/customer/updateSchedule/${id}`, values:{appointment}});
    } catch (error) {
      console.error(error)
    }
  }

  return {
    dateNtimeFormatter,
    updateAppointment,
    sortDataByShift,
    completeSchedule,
    deleteAppointment,
    updateScheduleByCustomer
  };
}

export default Logic;
