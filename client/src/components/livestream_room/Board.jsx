import React from "react";
import { useState } from "react";
import Comments from "./Comments";
import { BoardContainer, BoardHeader } from "./components";

function Board({ displayBoard, setComments, comments }) {
  const [displayInfo, setDisplayInfo] = useState("comments");

  return (
    <BoardContainer style={{ display: displayBoard ? "flex" : "none" }}>
      <BoardHeader displayInfo={displayInfo}>
        <div className="comments" onClick={() => setDisplayInfo("comments")}>
          <i class="fa-solid fa-comments"></i>
        </div>

        {/* <div className="observers" onClick={() => setDisplayInfo("observers")}>
          <i class="fa-solid fa-user"></i> <sup>5</sup>{" "}
        </div> */}
      </BoardHeader>

      <Comments setComments={setComments} comments={comments} />
    </BoardContainer>
  );
}

export default Board;
