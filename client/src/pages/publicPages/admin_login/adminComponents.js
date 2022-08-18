import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    background: url('/images/adminLoginBG2.png');
    background-size:cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
`;

export const AdminLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  & > h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 2em;
    margin: 30px;
    text-shadow: 1px 3px 5px gray;
    @media (max-width: 1000px) {
      margin: 100px 30px 30px 30px;
    }

    @media (max-width: 400px) {
      text-shadow: 1px 3px 5px white;
    }
  }

  & > .admin__login__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;

    & .error__message {
      color: maroon;
      font-size: 0.8em;
      margin: -5px 0 0 20px;
      text-align: start;
    }

    & > button {
      padding: 10px 50px;
      border-radius: 20px;
      border: solid 1px #eaeaea;
      background: black;
      color: white;
      cursor: pointer;
      margin: 20px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: gray;
        color: white;
      }
    }

    & input {
      padding: 10px 20px;
      border-radius: 20px;
      border: solid 1px gray;
      outline: none;
      margin: 10px;
      width: 20rem;
      color: rgb(54, 54, 54);

      z-index: 100;

      @media (max-width: 800px) {
        width: 90%;
      }
    }

    & > a {
      margin-top: 15px;
      text-decoration: none;
      /* font-weight: 600; */
      font-size: 0.9em;

      color: rgb(10, 95, 121) !important;
      font-family: "Open Sans", sans-serif;
    }
  }
`;
export const AdminLoginContainer = styled.section``;
export const CheckboxContainer = styled.div`
  width: fit-content;
  align-self: flex-start;
  width: 95%;
  padding: 0;
  margin: auto;
  text-align: start;
  & > .checkbox {
    width: 30px !important;
    justify-self: flex-start;
    margin: 20px 0px !important;
  }

  & > label {
    font-family: "Open Sans", sans-serif;
    font-size: 0.9em;
    font-weight: 500;
    @media (max-width: 400px) {
      color: white;
    }
  }
`;
