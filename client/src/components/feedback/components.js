import styled from "styled-components";

export const FeedbackBackdrop = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: rgba(10, 10, 10, 0.87);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
`;

export const FeedbackContainer = styled.div`
  width: 30%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: fit-content;
  bottom: 0;
  margin: auto;
  background: white;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-inline: 50px;
  padding-block: 20px;

  @media (max-width: 850px) {
    width: 40%;
  }

  @media (max-width: 650px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 60%;
  }

  @media (max-width: 350px) {
    width: 80%;
    padding-inline: 20px;
  }
  & > h1 {
    margin-block: 15px;
    font-size: 2em;
    color: rgb(248, 195, 116);
  }

  & > i {
    position: absolute;
    right: 20px;
    top: 15px;
    color: gray;
    cursor: pointer;
    font-size: 1.5em;
    padding: 5px 10px;
    background: rgba(128, 128, 128, 0.219);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }

  & > .rateUs {
    color: rgb(248, 189, 138);

    font-size: 1.5em;
    text-align: center;
    margin-block: 10px;
  }

  & > .suggestion {
    color: gray;
    text-align: center;
    margin-block: 10px;
  }
  & > textarea {
    resize: none;
    height: 130px;
    border: solid 2px gray;
    outline: none;
    border-radius: 10px;
    font-size: 1em;
    color: rgb(75, 75, 75);
    padding: 10px;

    @media (max-width:650px) {
      max-height: 100px !important;
    }
    &::placeholder {
      color: rgb(161, 161, 161);
    }
  }
  & > button {
    padding-block: 10px;
    background: rgb(248, 195, 116);
    color: white;
    border: none;
    border-radius: 5px;
    margin: 20px 0px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

  }
`;

export const RateContainer = styled.div`
  display: flex;
  width: fit-content;
  align-self: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover > i {
    color: rgb(248, 195, 116);
  }

  & > i {
  font-size: 1.5em;
  color: lightgray;
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  &.rated {
    color: rgb(248, 195, 116)
  }
  }

  & > i:hover {
    color: rgb(248, 195, 116);
  }

  & > i:hover ~ i {
    color: lightgray !important;
  }
`;