import CustomAxios from "../../customer hooks/CustomAxios";

function Logic({
  isFullScreen,
  setIsFullScreen,
  setDisplayBoard,
  currentRoom,
  isAdmin,
  setDisbaledButton,
  parts,
  mediaRecorder,
  socket,
  currentUser,
  setDisplayBoardModal,
}) {
  
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
    setDisplayBoard((prev) => !prev);
    setDisplayBoardModal((prev) => !prev);
  };

  const leaveLiveStream = async () => {
    try {
      if (isAdmin) {
        mediaRecorder?.stop();
        const blob = new Blob(parts, {
          type: "video/webm",
        });
        const reader = new window.FileReader(); // converting it to dataUrl

        reader.readAsDataURL(blob);

        reader.onloadend = async () => {
          
          setDisbaledButton(true);
          const response = await CustomAxios({
            METHOD: "PATCH",
            uri: `/api/admin/appointmentCompleted/${currentRoom}`,
            values: { video_url: reader.result },
          });

          const { success, msg } = response;

          if (!success && msg?.includes("session expired")) {
            return window.location.assign("/");
          }
          socket.emit("leaveRoom", { currentUser, currentRoom });
           setTimeout(() => window.location.assign("/admin") , 0)
        };
      } else {
        socket.emit("leaveRoom", { currentUser, currentRoom });
        window.location.assign("/customer");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  return {
    configureScreen,
    displayBoard,
    leaveLiveStream,
  };
}

export default Logic;
