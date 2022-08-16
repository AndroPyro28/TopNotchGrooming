import styled from "styled-components";

export const YourLiveStreamContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 50px 0px 50px;
  max-height: 350px;
  width: 70%;
  margin: 0 auto;
`;
export const LiveStreamVideoContainer = styled.div`
  flex: 2;
  position: relative;
  font-size: 0.8em;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  & > .live__tag {
    position: absolute;
    padding: 5px 10px;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    border-radius: 5px;

    border: none;
  }

  & > .live__viewers {
    position: absolute;
    padding: 5px 10px;
    top: 10px;
    left: 60px;
    background: rgb(85, 84, 84);
    color: white;
    border-radius: 5px;
  }
`;
export const LiveStreamInfo = styled.div`
  flex: 1;
  color: white;
  background: rgb(153, 115, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const LiveStreamHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > .profile {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 50%;
  }
`;
export const UserInfo = styled.div`
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  & > .tag {
    font-size: 0.7em;
    transform: translateY(-10px);
    transform: translateX(-10px);
    & > i {
      color: red;
      padding: 5px;
      border-radius: 5px;
      margin-left: 10px;
      margin-top: 15px;
    }
  }

  & > .username {
    font-size: 0.9em;
    transform: translateY(10px);
  }
`;
export const LiveStreamDetails = styled.div`
  font-size: 0.7em;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const OtherLiveStreamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > h3 {
    font-size: 2em;
    color: rgb(230, 236, 156);
    color: rgb(252, 188, 3);
    text-transform: capitalize;
    font-style: italic;
    text-shadow: 1px 3px 5px black;
    margin-top: 90px;
    margin-bottom: 50px;
    text-align: center;
  }

  & h1 {
    margin-top: 90px;
  }
`;
export const OtherLiveStreamsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 950px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 650px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 400px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const OtherLiveStream = styled.div`
  width: 100%;
  padding: 5px;
  cursor: pointer;
  /* background: rgb(24,24,27); */
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.37);
  position: relative;
  transition: all 0.3s ease-in-out;

  @keyframes animateTag {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background: rgb(92, 69, 1);
  }

  & > :is(.liveStream__tag, .liveStream__viewers) {
    position: absolute;
    top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.7em;
  }

  & > .liveStream__tag {
    left: 10px;
    background: red;
    color: white;
    animation: animateTag 1000ms infinite ease-in-out alternate;
  }

  & > .liveStream__viewers {
    left: 55px;
    background: rgb(85, 84, 84);
    color: white;
  }

  & > .other__liveStream__video {
    width: 100%;
    max-height: 250px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const OtherLiveStreamInfo = styled.div`
  display: flex;

  & > .ownerProfile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;

    float: left;
  }
`;
export const OwnerName = styled.div`
  margin-left: 10px;
  color: white;

  & > small {
    color: rgb(235, 235, 235);
  }
`;
