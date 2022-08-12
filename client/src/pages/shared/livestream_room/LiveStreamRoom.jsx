import React from 'react'
import Board from '../../../components/livestream_room/Board';
import Video from '../../../components/livestream_room/Video';
import {LiveStreamRoomContainer} from "./components";
import {useLocation, useNavigate} from "react-router-dom";
import { useState } from 'react';
import {useSelector} from "react-redux";
import { useEffect } from 'react';

function LiveStreamRoom() {
const {socket} = useSelector(state => state);
const {pathname} = useLocation();
const [displayBoard, setDisplayBoard] = useState(true)

function preventBack() { window.history.forward(); }  
    setTimeout(preventBack, 0); 

  return (
    <LiveStreamRoomContainer id="liveStreamRoomContainer" displayBoard={displayBoard}>
        
      <Video setDisplayBoard={setDisplayBoard} displayBoard={displayBoard} />
        {
          displayBoard && <Board />
        }
      
    </LiveStreamRoomContainer>
  )
}

export default LiveStreamRoom