import { useNavigate } from "react-router-dom";

function Logic({linkId}) {
  const navigate = useNavigate()
  const startStream = () => {
    window.localStorage.setItem('enter_stream', true)
    navigate(`/admin/liveStreamChannels/room=${linkId}`)
  };

  return {
    startStream,
  };
}

export default Logic;
