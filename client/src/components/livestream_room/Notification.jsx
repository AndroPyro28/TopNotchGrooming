import React from "react";
import { NotificationContainer } from "./components";
import {useSelector} from "react-redux";
function Notification({ data }) {
  const {currentUser} = useSelector(state => state?.user)
   const { user } = data;

  return (
    <NotificationContainer >
      {
        currentUser?.id == user?.id ? 'You joined the experience.':
        `${user?.firstname} has joined the experience.`
      }
      
    </NotificationContainer>
  );
}

export default Notification;
