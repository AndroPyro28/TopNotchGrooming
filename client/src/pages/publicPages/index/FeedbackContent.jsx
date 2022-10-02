import React from "react";
import { FeedbackContentContainer, User, Comments } from "./indexComponents";
function FeedbackContent({data}) {
  
  const ratingsLength = []
  for (let i = 0; i < data.ratings; i++) {
    ratingsLength.push('');
  }

  const rate = ratingsLength.map((rate, index) => <i className="fa-solid fa-paw" key={index}></i>)
  return (
    <FeedbackContentContainer>
      <User>
        <img src={data.profile_image_url} />
        <span>Andro Eugenio</span>
        {
          rate
        }
      </User>
      <Comments>
        {
          data.comments
        }
      </Comments>
    </FeedbackContentContainer>
  );
}

export default FeedbackContent;
