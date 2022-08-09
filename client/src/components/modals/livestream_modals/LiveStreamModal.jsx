import React, { useState, useEffect } from "react";
import {
  BackdropModal,
  LiveStreamModalContainer,
  ScheduleList,
  PaginationContainer,
  ButtonContainer,
} from "./components";
import LinkGenerator from "../../linkgenerator/LinkGenerator";
import Schedule from "./Schedule";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from "../../loader/Loader";
import GetDateToday from "../../../helpers/DateToday";
import Logic from "./Logic";

function LiveStreamModal({ setToggleModal }) {
  const [linkId, setLinkId] = useState("");
  const [loading, setLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const [appointmentId, setAppointmentId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/admin/generateVerifiedLink`, {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        });

        const { msg, success, linkId } = res.data;

        if ((!success, msg?.includes("session expired"))) {
          return window.location.reload();
        }

        setLinkId(linkId);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setScheduleList([]);
        const dateToday = GetDateToday();
        const res = await axios.get(
          `/api/admin/getScheduleToday/${dateToday}`,
          {
            headers: {
              userinfo: Cookies.get("userToken"),
            },
          }
        );

        const { msg, success, result } = res.data;

        if ((!success, msg?.includes("session expired"))) {
          return window.location.reload();
        }

        setScheduleList(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const { startStream } = Logic({});

  if (loading) return <Loader bg={`rgba(0, 0, 0, 0.548)`} />;

  return (
    <BackdropModal>
      <LiveStreamModalContainer>
        <h1>Start live stream</h1>

        <LinkGenerator linkId={linkId} setLinkId={setLinkId} />

        <h2>Schedules Today</h2>

        <ScheduleList>
          {scheduleList.length === 0 ? (
            <h2 style={{ color: "gray" }}>No Schedule today...</h2>
          ) : (
            scheduleList.map((schedule) => (
              <Schedule
                key={schedule.appointment.id}
                data={schedule}
                appointmentId={appointmentId}
                setAppointmentId={setAppointmentId}
              />
            ))
          )}
        </ScheduleList>

        <PaginationContainer>
          <i class="fa-solid fa-chevron-left left"></i> 1 / 2{" "}
          <i class="fa-solid fa-chevron-right right"></i>
        </PaginationContainer>

        <ButtonContainer>
          <button className="cancelBtn" onClick={() => setToggleModal(false)}>
            Cancel
          </button>
          <button className="goBtn" onClick={startStream}>
            Go
          </button>
        </ButtonContainer>
      </LiveStreamModalContainer>
    </BackdropModal>
  );
}

export default LiveStreamModal;
