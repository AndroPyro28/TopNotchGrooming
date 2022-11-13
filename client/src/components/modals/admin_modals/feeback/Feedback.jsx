import React from "react";
import { useState } from "react";
import { InputContainer } from "../basemodalDesignComponent";
import {
  FeedbackDataContainer,
  ProfileUser,
  Comments,
  Actions,
  Rate,
  FeedbackWrapper,
  CommentContainer
} from "./components";
import Logic from "./Logic";
function Feedback({data, setFeedbacks}) {
  const [view, setView] = useState(false);
  let sizeRate = []

  for(let i = 0; i < data.ratings; i++) {
    sizeRate.push('');
  }

  const [isPinned, setPinned] = useState(data.pin)
  const [comment, setComment] = useState('');
  const {pinFeedback, deleteFeedback, sendComment} = Logic({setPinned, data, isPinned, setFeedbacks, comment, setComment});

  const rate = sizeRate.map((r, index) => <i className="fa-solid fa-paw" key={index}></i>)

  return (
    <FeedbackWrapper>
    <FeedbackDataContainer  view={view}>
      <Comments onClick={() => setView(prev => !prev)}>
        <img src={data.profile_image_url} /> 
        <p>
          <Rate>
            <span> {data?.firstname} {data?.lastname} Rated</span>
            {
              rate
            }
          </Rate>
          {
            data.comments
          }
        </p>
      </Comments>

      <Actions isPinned={isPinned}>
        {/* <i className="fa-solid fa-thumbtack pin" onClick={pinFeedback}></i> */}
        <i className="fa-solid fa-eraser delete" onClick={deleteFeedback}></i>
      </Actions>
    </FeedbackDataContainer>
    <CommentContainer>
      <input placeholder="comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
      <i className="fa-solid fa-paper-plane" onClick={sendComment}></i>
    </CommentContainer>
    </FeedbackWrapper>
  );
}

export default Feedback;
