import React from "react";
import { useState } from "react";
import {
  FeedbackDataContainer,
  ProfileUser,
  Comments,
  Actions,
  Rate,
} from "./components";
import Logic from "./Logic";
function Feedback({data, setFeedbacks}) {
  const [view, setView] = useState(false);
  let sizeRate = []

  for(let i = 0; i < data.ratings; i++) {
    sizeRate.push('');
  }

  const [isPinned, setPinned] = useState(data.pin)

  const {pinFeedback, deleteFeedback} = Logic({setPinned, data, isPinned, setFeedbacks});

  const rate = sizeRate.map((r, index) => <i className="fa-solid fa-paw" key={index}></i>)

  return (
    <FeedbackDataContainer  view={view}>
      <Comments onClick={() => setView(prev => !prev)}>
        <img src={data.profile_image_url} />
        <p>
          <Rate>
            <span>Rated</span>
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
        <i className="fa-solid fa-thumbtack pin" onClick={pinFeedback}></i>
        <i className="fa-solid fa-eraser delete" onClick={deleteFeedback}></i>
      </Actions>
    </FeedbackDataContainer>
  );
}

export default Feedback;
