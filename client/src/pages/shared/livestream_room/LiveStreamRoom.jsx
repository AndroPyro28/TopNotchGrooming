import React, { useEffect } from 'react'
import Board from '../../../components/livestream_room/Board';
import Video from '../../../components/livestream_room/Video';
import {LiveStreamRoomContainer, GlobalStyles} from "./components";
import { useState } from 'react';
import BoardModal from '../../../components/livestream_room/BoardModal';
import Loader from '../../../components/loader/Loader';

function LiveStreamRoom() {
  
const [displayBoard, setDisplayBoard] = useState(true)
const [displayBoardModal, setDisplayBoardModal] = useState(false)
const [comments, setComments] = useState([])

  return (
    <LiveStreamRoomContainer id="liveStreamRoomContainer" displayBoard={displayBoard}>

        <Video setDisplayBoard={setDisplayBoard} setDisplayBoardModal={setDisplayBoardModal} displayBoard={displayBoard} />

        {
          displayBoardModal && <BoardModal displayBoard={displayBoardModal} setDisplayBoardModal={setDisplayBoardModal} comments={comments} setComments={setComments} />
        }
          
          <Board displayBoard={displayBoard} setComments={setComments} comments={comments} />
          
    </LiveStreamRoomContainer>
  )
}

export default LiveStreamRoom