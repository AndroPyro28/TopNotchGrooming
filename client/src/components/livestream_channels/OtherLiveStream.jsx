import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  OtherLiveStreamsWrapper,
  OtherLiveStreamsContainer,
} from "./components";
import { useLocation } from "react-router-dom";
import Room from "./Room";

function OtherLiveStreamComponent() {
  const { socket, user } = useSelector((state) => state);
  const [rooms, setRooms] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (socket?.disconnected || socket?.connected) {
      socket?.emit("getAllRooms", (rooms) => {
        setRooms(rooms);
      });
    }
  }, [pathname, socket, user]);

  return (
    <OtherLiveStreamsWrapper>
      {rooms?.length > 0 ? (
        <h3>
          <i class="fa-solid fa-video"></i> Live Streams{" "}
        </h3>
      ) : (
        <h1 style={{ color: "white", textAlign: "center" }}>No Events found</h1>
      )}
      <OtherLiveStreamsContainer>
        {
        rooms.length > 0 &&
          rooms?.map((data) => {
            return <Room key={data.roomLink} data={data} />;
          })
        }

      </OtherLiveStreamsContainer>
    </OtherLiveStreamsWrapper>
  );
}

export default OtherLiveStreamComponent;
