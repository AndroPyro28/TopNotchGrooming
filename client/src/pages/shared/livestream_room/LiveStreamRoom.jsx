import React from 'react'
import ChatBox from '../../../components/livestream_room/ChatBox';
import Video from '../../../components/livestream_room/Video';
import {LiveStreamRoomContainer} from "./components";
import {useLocation} from "react-router-dom";

function LiveStreamRoom() {
const {pathname} = useLocation();
  return (
    <LiveStreamRoomContainer>
      <Video />
      <ChatBox />
    </LiveStreamRoomContainer>
  )
}

export default LiveStreamRoom