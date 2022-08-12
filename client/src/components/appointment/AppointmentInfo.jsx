import React from "react";
import {
  AppointmentInfoContainer,
  Info,
  InfoRow,
  UpdateBtn,
} from "./components";
import FormateDateLocal from "../../helpers/FormateDateLocal";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Logic from "./logic";
import {ToastContainer, toast} from "react-toastify";


function AppointmentInfo({ data, setData, }) {
  
  const { appointment } = data;
  const { id } = useParams();

  const { approve } = Logic({ appointment, id, setData, toast });

  let [formattedDateNTime, setFormattedDateNTime] = useState(null);
  
  const [toggleChange, setToggleChange] = useState(false);

  useEffect(() => {
    setFormattedDateNTime(FormateDateLocal(`${appointment?.date_n_time}`));
  }, []);

  useEffect(() => {
    setFormattedDateNTime(`${appointment?.date_n_time.replace("T", " ")}`);
  }, [appointment?.date_n_time]);

  return (
    <AppointmentInfoContainer>
      <h2>Appointment Information</h2>
    <ToastContainer autoClose={1500} />
      {appointment?.status === "pending" && (
        <UpdateBtn>
          <i
            className={`editBtn ${
              toggleChange ? "fa-solid fa-floppy-disk" : "fa-solid fa-pencil"
            }`}
            onClick={() => setToggleChange((prev) => !prev)}
          ></i>
        </UpdateBtn>
      )}

      <InfoRow>
        <Info>
          <h4>Appointment type</h4>
          <span>{appointment?.appointment_type}</span>
        </Info>
      </InfoRow>

      <InfoRow>
        <Info>
          <h4>Date n Time </h4>

          {toggleChange ? (
            <input
              type={"datetime-local"}
              value={formattedDateNTime}
              min={`${FormateDateLocal(new Date().toISOString())}`}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  appointment: {
                    ...prev.appointment,
                    date_n_time: e.target.value,
                  },
                }))
              }
            />
          ) : (
            <span>
              {new Date(formattedDateNTime).toDateString()} at{" "}
              {new Date(formattedDateNTime).toLocaleTimeString()} &nbsp;{" "}
            </span>
          )}
        </Info>
      </InfoRow>

      <InfoRow>
        <Info>
          <h4>Additional details</h4>
          <label>{appointment?.additional_details}</label>
        </Info>
      </InfoRow>

      <InfoRow>
        <Info status={`${appointment?.status}`}>
          <h4>Status</h4>
          <p>{appointment?.status}</p>
        </Info>
      </InfoRow>

      {appointment?.status === "pending" && (
        <InfoRow style={{ justifyContent: "center" }}>
          <button className="reject">Reject</button>
          <button className="approve" onClick={approve}>
            Approve
          </button>
        </InfoRow>
      )}
    </AppointmentInfoContainer>
  );
}

export default AppointmentInfo;
