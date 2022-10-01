const Get_Date_N_Time = (dateLocal) => {
    const date = new Date(dateLocal);
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
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
    const ampm = hour + 5 >= 12 ? "pm" : "am";
    hour = hour % 12 < 10 ? `${hour % 12 == 0 ? 12 : `0${hour % 12 }`}` : hour % 12;
    const newTime = `${hour}:${minutes} ${ampm}`;

    const newDate = `${year}-${month}-${day}`; // utc date default
    return { newDate, newTime };
  };
  export default Get_Date_N_Time ;