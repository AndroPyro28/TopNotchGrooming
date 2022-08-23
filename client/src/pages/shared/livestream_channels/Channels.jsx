import React from "react";
import OtherLiveStream from "../../../components/livestream_channels/OtherLiveStream";
import { ChannelsContainer, GlobalStyles, StreamButton } from "./components";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LiveStreamModal from "../../../components/modals/livestream_modals/LiveStreamModal";
import {useSelector} from "react-redux";

function Channels() {
  const { pathname = "", search } = useLocation();
  const roomLink = search.replace('?redirect', 'room');
  const navigate = useNavigate();
  const {socket} = useSelector(state => state);

  if(roomLink) {
    window.localStorage.setItem('enter_stream', true)
    window.localStorage.setItem("render_once", true)
    setTimeout(() => navigate(`/public/liveStreamChannels/${roomLink}`), 0);
  }

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
