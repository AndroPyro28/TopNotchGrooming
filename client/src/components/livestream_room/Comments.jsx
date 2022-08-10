import React from 'react'
import CommentData from './CommentData';
import {CommentsContainer, CommentsList} from "./components";
import MessageBox from './MessageBox';

function Comments() {
  return (
    <CommentsContainer>

        <CommentsList>

          <CommentData />
          <CommentData />
          <CommentData />
          <CommentData />
          <CommentData />

        </CommentsList>

    <MessageBox />

        

    </CommentsContainer>
  )
}

export default Comments