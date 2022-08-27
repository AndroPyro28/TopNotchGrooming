import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  transition: all 0.3s ease-in-out;
  & > :is(img, video) {
    object-fit: cover;
    border-radius: 20px;
    align-self: center;
    height: 75vh;
    width: ${({ isDisplayBoard }) => (isDisplayBoard ? "95%" : "70%")};
    box-shadow: 1px 3px 5px gray;

    @media (max-width:1000px) {
      width: 100%;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 10px;
  background: transparent;

  & > i {
    margin-inline: 10px;
    font-size: 1.3em;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    border: solid 1px transparent;
    transition: all 0.1s ease-in-out;
    &:hover {
      border: solid 1px gray;
    }
  }
  & > .leave {
    color: white;
    background: red;
    &:hover {
      background: maroon;
    }

    &:disabled {
      background: green !important;
    }
  }

  & > :is(.fullscreen, .minimizescreen, .rotateCamera, .displayBoard) {
    color: dimgray;
    background: white;
  }

  & > .displayBoardModal {
      display: none;
      color: dimgray;
      background: white;
    }

    @media (max-width:1000px) {
      display: block;
    }

`;

export const BoardContainerModal = styled.div`
  box-shadow: 1px 3px 5px gray;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60%;
  height: 90%;
  border-radius: 10px;
  z-index: 10000;

  & > button {
    color: maroon;
    width: fit-content;
    height: fit-content;
    position: relative;
    border: none;
    font-size: 1.3em;
    background: none;
    font-weight: 600;
    margin: 5px 10px;
    align-self: flex-end;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
   
  }

  @media (min-width:1000px) {
    display: none !important;
    z-index: 500;
  }
  @media (max-width:1000px) {
    display: flex !important;
    z-index: 500;
  }
  @media (max-width:730px) {
    width: 70%;

  }

  @media (max-width:630px) {
    width: 85%;

  }

  @media (max-width:350px) {
    width: 95%;

  }

  
`

export const BoardHeaderModal = styled.div`
  display: flex;
  align-items: center;
  & > div {
    font-weight: 500;
    padding: 10px;
    margin: 0px 10px;
    cursor: pointer;

    & > i {
      font-size: 1.3em;
    }

    &.comments {
      color: ${({ displayInfo }) =>
        displayInfo === "comments" ? "black" : "gray"} !important;
    } 

    &.observers {
      color: ${({ displayInfo }) =>
        displayInfo === "observers" ? "black" : "gray"} !important;
    }
  }
`;

export const CommentsContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  position: relative;
`;

export const CommentsListModal = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;
  overflow-y: auto;
  overflow-x: hidden;

  & > label {
    margin: 20px;
    font-size: 0.9em;
    color: gray;
    font-weight: 500;
    font-style: italic;
  }
`;

export const CommentDataContainerModal = styled.div`
  display: grid;
  grid-template-columns: 13% 82%;
  width: 100%;
  gap: 15px;
  padding: 15px;

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  & > .commentData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > .commenter {
      font-weight: 500;
    }

    & > .comment {
      color: #181818;
      margin: 5px;
      font-size: 0.9em;
      text-align: start;
      width: 90%;
    }
  }
`;

export const MessageBoxContainerModal = styled.div`
  display: flex;
  padding: 10px;
  background: aliceblue;
  align-items: center;
  & > input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 1em;
    background: transparent;
  }

  & > i {
    font-size: 1.3em;
    padding: 10px;
    background: blue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:active {
      font-size: 1em;
    }
  }
`;

export const NotificationContainerModal = styled.label`
 
`

export const BoardContainer = styled.div`
  box-shadow: 1px 3px 5px gray;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  background: white;
  /* @media (min-width:1000px) {
    display: none;
  } */

  @media (max-width:1000px) {
    display: none !important;
    z-index: 500;
  }
  @media (min-width:1000px) {
    display: flex !important;
    z-index: 500;
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  & > div {
    font-weight: 500;
    padding: 20px;
    margin: 0px 10px;
    cursor: pointer;

    & > i {
      font-size: 1.3em;
    }

    &.comments {
      color: ${({ displayInfo }) =>
        displayInfo === "comments" ? "black" : "gray"};
    }

    &.observers {
      color: ${({ displayInfo }) =>
        displayInfo === "observers" ? "black" : "gray"};
    }
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  position: relative;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;
  overflow-y: auto;
  overflow-x: hidden;

  & > label {
    margin: 20px;
    font-size: 0.9em;
    color: gray;
    font-weight: 500;
    font-style: italic;
  }
`;

export const CommentDataContainer = styled.div`
  display: grid;
  grid-template-columns: 13% 82%;
  width: 100%;
  gap: 15px;
  padding: 15px;

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  & > .commentData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > .commenter {
      font-weight: 500;
    }

    & > .comment {
      color: #181818;
      margin: 5px;
      font-size: 0.9em;
      text-align: start;
      width: 90%;
    }
  }
`;

export const MessageBoxContainer = styled.div`
  display: flex;
  padding: 10px;
  background: aliceblue;
  align-items: center;
  overflow: hidden;
  & > input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 1em;
    background: transparent;
  }

  & > i {
    font-size: 1.3em;
    padding: 10px;
    background: blue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:active {
      font-size: 1em;
    }
  }
`;

export const NotificationContainer = styled.label`
 
`