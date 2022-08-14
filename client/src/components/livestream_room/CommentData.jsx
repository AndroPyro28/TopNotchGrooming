import React from 'react'
import {CommentDataContainer} from "./components"
function CommentData({data}) {
  const {user, message} = data;
  const {profile_image_url, firstname, lastname} = user
  return (
    <CommentDataContainer>
        <img src={profile_image_url} />

        <div className='commentData'>
            <div className='commenter'>{firstname} {lastname} </div>
            <div className='comment'> {message} </div>
        </div>
    </CommentDataContainer>
  )
}

export default CommentData