import React from "react";
import { AppointmentInfoContainer, Info, InfoRow } from "./components";
import GetDateToday from "../../helpers/DateToday"
import FormateDateLocal from "../../helpers/FormateDateLocal";
function AppointmentInfo() {
  return (
    <AppointmentInfoContainer>
      <h2>Appointment Information</h2>

      <InfoRow>
        <Info>
          <h4>Appointment type</h4>
          <span>Grooming</span>
        </Info>

        <Info>
          <h4>Live stream</h4>
          <span>Public</span>
        </Info>
      </InfoRow>

      <InfoRow>
        <Info>
          <h4>Date n Time</h4>
          <span>
            {new Date(FormateDateLocal('2022-07-11 14:00:00.000')).toDateString()} at{" "} {/**comming from */}
            {new Date("2022-07-11 14:00:00").toLocaleTimeString()}{" "}
            &nbsp; <i className="fa-solid fa-pencil editBtn"></i>
          </span>
          
          <input type={'datetime-local'} value=" " min={`${FormateDateLocal(new Date().toISOString())}`} />

          </Info>
      </InfoRow>

      <InfoRow>
        <Info>
          <h4>Additional details</h4>
          <label>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            rerum temporibus officia culpa dignissimos maxime? Error sint, ipsum
            autem quos illo dolorum debitis corrupti quisquam maiores nobis odit
            ad consectetur?
          </label>
        </Info>
      </InfoRow>

      <InfoRow>
        <Info status={"pending"} >
          <h4>Status</h4>
          <p>pending</p>
        </Info>
      </InfoRow>

      <InfoRow style={{justifyContent:"center"}}>
        <button className="reject">Reject</button>
        <button className="approve">Approve</button>
      </InfoRow>
    </AppointmentInfoContainer>
  );
}

export default AppointmentInfo;
