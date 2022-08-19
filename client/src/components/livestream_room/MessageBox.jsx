import React from "react";
import { MessageBoxContainer } from "./components";
import { useSelector } from "react-redux";
import { useState, memo} from "react";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import io from "socket.io-client"
import Cookies from 'js-cookie';

function MessageBox() {
  const {pathname} = useLocation();

  const state = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const room = pathname.split("/room=")[1];
  const {socket} = state;
  const { currentUser } = state.user;
  const isAuth = !pathname?.includes('public');
  const sendMessage = (e) => {
    try {
      if(!message || !isAuth) {
        return;
      }

      socket?.emit('sendMessage', {user:currentUser, message, room});
      setMessage("")

    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <MessageBoxContainer>
      <input
        type={"text"}
        value={message}
        disabled={!isAuth}
        onChange={(e) => setMessage((prev) => e.target.value)}
        placeholder={isAuth ? "Share your thoughts..." : "You are not allowed to comment"}
        onKeyDown={(e) => e.key === "Enter" && sendMessage(e)}
      />
      <i class="fa-solid fa-paper-plane" onClick={sendMessage}  ></i>
    </MessageBoxContainer>
  );
}

export default memo(MessageBox);