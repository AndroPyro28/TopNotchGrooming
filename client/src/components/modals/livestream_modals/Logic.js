import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Logic({ linkId, scheduleInfo, toast}) {
  const navigate = useNavigate();

  const startStream = async () => {
    try {
      if(!linkId || !scheduleInfo) {
        return toast('Select a schedule to start!', {type:"warning"})
      }

      const res = await axios.post(`/api/admin/startStreaming`, {
        linkId,
        scheduleInfo
      }, {
        headers: {
          userinfo:Cookies.get('userToken')
        }
      });

      const {success, msg} = res.data;
      if(!success && msg?.includes("session expired")) {
        return toast('Something went wrong...', {type:"error"})
      }

      console.log(res.data);
      window.localStorage.setItem("enter_stream", true);
      window.localStorage.setItem("render_once", true)
      navigate(`/admin/liveStreamChannels/room=${linkId}`);

    } catch (error) {

    }
  };

  return {
    startStream,
  };
}

export default Logic;
