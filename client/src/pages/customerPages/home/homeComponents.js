import styled from "styled-components";

export const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HomeBannerContainer = styled.div`
  background: url("/images/homepageBG.png");
  width: 100vw !important;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  /* align-items: ; */
  position: relative;
  justify-content: flex-start !important;
  align-items: center;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 100;
  /* position: absolute;
    top: 0px;
    right:0px;
    left: 0px;
    bottom: 0px; */
  margin: 70px;
  margin-top: 150px;
  width: 30%;
  text-align: start;
  & > h3 {
    font-size: 3em;
    font-family: "montserrat", "league spartan", sans-serif !important;
  }

  & > p {
    transform: translateY(30px);
    font-family: "mukta mahee", sans-serif;
  }

  @media(max-width: 600px) {
    & {
      margin: 0px;
      text-align: center;
      width: 100%;
    }
  }
`;

export const StepsWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  background: white;
  width: 93%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  padding: 50px 0px;

  box-shadow: -2px -1px 19px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px -1px 19px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px -1px 19px -7px rgba(0, 0, 0, 0.75);

  & > h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2em;
    color: rgb(90, 90, 90);

    @media(max-width: 330px) {
      font-size: 1.5em;

  }
  }

  @media (max-width:500px) {
  width: 100%;
  border-radius: 0px;
  }
`;
export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  grid-gap: 20px;

  @media(max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: rgb(48, 83, 76);
  margin-top: 20px;

  & > img {
    width: 100px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
  }

  & > h3 {
    margin: 10px 0px 10px 0px;
  }

  & > p {
    font-size: 0.9em;
    padding: 0px 50px;
  }
`;
