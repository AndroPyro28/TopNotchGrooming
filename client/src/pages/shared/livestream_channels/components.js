import styled, { createGlobalStyle } from "styled-components";

export const ChannelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const GlobalStyles = createGlobalStyle`
    body {
    background: url("/images/storePicEdited.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    }

    .youLiveStreamH3 {
      margin-top: 90px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 2em;
    color: rgb(252, 188, 3);
    font-style: italic;
    }

    .lineBreak {
      height: 2px;
  width: 95%;
  background: white;
  margin: 100px auto 100px auto;
    }
`;

export const StreamButton = styled.div`
z-index: 1;
  @keyframes animationBtn {
    0% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
  align-self: flex-end;
  color: white;

  position: relative;
  top: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: red;

  &:hover {
    color: white;
    transform: scale(0.9);

  }

  & > span {
    margin-right: 10px;
    transition: all 0.3s ease;
    overflow: hidden;
    text-transform: capitalize;
    font-weight: 500;
  }



  & > i {
    font-size: 2em;
    padding: 20px;
    border-radius: 50%;
    color: white;
  }
`;
