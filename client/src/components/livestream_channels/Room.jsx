import React from "react";
import { OtherLiveStream, OtherLiveStreamInfo, OwnerName } from "./components";
import { useNavigate, useLocation } from "react-router-dom";

function Room() {

  const { pathname } = useLocation();
  
  const navigate = useNavigate();

  return (
    <OtherLiveStream onClick={() => navigate(`${pathname}/room=asdasda`)}>
      <span class="liveStream__tag">LIVE</span>
      <span class="liveStream__viewers">
        {" "}
        <i class="fa-solid fa-eye"></i> 223
      </span>
      <img
        src="/images/petHaircutVidSample.jpg"
        class="other__liveStream__video"
      />
      <OtherLiveStreamInfo>
        <img src="/images/nicePicture.jpg" class="ownerProfile" />
        <OwnerName>
          Andro Eugenio <small>is live...</small>
        </OwnerName>
      </OtherLiveStreamInfo>
    </OtherLiveStream>
  );
}

export default Room;
