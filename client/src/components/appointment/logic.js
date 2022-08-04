import axios from "axios";
import Cookies from "js-cookie";

function Logic({ appointment, id, setData, toast }) {
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
    hour = hour % 12 < 10 ? `0${hour % 12}` : hour % 12;
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
      const res = await axios.patch(
        `/api/admin/approveAppointment/${id}`,
        {
          appointment,
        },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    dateNtimeFormatter,
    approve,
  };
}

export default Logic;
