import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import CustomAxios from "../../../customer hooks/CustomAxios";

function Logic({ linkId, scheduleInfo, toast}) {
  const navigate = useNavigate();

  const startStream = async () => {
    try {
      if(!linkId || !scheduleInfo) {
        return toast('Select a schedule to start!', {type:"warning"})
      }

      const response = await CustomAxios({METHOD:"POST", uri:`/api/admin/startStreaming`, values:{linkId, scheduleInfo}})

      const {success, msg} = response;
      
      if(!success && msg?.includes("session expired")) {
        return toast('Something went wrong...', {type:"error"})
      }

      window.localStorage.setItem("enter_stream", true);
      window.localStorage.setItem("render_once", true)
      window.localStorage.setItem('isGroomer', true);
      navigate(`/admin/liveStreamChannels/room=${linkId}`);

    } catch (error) {
      console.error(error.message)
    }
  };

  return {
    startStream,
  };
}

export default Logic;
