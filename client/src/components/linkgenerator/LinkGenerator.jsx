import React, { useState } from "react";
import { LinkInput, LinkGeneratorContainer, Notify} from "./components";
function LinkGenerator({ linkId, setLinkId }) {
  
  const [isClicked, setIsClicked] = useState(false);
  const streamUrl = `https://topnotchgrooming-malolos.firebaseapp.com/public/liveStreamChannels?redirect=${linkId}`;

  const clickCopyClip = () => {
    setIsClicked(true);
    navigator.clipboard.writeText(streamUrl);
    setTimeout(_ => setIsClicked(false), 2000)
  }

  return (
    <LinkGeneratorContainer>
      <label>Room link</label>
      <LinkInput>
        <input
          value={streamUrl}
          disabled={true}
        />
        <i class="fa-solid fa-copy copyClip" onClick={clickCopyClip}></i>
      </LinkInput>
      {isClicked && <Notify>Link Copied!</Notify>}
    </LinkGeneratorContainer>
  );
}

export default LinkGenerator;
