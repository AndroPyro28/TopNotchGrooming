import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.548);
  z-index: 10;

  & > .billing__form {
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 50%;
    margin: auto;
    height: fit-content;
    border-radius: 10px;
    text-align: start;
    display: flex;
    flex-direction: column;
    /* height: ; */
    @media (max-width: 900px) {
      width: 60%;
    }

    @media (max-width: 800px) {
      width: 70%;
    }

    @media (max-width: 700px) {
      width: 80%;
    }

    @media (max-width: 600px) {
      width: 85%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    @media (max-width: 400px) {
      width: 95%;
    }

    @media (max-width: 300px) {
      width: 100%;
    }

    & > h1 {
      margin: 10px 70px;
      color: rgb(17, 17, 17);
    }

    & > h3 {
      margin-inline: 70px;
      color: #181818;
      font-size: 1em;
    }

    & > h4 {
      margin-top: 20px;
      margin-bottom: 20px;
      margin-inline: 70px;
      color: #181818;
      font-weight: normal;
      font-size: 1em;
      & > i {
        padding: 5px 10px;
        border: solid 2px blue;
        border-radius: 50%;
        color: black;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  margin: 10px 50px;

  & > label {
    margin-block: 5px;
  }

  & > .error__message {
    text-align: center;
    font-size: 0.9em !important;
  }
`;

export const InputContainer = styled.div`
  border-width: 2px;
  border-color: #cccccc;
  border-style: solid;
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(134, 173, 186, 0.75);
  padding: 5px;
  input {
    width: 95%;
    padding: 0px 8px;
    font-size: 15px;
    background-color: #ffffff;
    border: none;
    color: #2a2828;
    text-shadow: -50px 0px 0px rgba(255, 255, 255, 0.75);
    &:focus {
      outline: none;
    }
  }

  & > i {
    font-size: 1em;
    margin: 5px;
    color: gray;
  }
`;

export const CourierTypeContainer = styled.section`
  display: flex;
  width: 80%;
  margin-block: 30px;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

export const CourierType = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: solid 2px transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: gray;
  }
  & > img {
    width: 70%;
    border-radius: 10px;
    height: 110px !important;
    object-fit: contain;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 0px 50px 30px 0px;

  & > button {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    margin: 10px;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    font-size: 15px;

    &.proceed {
      box-shadow: 0px 1px 0px 0px #f0f7fa;
      background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
      background-color: #33bdef;
      border-radius: 10px;
      border: 1px solid #057fd0;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;

      &:hover {
        background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
        background-color: #019ad2;
      }

      &:disabled {
        background: gray;
        border: none;
        cursor: default;
      }
    }

    &.cancell {
      box-shadow: inset 0px 1px 0px 0px #f7c5c0;
      background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
      background-color: #fc8d83;
      border-radius: 6px;
      border: 1px solid #d83526;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      text-shadow: 0px 1px 0px #b23e35;

      &:hover {
        background: linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
        background-color: #e4685d;
      }
    }
  }
`;

export const Note = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
  align-items: center;
`;
