import React, { useEffect } from 'react'
import Board from '../../../components/livestream_room/Board';
import Video from '../../../components/livestream_room/Video';
import {LiveStreamRoomContainer} from "./components";
import { useState } from 'react';
import BoardModal from '../../../components/livestream_room/BoardModal';
// import Feedback from '../../../components/feedback/Feedback'
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
function LiveStreamRoom() {

// const { feedback } = useSelector((state) => state);
const [displayBoard, setDisplayBoard] = useState(true)
const [displayBoardModal, setDisplayBoardModal] = useState(false)
const [comments, setComments] = useState([])
const {pathname} = useLocation()
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