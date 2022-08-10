

function Logic({ isFullScreen, setIsFullScreen, setDisplayBoard }) {
  const configureScreen = () => {
    const liveStreamRoomContainer = document.querySelector(
      "#liveStreamRoomContainer"
    );

    if (!isFullScreen) {
      liveStreamRoomContainer
        .requestFullscreen({ navigationUI: "show" })
        .then(() => setIsFullScreen(true));
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const displayBoard = () => {
    setDisplayBoard(prev => !prev)
  };

  return {
    configureScreen,
    displayBoard
  };
}

export default Logic;
