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
      const blob = new Blob(parts, { // parts are from mediaRecorder
        type:"video/webm"
      });

      const url = URL.createObjectURL(blob); //converting it to url

      const reader = new FileReader(); // converting it to dataUrl 
                                        //like data:video-base64-231-231asdasd203193asdasdasd9419239
      reader.readAsDataURL(url);

      reader.onloadend = () => {
        return reader.result;
      }

    } catch (error) {
      console.error("data", error.message);
    }
  };

  const leaveLiveStream = async () => {
    try {
      if (isAdmin) {
        setDisbaledButton(true);
        // mediaRecorder?.stop()
        const url = data();
        console.log(url)
        const res = await axios.patch(
          `/api/admin/appointmentCompleted/${currentRoom}`,
          { video_url: url },
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
        // window.location.assign("/admin");
      }
      // window.location.assign("/customer");
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
