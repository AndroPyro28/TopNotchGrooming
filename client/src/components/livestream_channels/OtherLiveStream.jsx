import React from "react";
import {
OtherLiveStreamsWrapper,
OtherLiveStreamsContainer,
} from "./components"
import Room from "./Room";
function OtherLiveStreamComponent() {
  return (
    <OtherLiveStreamsWrapper>
      <h3>
        {" "}
        <i class="fa-solid fa-video"></i> Other Streams
      </h3>

      <OtherLiveStreamsContainer>

        <Room />
        <Room />
        <Room />
        <Room />
        <Room />

      </OtherLiveStreamsContainer>
    </OtherLiveStreamsWrapper>
  );
}

export default OtherLiveStreamComponent;
