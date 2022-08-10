import React from "react";
import { MessageBoxContainer } from "./components";
function MessageBox() {
  return (
    <MessageBoxContainer>
      <input type={"text"} placeholder="Share your thoughts..." />
      <i class="fa-solid fa-paper-plane"></i>
    </MessageBoxContainer>
  );
}

export default MessageBox;
