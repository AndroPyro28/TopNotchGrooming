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
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import CustomAxios from "../../../customer hooks/CustomAxios";

function LiveStreamModal({ setToggleModal }) {
  const [linkId, setLinkId] = useState("");
  const [loading, setLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const [scheduleInfo, setScheduleInfo] = useState(null);
  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => {
      try {
        const response = await CustomAxios({METHOD:"GET", uri:`/api/admin/generateVerifiedLink`})

        const { msg, success, linkId } = response;

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
        const response = await CustomAxios({METHOD:"GET", uri:`/api/admin/getScheduleToday/${dateToday}`})
        

        const { msg, success, result } = response

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

  const { startStream } = Logic({linkId, scheduleInfo, toast});

  if (loading) return <Loader bg={`rgba(0, 0, 0, 0.548)`} />;

  return (
    <BackdropModal>
      <ToastContainer autoClose={2000} />
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
                scheduleInfo={scheduleInfo}
                setScheduleInfo={setScheduleInfo}
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
