import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { VideoContainer, Options } from "./components";
import {useLocation} from "react-router-dom";
import Logic from "./Logic";
import {useSelector} from "react-redux";
import Cookies from "js-cookie";
import Peer from "simple-peer"
function Video({ setDisplayBoard, displayBoard: displayBoardData }) {

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [stream, setStream] = useState();
  const adminVideoRef = useRef();
  const {socket} = useSelector(state => state);

  useEffect(() => {

    if(pathname?.includes('admin')) {
      navigator.mediaDevices.getUserMedia({video:true, audio:true})
    .then(stream => {
        setStream(stream);
        if(adminVideoRef.current) {
          adminVideoRef.current.srcObject = stream;
        }
      });
    }
    
  }, []);

  const {pathname} = useLocation();

  const currentRoom = pathname.split('=')[1];
  const isAdmin = pathname?.includes('admin');

  useEffect(() => {
    if(!socket.emit) {
      return window.history.back()
    }
    const headers = {
      userinfo: Cookies.get('userToken')
    }

    socket?.emit('joinRoom', {
      room: currentRoom,
      headers
    });

    socket?.on('someOneHasJoin', ({room}) => {
      if(isAdmin && currentRoom == room) {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream
        });
         console.log('admin peer', peer)
        peer.on('signal', data => {
        })
      }
    })

  }, [socket, pathname])

  const { configureScreen, displayBoard } = Logic({
    isFullScreen,
    setIsFullScreen,
    setDisplayBoard,
  });

  return (
    <VideoContainer isDisplayBoard={displayBoardData}>

      {
        stream && pathname?.includes('admin') && <video playsInline muted ref={adminVideoRef} autoPlay />
      }

      {
        !pathname?.includes('admin') && <video playsInline muted ref={adminVideoRef} autoPlay />
      }


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
        <i className="fa-solid fa-right-from-bracket leave"></i>

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
