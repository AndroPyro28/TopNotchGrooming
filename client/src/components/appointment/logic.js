import CustomAxios from "../../customer hooks/CustomAxios";

function Logic({ appointment, id, setData, toast, setAppointments, setLoading}) {
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

  const approve = async () => {
    try {
      setData((prev) => ({
        ...prev,
        appointment: {
          ...prev.appointment,
          status: "approved",
        },
      }));
      toast("Appointment approved", { type: "success" });
      const response = await CustomAxios({METHOD:"PATCH", uri:`/api/admin/approveAppointment/${id}`, values:{appointment}})
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

  return {
    dateNtimeFormatter,
    approve,
    sortDataByShift,
    completeSchedule
  };
}

export default Logic;
