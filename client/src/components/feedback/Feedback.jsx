import React from "react";
import {
  FeedbackBackdrop,
  FeedbackContainer,
  RateContainer,
} from "./components";
import Logic from "../customer_navbar/logic";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
function Feedback() {

  const [paws, setPaws] = useState(0);
  const [comments, setComments] = useState('');
  const { closeFeedback, stars, submitFeedback } = Logic({paws, setPaws, comments, toast})

  return (
    <FeedbackBackdrop>
      <FeedbackContainer>
        <ToastContainer autoClose={1500} />
        <i className="fa-solid fa-xmark closeBtn" onClick={closeFeedback}></i>
        <h1>Give us feedback</h1>
        <p class="rateUs">Rate Us</p>
        <RateContainer>
          {
            stars
          }
        </RateContainer>

        <p class="suggestion">Do you have any thoughts you'd like to share?</p>

        <textarea placeholder="Give us feedback" onChange={(e) => setComments(e.target.value)}></textarea>

        <button onClick={submitFeedback}>Submit</button>
      </FeedbackContainer>
    </FeedbackBackdrop>
  );
}

export default Feedback;
