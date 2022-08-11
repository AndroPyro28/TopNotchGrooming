import React from "react";
import { useEffect, memo } from "react";
import { useState, useRef } from "react";
import { VideoContainer, Options } from "./components";
import { useLocation } from "react-router-dom";
import Logic from "./Logic";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Peer from "simple-peer";

function Video({ setDisplayBoard, displayBoard: displayBoardData }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [stream, setStream] = useState();
  const videoRef = useRef();
  const { socket, user } = useSelector((state) => state);
  const { currentUser } = user;
  const { pathname } = useLocation();
  const isAdmin = pathname?.includes("admin");
  const currentRoom = pathname.split("/room=")[1];
  const url = pathname.split("/room=")[0];

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          setStream(stream);
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    try {
      if (!socket.emit) {
        return window.location.assign(url);
      }

      const headers = {
        userinfo: Cookies.get("userToken"),
      };

      if (!window.localStorage.getItem("enter_stream")) {
        return;
      }
      window.localStorage.removeItem("enter_stream");

      // for observer joining
      socket?.emit("joinRoom", {
        room: currentRoom,
        headers,
        userId: currentUser?.id,
      });

      socket?.on("youJoined", ({ userId, room }) => {
        if (!isAdmin && userId == currentUser?.id && room == currentRoom) {

          const peer = new Peer({
            initiator: true,
            trickle: false,
            // stream: stream,
          });
          peer.on("signal", (data) => {
            console.log("obser peer and signal", peer, data);
            socket?.emit("sendObserverSignalToAdmin", { data, userId, room });
          });

          peer.on("stream", (stream) => {
            videoRef.current.srcObject = stream;
            console.log("admin stream", stream);
          });
          socket.on("sendStreamToObserver", ({ data, userId, room }) => {
            if(!isAdmin && userId == currentUser?.id && room == currentRoom) {
              console.log('admin signal', data);
              peer.signal(data);
            }
          });
        }
      });

      // for admin
      socket?.on("sendStreamToAdmin", ({ data, userId, room }) => {
        if (isAdmin) {
          const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream,
          });
          peer.on("signal", (data) => {
            console.log("admin peer and signal", peer, data);

            socket?.emit("sendAdminSignalToObserver", { data, userId, room });
          });

          peer.on("stream", (stream) => {
            console.log("observer stream", stream);
          });

          console.log("observer signal", data);
          peer?.signal(data);
        }
      });
    } catch (error) {
      console.error("error on peer", error.message);
    }
  }, []);

  const { configureScreen, displayBoard } = Logic({
    isFullScreen,
    setIsFullScreen,
    setDisplayBoard,
  });

  return (
    <VideoContainer isDisplayBoard={displayBoardData}>
      {isAdmin && <video playsInline muted ref={videoRef} autoPlay />}

      {!isAdmin && <video playsInline ref={videoRef} autoPlay />}

      <Options>
        {displayBoardData ? (
          <i
            class="fa-solid fa-comment-slash displayBoard"
            onClick={displayBoard}
          ></i>
        ) : (
          <i
            class="fa-solid fa-comment displayBoard"
            onClick={displayBoard}
          ></i>
        )}

        {/* <i class="fa-solid fa-camera-rotate rotateCamera"></i> */}
        <i
          className="fa-solid fa-right-from-bracket leave"
          onClick={() => window.location.assign(url)}
        ></i>

        {isFullScreen ? (
          <i
            class="fa-solid fa-compress minimizescreen"
            onClick={configureScreen}
          ></i>
        ) : (
          <i
            class="fa-solid fa-expand fullscreen"
            onClick={configureScreen}
          ></i>
        )}
      </Options>
    </VideoContainer>
  );
}

export default Video;
