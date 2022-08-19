import React from "react";
import { NotificationContainer } from "./components";

function Notification({ data }) {
   const { message } = data;

  //  if(message.includes('undefined')) {
  //   message = message.replace('undefined undefined', 'Someone')
  //  }

  return (
    <NotificationContainer >
      {
        message
      }
    </NotificationContainer>
  );
}

export default Notification;
