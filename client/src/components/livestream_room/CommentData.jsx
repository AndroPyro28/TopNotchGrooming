import React from 'react'
import {CommentDataContainer} from "./components"
function CommentData() {
  return (
    <CommentDataContainer>
        <img src="/images/nicePicture.jpg" />

        <div className='commentData'>
            <div className='commenter'>Andro Eugenio</div>
            <div className='comment'>Hello world</div>
        </div>
    </CommentDataContainer>
  )
}

export default CommentData