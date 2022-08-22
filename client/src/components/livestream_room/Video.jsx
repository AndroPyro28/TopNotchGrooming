import React from "react";
import { useEffect, memo } from "react";
import { useState, useRef } from "react";
import { VideoContainer, Options } from "./components";
import { useLocation } from "react-router-dom";
import Logic from "./Logic";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Peer from "simple-peer";

function Video({ setDisplayBoard, setDisplayBoardModal, displayBoard: displayBoardData }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [stream, setStream] = useState();
  const videoRef = useRef();
  const { socket, user } = useSelector((state) => state);
  const { currentUser } = user;
  const { pathname } = useLocation();
  const isAdmin = pathname?.includes("admin");
  const currentRoom = pathname.split("/room=")[1];
  const url = pathname.split("/room=")[0];
  const [disabledButton, setDisbaledButton] = useState(false);
  const [parts, setParts] = useState([]);
  let mediaRecorder;

  useEffect(() => {
    (async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (stream) {
        //  setStream(stream);
        if (videoRef.current && isAdmin) {
          videoRef.current.srcObject = stream;
          mediaRecorder = new MediaRecorder(stream);

          mediaRecorder.start(1000);

          mediaRecorder.ondataavailable = (e) => {
            parts.push(e.data);
            setParts((prev) => [...prev, e.data]);
          };
        }
      }

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
          userId: currentUser?.id ?? socket?.id,
        });
  
        socket?.on("youJoined", ({ userId, room }) => {
          if (!isAdmin && userId == currentUser?.id && room == currentRoom || !isAdmin && userId == socket?.id && room == currentRoom) {
            const peer = new Peer({
              initiator: true,
              trickle: false,
              stream: stream,
            });
            peer.on("signal", (data) => {
              socket?.emit("sendObserverSignalToAdmin", { data, userId, room });
            });
  
            peer.on("stream", (stream) => {
              videoRef.current.srcObject = stream;
            });
  
            socket.on("sendStreamToObserver", ({ data, userId, room }) => {
              if (
                !isAdmin &&
                userId == currentUser?.id &&
                room == currentRoom
                ||
                !isAdmin &&
                userId == socket?.id &&
                room == currentRoom
              ) {
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
              socket?.emit("sendAdminSignalToObserver", { data, userId, room });
            });
  
            peer.on("stream", (stream) => {
  
            });
  
            peer.signal(data);
          }
        });
      } catch (error) {
        console.error("error on peer", error.message);
      } finally {
      }
    })();
  }, []);

  const { configureScreen, displayBoard, leaveLiveStream } = Logic({
    isFullScreen,
    setIsFullScreen,
    setDisplayBoard,
    currentRoom,
    isAdmin,
    setDisbaledButton,
    parts,
    mediaRecorder,
    socket,
    currentUser,
    setDisplayBoardModal
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

        {displayBoardData ? (
          <i
            class="fa-solid fa-comment-slash displayBoardModal"
            onClick={displayBoard}
          ></i>
        ) : (
          <i
            class="fa-solid fa-comment displayBoardModal"
            onClick={displayBoard}
          ></i>
        )}

        {/* <i class="fa-solid fa-camera-rotate rotateCamera"></i> */}

        <i
          className="fa-solid fa-right-from-bracket leave"
          onClick={leaveLiveStream}
          disabled={disabledButton}
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
