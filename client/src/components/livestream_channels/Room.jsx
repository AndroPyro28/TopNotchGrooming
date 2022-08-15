import React from "react";
import { OtherLiveStream, OtherLiveStreamInfo, OwnerName } from "./components";
import { useNavigate, useLocation } from "react-router-dom";

function Room({data}) {
  const { pathname } = useLocation();

  const {roomInfo, ownerInfo, adminInfo} = data;
  
  const navigate = useNavigate();
  const redirect = () => {
    window.localStorage.setItem('enter_stream', true)
    window.localStorage.setItem("render_once", true)
    navigate(`${pathname}/room=${roomInfo.room_link}`)
  }
  return (
    <OtherLiveStream onClick={redirect}>
      <span class="liveStream__tag">LIVE</span>
      <span class="liveStream__viewers">
        <i class="fa-solid fa-eye"></i> {roomInfo.attendees}
      </span>
      <img
        src={roomInfo.pet_image}
        class="other__liveStream__video"
      />
      <OtherLiveStreamInfo>
        <img src={ownerInfo.profile_image_url} class="ownerProfile" />
        <OwnerName>
          {ownerInfo.firstname} {ownerInfo.lastname} <small>is live...</small>
        </OwnerName>
      </OtherLiveStreamInfo>
    </OtherLiveStream>
  );
}

export default Room;
