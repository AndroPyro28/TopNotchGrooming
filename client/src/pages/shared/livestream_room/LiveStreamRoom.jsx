import React from 'react'
import Board from '../../../components/livestream_room/Board';
import Video from '../../../components/livestream_room/Video';
import {LiveStreamRoomContainer} from "./components";
import {useLocation, useNavigate} from "react-router-dom";
import { useState } from 'react';

function LiveStreamRoom() {

const {pathname} = useLocation();
const [displayBoard, setDisplayBoard] = useState(true);
 

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