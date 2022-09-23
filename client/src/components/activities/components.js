import styled from "styled-components";

export const UserActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  padding: 40px 50px;

  & > h2 {
    margin: 20px 90px;
    text-transform: uppercase;
    text-align: start;
  }
`;
export const RowInfo = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 90px;
`;
export const Activity = styled.div`
  @keyframes onGoingAnimation {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }
  display: flex;
  flex: 1;
  font-size: 0.9em;
  align-items: center;

  & > .status {
    padding: 5px 20px;
    border-radius: 10px;
    color: white;
    background: #eaeaea;
    text-transform: capitalize;
    text-decoration: none;
    background: ${({ status }) => {
      return status == "cancelled"
        ? "rgb(234,67,53)"
        : status == "onGoing"
        ? "rgb(66,133,244)"
        : "rgba(7, 207, 90, 0.822)";
    }};
  }

  & > span {
    color: ${({ status }) => (status == "cancelled" ? "gray" : "black")};
    text-decoration: ${({ status }) =>
      status == "cancelled" ? "line-through" : "none"};
    animation: ${({ status }) =>
      status == "onGoing"
        ? "onGoingAnimation 800ms alternate Infinite ease-in-out"
        : "none"};
  }
`;
