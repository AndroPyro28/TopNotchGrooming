import React from "react";
import { OtherLiveStream, OtherLiveStreamInfo, OwnerName } from "./components";
function Room() {
  return (
    <OtherLiveStream>
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
