import styled from "styled-components";

export const UserActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  padding: 40px 50px;
  @media (max-width:600px) {
    padding: 40px 0px;
  }
  & > h2 {
    margin: 20px 90px;
    text-transform: uppercase;
    text-align: start;
    @media (max-width:600px) {
    font-size: 1.3em;
    text-align: center;
    }
  }

  & > h4 {
    text-align: center;
    font-size: 1.5em;
    color: gray;
    margin: 20px;
    @media (max-width:600px) {
    font-size: 1em;
    }
  }
`;

export const RowInfo = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 90px;

  @media (max-width:700px) {
    width: 100%;
    margin: 15px 0px;
  }

  @media (max-width:600px) {
    font-size: 0.9em;
    margin-inline: auto;
  }
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
  font-weight: 500;
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
        : status == "pending" ? 
        "rgb(255, 207, 67)"
        : status == "onGoing"
        ? "rgb(66,133,244)"
        : "rgba(7, 207, 90, 0.822)";
    }};

    @media (max-width:500px) {
    padding: 5px 10px;
    }
  }

  & > span {
    text-transform: capitalize;
    color: ${({ status }) => (status == "cancelled" ? "gray" : "black")};
    text-decoration: ${({ status }) =>
      status == "cancelled" ? "line-through" : "none"};
    animation: ${({ status }) =>
      status == "onGoing"
        ? "onGoingAnimation 800ms alternate Infinite ease-in-out"
        : "none"};
  }

`;

export const Pagination = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  & > i {
    padding: 10px;
    color: black;
    cursor: pointer;
  }

  & > span {
    font-size: 1em;
    font-weight: 500;
  }
`
