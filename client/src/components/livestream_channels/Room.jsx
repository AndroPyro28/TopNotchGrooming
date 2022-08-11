import React from "react";
import { OtherLiveStream, OtherLiveStreamInfo, OwnerName } from "./components";
import { useNavigate, useLocation } from "react-router-dom";

function Room({data}) {
  const { pathname } = useLocation();
  
  const navigate = useNavigate();
  const redirect = () => {
    window.localStorage.setItem('enter_stream', true)
    navigate(`${pathname}/room=${data.roomLink}`)
  }
  return (
    <OtherLiveStream onClick={redirect}>
      <span class="liveStream__tag">LIVE</span>
      <span class="liveStream__viewers">
        {" "}
        <i class="fa-solid fa-eye"></i> {data?.users?.length}
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
