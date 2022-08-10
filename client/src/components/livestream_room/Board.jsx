import React from "react";
import { useState } from "react";
import Comments from "./Comments";
import { BoardContainer, BoardHeader } from "./components";

function Board() {
  const [displayInfo, setDisplayInfo] = useState("comments");

  return (
    <BoardContainer>
      <BoardHeader displayInfo={displayInfo}>
        <div className="comments" onClick={() => setDisplayInfo('comments')}>
          <i class="fa-solid fa-comments"></i>
        </div>

        <div className="observers" onClick={() => setDisplayInfo('observers')}>
          <i class="fa-solid fa-user"></i> <sup>5</sup>{" "}
        </div>
      </BoardHeader>

      <Comments />
    </BoardContainer>
  );
}

export default Board;
