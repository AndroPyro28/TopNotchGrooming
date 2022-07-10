import React from "react";

function Logic() {
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
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 < 10 ? `0${hour % 12}` : hour % 12;
    const newTime = `${hour}:${minutes} ${ampm}`;
    console.log(newTime)
    const newDate = `${year}-${month}-${day}`;
    return {newDate, newTime};
  };

  return {
    dateNtimeFormatter,
  };
}

export default Logic;
