import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  & > h2 {
    margin: 50px 0px 20px 0px;
    width: fit-content;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-block: 15px;

  & > button {
    padding: 10px 20px;
    border-radius: 8px;
    outline: none;
    border: none;
    margin-inline: 10px;
    color: white;
    &.reject {
      background: red;
    }
    &.approve {
      background: green;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 1;
  margin-inline: 10px;
  & > h4 {
    color: dimgray;
    font-size: 0.9em;
  }

  & > span {
    color: #1e2429;
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;

    & > .editBtn {
      font-size: 1.1em;
      cursor: pointer;
      padding: 10px;
      color: dimgray;
      background: lightgray;
      border-radius: 50%;
    }
  }

  & > input[type="datetime-local"] {
    padding: 10px 20px;
    border-radius: 10px;
    border: solid 2px gray;
    outline: none;
    cursor: pointer;
  }

  & > p {
    font-weight: bold;
    color: ${({ status }) =>
      status == "rejected"
        ? "red"
        : status == "pending"
        ? "gray"
        : status == "onGoing"
        ? "blue"
        : "green"};

    text-transform: capitalize;
  }
`;

export const PetInformation = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;
  & > img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const PetDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

export const AppointmentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: black; */
  & > h2 {
    margin: 50px 0px 20px 0px;
  }
`;
