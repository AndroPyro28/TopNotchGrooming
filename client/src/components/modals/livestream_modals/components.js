import styled from "styled-components";

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.548);
  z-index: 10;
`;

export const LiveStreamModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 90%;
  background: white;
  width: 45%;
  border-radius: 10px;
  overflow: auto;
  
  & > h1 {
    text-align: start;
    font-size: 1.5em;
    margin: 20px;
  }

  & > h2 {
    text-align: start;
    font-size: 1.2em;
    margin: 20px;
  }
`;
export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  max-height: 350px;
  overflow: hidden;
`;

export const ScheduleData = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #eaeaea;
    cursor: pointer;
  }
  & > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px;
  }

  & > .info {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 45%;
    transition: all 0.2s ease-in-out;

    & > .name {
      color: ${({ selected }) => (selected ? "rgb(1, 37, 73) " : "black")};
      font-weight: ${({ selected }) => (selected ? "500" : "normal")};

      transition: all 0.2s ease-in-out;
    }

    & > .email {
      color: ${({ selected }) => (selected ? "rgb(1, 37, 73) " : "gray")};

      font-size: 0.8em;
      transition: all 0.2s ease-in-out;

      &::before {
        content: "@";
      }
    }
  }

  & > span {
    font-weight: 600;
    flex: 1;
    color: ${({ selected }) => (selected ? "rgb(1, 37, 73) " : "gray")};
    transition: all 0.2s ease-in-out;
  }

  &:hover > span {
    color: rgb(1, 37, 73);
  }

  &:hover > .info {
    & > span {
      color: rgb(1, 37, 73);

      &.name {
        font-weight: 500;
      }
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const PaginationContainer = styled.div`
  margin: 10px;

  & > i {
    padding: 10px 15px;
    background: #eaeaea;
    border-radius: 10px;
    margin-inline: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: black;
      color: white;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 20px;

  & > button {
    padding: 10px 20px;
    margin-inline: 10px;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &.cancelBtn {
      background: maroon;
    }
    &.goBtn {
      background: rgba(39, 123, 219, 0.726);
    }
  }
`;
