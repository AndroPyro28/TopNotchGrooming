import React, { useEffect, memo } from "react";
import CommentData from "./CommentData";
import { CommentsContainer, CommentsList } from "./components";
import MessageBox from "./MessageBox";
import { useSelector } from "react-redux";
import { useState } from "react";
import Notification from "./Notification";

function Comments({comments, setComments}) {
  const state = useSelector((state) => state);
  const { socket } = state;

  useEffect(() => {
    if (!window.localStorage.getItem("render_once")) {
      return;
    }
    
    window.localStorage.removeItem("render_once");
    socket.on("sendMessageToRoom", ({ room, user, message }) => {
      setComments((prev) => [...prev, { user, content: "message", message }]);
    });

    socket.on("someOneJoined", ({ user }) => {
      setComments((prev) => [
        ...prev,
        {
          user,
          content: "notification",
          message: !user?.firstname ? 'A viewer has joined the event' : `${user?.firstname} ${user?.lastname} has joined the event`,
        },
      ]);
    });

    socket.on("someOneLeaved", ({ user }) => {
      
      setComments((prev) => [
        ...prev,
        {
          user,
          content: "notification",
          message: !user?.firstname ? 'A viewer has left the event' : `${user?.firstname} ${user?.lastname} has left the event`,
        },
      ]);
      
    });
  }, [socket]);

  useEffect(() => {
    const commentList = document.querySelector('.commentList');
    commentList.scrollTop = commentList.scrollHeight;
  }, [comments])

  return (
    <CommentsContainer>

      <CommentsList className="commentList">
        {comments.length === 0 ? (
          <label>You just joined say hi👋!</label>
        ) : (
          comments.map((comment, index) => {
            return comment.content == 'message' ? 
            <CommentData data={comment} key={index} /> 
            : <Notification data={comment} key={index} />
          }
            
          )
        )}

      </CommentsList>

      <MessageBox />
    </CommentsContainer>
  );
}

export default memo(Comments);
