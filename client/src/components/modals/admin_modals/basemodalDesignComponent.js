import styled, { keyframes } from "styled-components";

const animateBackdrop = keyframes`

    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const animateEntranceForm = keyframes`
    0% {
        transform: translateY(-100vh);
    }
    100% {
        transform: translateY(0);

    }
`;
const animationExitForm = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);

    }
`;
export const ModalBackdrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.548);
  animation: ${animateBackdrop} 0.3s;
  z-index: 10;

  & .form__modal {
    display: flex;
    flex-direction: column;
    width: fit-content;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: fit-content;
    padding: 20px;
    max-height: 95vh;
    animation: ${({ openItem }) =>
        openItem ? animateEntranceForm : animationExitForm}
      0.5s;
    max-height: 90vh;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 10px;
    @media (max-width: 860px) {
      & {
        align-items: center;
        width: 70%;
      }
    }

    @media (max-width: 650px) {
      & {
        align-items: center;
        width: 90%;
        padding: 10px;
      }
    }
    & > h1 {
      text-align: start;
      margin-block: 0px 30px;
      margin-inline: 30px;
      font-size: 1.8em;
    }

    & > button {
      width: fit-content;
      align-self: flex-end;
      margin: 10px 20px 20px 20px;
      padding: 15px 50px;
      border: none;
      border-radius: 10px;
      background: #1363df;
      color: white;
      cursor: pointer;
      @media (max-width:500px) {
      padding: 10px 30px;
      }
      &:disabled {
        background: gray;
        cursor: wait;
      }
    }

    & > .closeBtn {
      position: absolute;
      right: 30px;
      font-size: 1.5em;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s ease-in;
      &:hover {
        color: gray;
      }
    }
  }
`;

export const FormInputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-block: 0px;
  width: 100%;
  align-items: center;
  @media (max-width: 860px) {
    & {
      margin: 5px;
    }
  }
  & > label {
    margin: 30px;
    color: dimgray;
    flex: 0.8;
    text-align: start;
    @media (max-width: 860px) {
      & {
        margin: 0;
        display: none;
      }
    }
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-top: -15px;
  @media (max-width: 860px) {
    & {
      margin: 0;
      width: 100%;
    }
  }

  & > :is(input, textarea) {
    width: 25rem;
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    border: solid 1px gray;
    margin: 20px;
    resize: none;

    @media (max-width: 860px) {
      & {
        width: 87%;
        margin: 10px;
      }
    }
  }
  & > textarea {
    height: 100px;
  }

  & > select {
    width: 27rem;
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    border: solid 1px gray;
    margin: 20px;
    resize: none;
    @media (max-width: 860px) {
      & {
        margin: 10px;
        width: 92%;
      }
    }

    @media (max-width: 760px) {
      & {
        width: 97%;
      }
    }
  }

  & > .error__message {
    color: maroon;
    font-size: 0.9em;
    margin: -15px 0 -10px 0;

    @media (max-width: 860px) {
      margin: -5px;
    }
  }
`;
