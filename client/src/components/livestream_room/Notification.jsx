import React from "react";
import { NotificationContainer } from "./components";

function Notification({ data }) {
   const { message } = data;

  return (
    <NotificationContainer >
      {
        message
      }
    </NotificationContainer>
  );
}

export default Notification;
