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
    @media (max-width:660px) {
      width: 95%;
    }
    }
`;

export const AppointmentFormPhoto = styled.section`
  background: url("/images/dogpic.jpg");
  flex: 3;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width:1000px) {
    display: none;
  }
`;
export const AppointmentFormInputsContainer = styled.section`
  flex: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 50px; */
  padding: 50px 20px;

  @media (max-width:700px) {
    padding: 50px 0px;
  }

  & > :is(h2, p) {
    text-align: center;
    margin-top: 20px;
    font-family: "league spartan";
  }

  & > h2 {
    font-size: 25px;
    text-transform: uppercase;

    @media (max-width:665px) {
      font-size: 1.3em;
    }

    @media (max-width:561px) {
      font-size: 1em;
    }
  }

  & > p {
    margin-bottom: 50px;

    @media (max-width:561px) {
      font-size: 1em;
    }

  }
`;

export const FormInputsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  @media (max-width:660px) {
    flex-direction: column;
  width: 90%;

  }

  & > .input__container {
    flex: 1;
    margin: 10px;
    display: flex;
    flex-direction: column;

    & > label {
        text-align: start;
    }

    & > .input, & > select {
      padding: 10px;
      border: solid 2px #eaeaea;
      border-radius: 5px;
      outline: none;
      width: 90%;
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
