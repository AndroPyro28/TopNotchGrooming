import React from "react";
import MyLiveStream from "../../../components/livestream_channels/MyLiveStream";
import OtherLiveStream from "../../../components/livestream_channels/OtherLiveStream";
import { ChannelsContainer, GlobalStyles, StreamButton } from "./components";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import LiveStreamModal from "../../../components/modals/livestream_modals/LiveStreamModal";

function Channels() {
  const { pathname = "" } = useLocation();
  let userType = "";
  
  if (Cookies?.get("userToken")?.length > 0 || Cookies?.get("userToken")) {
    const { userType: user = "" } = JSON?.parse(Cookies?.get("userToken"));
    userType = user;
  }

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <ChannelsContainer>
      {pathname?.includes("admin") && userType?.includes("admin") && (
        <StreamButton onClick={() => setToggleModal(true)}>
          <i class="fa-solid fa-video"></i>
          <span>start a live stream</span>
        </StreamButton>
      )}

      {toggleModal && <LiveStreamModal setToggleModal={setToggleModal} />}

      <GlobalStyles />

      <OtherLiveStream />
    </ChannelsContainer>
  );
}

export default Channels;
