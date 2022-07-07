import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: rgb(245,244,249);
}

    .appointment__form__container {
        width:80%;
    margin-top: 175px !important;
    margin-bottom: 55px !important;
    display: flex;
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
    background: rgb(245,244,249);
    /* background: ; */
    background: white;
    box-shadow: -2px -1px 31px -8px rgba(66,66,66,0.75);
    -webkit-box-shadow: -2px -1px 31px -8px rgba(66,66,66,0.75);
    -moz-box-shadow: -2px -1px 31px -8px rgba(66,66,66,0.75);
    }
`;

export const AppointmentFormPhoto = styled.section`
  background: url("/images/dogpic.jpg");
  flex: 3;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const AppointmentFormInputsContainer = styled.section`
  flex: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 50px; */
  padding: 50px 20px;

  & > :is(h2, p) {
    text-align: center;
    margin-top: 20px;
    font-family: "league spartan";
  }

  & > h2 {
    font-size: 25px;
    text-transform: uppercase;
  }

  & > p {
    margin-bottom: 50px;
  }
`;

export const FormInputsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  & > .input__container {
    flex: 1;
    margin: 10px;
    display: flex;
    flex-direction: column;

    & > label {
        text-align: start;
    }

    & > .input {
      padding: 10px;
      border: solid 2px #eaeaea;
      border-radius: 5px;
      outline: none;

      &:focus {
        border-color: gray;
      }
    }
  }

  & > .button {
    padding: 15px 25px;
    background: rgb(235, 235, 129);
    border-radius: 20px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    transition: all .3s ease-in-out;
    border: none;
    &:hover {
        background: #312f15;
    color: white;
    }
  }
`;
