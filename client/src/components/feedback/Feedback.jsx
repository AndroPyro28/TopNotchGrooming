import React from "react";
import {
  FeedbackBackdrop,
  FeedbackContainer,
  RateContainer,
} from "./components";
import Logic from "../customer_navbar/logic";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Feedback() {
  const { pathname } = useLocation();

  const [paws, setPaws] = useState(0);
  const [comments, setComments] = useState("");
  const [image, setImage] = useState(null);

  const { closeFeedback, stars, submitFeedback } = Logic({
    paws,
    setPaws,
    comments,
    toast,
    image,
  });

  useEffect(() => {
    if (image && typeof image !== "string") {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        if (reader.result.includes("data:image/")) setImage(reader.result);
      };
    }
  }, [image]);

  return (
    <FeedbackBackdrop>
      <FeedbackContainer>
        <ToastContainer autoClose={1500} />
        <i className="fa-solid fa-xmark closeBtn" onClick={closeFeedback}></i>
        <h1>Give us feedback</h1>
        <p class="rateUs">Rate Us</p>
        <RateContainer>{stars}</RateContainer>
        <div className="imageUploader">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <p class="suggestion">
          {pathname.includes("/customer/liveStreamChannels/room")
            ? "How was your experience watching live stream?"
            : "Do you have any thoughts youd like to share?"}
        </p>

        <textarea
          placeholder="Give us feedback"
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button onClick={submitFeedback}>Submit</button>
      </FeedbackContainer>
    </FeedbackBackdrop>
  );
}

export default Feedback;
