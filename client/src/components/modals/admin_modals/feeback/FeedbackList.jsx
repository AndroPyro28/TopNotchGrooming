import React, {useState, useEffect} from 'react'
import { ModalBackdrop } from '../basemodalDesignComponent'
import Feedback from './Feedback'
import {FeedbackContainer, FeedbackListContainer} from "./components"
import CustomAxios from "../../../../customer hooks/CustomAxios"
function FeedbackList({setOpenFeedbackModal}) {
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

  const fetchFeedbacks = feedbacks?.length > 0 ? feedbacks?.slice(0)?.reverse()?.map((feedback) =>  <Feedback setFeedbacks={setFeedbacks} data={feedback} /> ) : <h1>No feedbacks found</h1>
  return (
    <ModalBackdrop>
      <FeedbackContainer>
      <i className="fa-solid fa-down-left-and-up-right-to-center" onClick={() => setOpenFeedbackModal(false)}></i>
        <FeedbackListContainer>

          {
            loading ? <h1>loading...</h1> : fetchFeedbacks
          }
          
        </FeedbackListContainer>
      </FeedbackContainer>
    </ModalBackdrop>
  )
}

export default FeedbackList