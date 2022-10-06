import React from 'react';
import { useState } from "react";
import Comments from "./Comments";
import { BoardContainerModal, BoardHeaderModal } from "./components";

function BoardModal({displayBoard, setDisplayBoardModal, setComments, comments}) {
    const [displayInfo, setDisplayInfo] = useState("comments");
  return (
    <BoardContainerModal style={{display:displayBoard ? 'flex' : 'none'}}>
      {/* <i class="fa-solid fa-x closeBtn"></i> */}
      <button onClick={() => setDisplayBoardModal(false)}>X</button>
      <BoardHeaderModal displayInfo={displayInfo}>
        <div className="comments" onClick={() => setDisplayInfo('comments')}>
          <i class="fa-solid fa-comments"></i>
        </div>

        {/* <div className="observers" onClick={() => setDisplayInfo('observers')}>
          <i class="fa-solid fa-user"></i> <sup>5</sup>{" "}
        </div> */}
      </BoardHeaderModal>

      <Comments setComments={setComments} comments={comments} />
    </BoardContainerModal>
  )
}

export default BoardModal