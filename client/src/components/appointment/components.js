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

  @media (max-width:615px) {
    flex-direction: column;
    margin-block: 0px;
  }

  & > button {
    padding: 10px 20px;
    border-radius: 8px;
    outline: none;
    border: none;
    margin-inline: 10px;
    color: white;
    cursor: pointer;

    @media (max-width:930px) {
        margin: 10px;
    }
    &.reject {
      background: red;

    }
    &.approve {
      background: lightblue;
    }

    &.complete {
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

  @media (max-width:615px) {
    margin-block: 10px;
  }

  & > h4 {
    color: dimgray;
    font-size: 0.9em;
  }

  & > video {
    object-fit: contain;
    width: 100%;
    height: 250px;
    border-radius:10px;
    margin-top: 20px;
  }

  & > span {
    color: #1e2429;
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
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
        : status == "interrupted"
        ? "black" 
        : "green"
    };

    text-transform: capitalize;
  }
`;

export const PetInformation = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;

  @media (max-width:630px) {
  grid-template-columns: 100%;
  }

  & > img {
    width: 100%;
    max-width: 200px;
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
  position: relative;

  @media (max-width:930px) {
    margin:10px 40px ;
    }

  & > h2 {
    margin: 50px 0px 20px 0px;
    @media (max-width:930px) {
      text-align: start;
        
    }
  }
`;

export const UpdateBtn = styled.div`
  position: absolute;
  top: 180px;
  right: 0px;
  & > .editBtn {
    font-size: 1.1em;
    cursor: pointer;
    padding: 10px;
    color: dimgray;
    border-radius: 50%;
    
    &:hover {
    background: lightgray;

    }
  }
`;
