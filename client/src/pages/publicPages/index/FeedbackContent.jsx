import React from "react";
import {
  FeedbackContentContainer,
  User,
  Comments,
  AdminCommentsContainer,
  AdminComment,
} from "./indexComponents";
function FeedbackContent({ data }) {
  const ratingsLength = [];
  for (let i = 0; i < data.ratings; i++) {
    ratingsLength.push("");
  }
  
  const rate = ratingsLength.map((rate, index) => (
    <i className="fa-solid fa-paw" key={index}></i>
  ));

  let content;

  if(rate.length === 1) {
    content = <span>Very Dissatisfied</span>
  } else if (rate.length === 2) {
    content = <span>Dissatisfied</span>
  } else if (rate.length === 3) {
    content = <span>Neutral </span>
  } else if (rate.length === 4) {
    content = <span>Satisfied</span>
  } else if (rate.length === 5) {
    content = <span>Very Satisfied</span>
  } else {
    content = <></>
  }

  return (
    <FeedbackContentContainer>
      <User>
        <img src={data.profile_image_url} />
        <span>
          {data.firstname} {data.lastname}{" "}
        </span>
        <br />
      </User>
      <div className="ratings">{rate} {content} </div>
      
      <Comments className="user-comment">
        {data.comments}
        {
            data.image_url && <img src={data.image_url} alt="" />
        }
        
      </Comments>
      {
        data.admin_comments.length > 0 && <AdminCommentsContainer>
        <h6>*Replies from admin*</h6>
        {data.admin_comments.map((c) => {
          return (
            <AdminComment>
              <User>
                <img src={c.admin_image} />
                <span>
                  {c.admin_firstname} {c.admin_lastname}{" "}
                </span>
              </User>
              <Comments>{c.comment}</Comments>
            </AdminComment>
          );
        })}
      </AdminCommentsContainer>
      }
      
    </FeedbackContentContainer>
  );
}

export default FeedbackContent;
