import React from "react";
import {
  YourLiveStreamContainer,
  LiveStreamVideoContainer,
  LiveStreamInfo,
  LiveStreamHeader,
  UserInfo,
  LiveStreamDetails,
} from "./components";

function MyLiveStream() {
  
  return (
    <>
      <h3 className="youLiveStreamH3"><i class="fa-solid fa-clapperboard "></i> My Live stream</h3>
      <YourLiveStreamContainer>
        <LiveStreamVideoContainer>
          <span class="live__tag">LIVE</span>
          <span class="live__viewers">
            {" "}
            <i class="fa-solid fa-eye"></i> 223
          </span>
          <img src="/images/petHaircutVidSample.jpg" />
        </LiveStreamVideoContainer>

        <LiveStreamInfo>
          <LiveStreamHeader>
            <img src="/images/groomer.jpg" class="profile" />
            <UserInfo>
              <span class="username">Groomer Laurence</span>
              <span class="tag">
                <i class="fa-solid fa-video"></i> Grooming
              </span>
            </UserInfo>
          </LiveStreamHeader>

          <LiveStreamDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            pariatur repellendus omnis sed laborum quidem, dolor nihil esse. Sit
            quidem consequuntur sequi neque voluptatem dolorum! Molestiae ea
            magni laborum, quod perspiciatis iste labore fugiat reiciendis ipsum
            ex accusamus excepturi aut accusantium tempore perferendis qui vitae
            at doloremque. Dolores, impedit omnis!
          </LiveStreamDetails>
        </LiveStreamInfo>
      </YourLiveStreamContainer>
      <div class="lineBreak"></div>
    </>
  );
}

export default MyLiveStream;
