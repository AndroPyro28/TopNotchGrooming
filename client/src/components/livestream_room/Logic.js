import Cookies from "js-cookie";
import axios from "axios";

function Logic({
  isFullScreen,
  setIsFullScreen,
  setDisplayBoard,
  currentRoom,
  isAdmin,
  setDisbaledButton,
  parts,
  mediaRecorder,
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
  };

  const data = () => {
    try {
    } catch (error) {
      console.error("data", error.message);
    }
  };

  const leaveLiveStream = async () => {
    try {
      if (isAdmin) {
        mediaRecorder?.stop();
        const blob = new Blob(parts, {
          // parts are from mediaRecorder
          type: "video/webm",
        });
        const reader = new window.FileReader(); // converting it to dataUrl

        reader.readAsDataURL(blob);

        reader.onloadend = async () => {
          setDisbaledButton(true);
          const res = await axios.patch(
            `/api/admin/appointmentCompleted/${currentRoom}`,
            { video_url: reader.result },
            {
              headers: {
                userinfo: Cookies.get("userToken"),
              },
            }
          );

          const { success, msg } = res.data;
          if (!success && msg?.includes("session expired")) {
            return window.location.assign("/");
          }
          window.location.assign("/admin");
        };
      }
      window.location.assign("/customer");
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    configureScreen,
    displayBoard,
    leaveLiveStream,
  };
}

export default Logic;
