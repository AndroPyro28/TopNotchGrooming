import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import { FeedbackListContainer } from "../modals/admin_modals/feeback/components";
import { FeedbackList } from "./components";
import Feedbackdata from "./Feedbackdata";

function Feedback({setOpenFeedbackModal}) {

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      try {
        setFeedbacks([])
        setLoading(true)
        const result = await CustomAxios({
          METHOD: "GET",
          uri: "/api/admin/getAllFeedback",
        });
        console.log(result);
        const {msg, success, data} = result;

        if(msg?.includes('session expired') && !success) {
          return window.location.reload();
        }

        setFeedbacks(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  const fetchFeedbacks = loading ? 
  <h2>loading feedbacks...</h2> : 
  feedbacks.length === 0 ? 
  <h2>No feedbacks found!</h2> : feedbacks.map(data => <Feedbackdata key={data.id} data={data} />)
  return (
    <FeedbackList>
        <FeedbackListContainer>
          {fetchFeedbacks}
        </FeedbackListContainer>
        <span onClick={() => setOpenFeedbackModal(true)}>View feedbacks</span>
    </FeedbackList>
  );
}

export default Feedback;
