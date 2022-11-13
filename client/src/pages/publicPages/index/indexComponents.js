import styled, { createGlobalStyle } from "styled-components";

export const IndexPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const CarouselSlider = styled.div`
  position: relative;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  & > i {
    cursor: pointer;
    z-index: 1;
    font-size: 1em;
    position: absolute;
    font-size: 1.5em;
    padding: 15px 20px;
    color: gray;
    border: solid 2px gray;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    margin: auto 0;

    &:active {
      color: black;
      border: solid 2px black;
    }

    @media(max-width: 600px) {
        padding: 10px 15px;
    }
  }

  & > .slidToLeft {
    left: 20px;
    /* margin: auto auto auto 10px; */
  }

  & > .slidToRight {
    right: 20px;
    /* margin: auto 10px auto auto;  */
  }
`;

export const CarouselWrapper = styled.div`
  width: 300vw;
  display: flex;
  transition: all 0.3s ease-in-out;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url("/images/carouselBg.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 580px;
  & > img {
    width: 550px;
    height: 450px;
    margin-bottom: 30px;
    animation: animateSliderItem 1000ms infinite alternate-reverse;
    @keyframes animateSliderItem {
      0% {
        transform: scale(1.05);
        /* transform: translateY(-5px); */
      }
      100% {
        transform: scale(1);
        /* transform: translateY(5px); */
      }
    }

    @media(max-width: 900px) {
        & {
            width: 350px;
            height: 350px;
        }
    }

    @media(max-width: 600px) {
        & {
            width: 300px;
            height: 300px;
            align-self: center;
        }
    }

    @media(max-width: 550px) {
        & {
            display: none;
        }
    }
  }

  & > .carousel__content {
    align-self: center;
    margin-top: 50px;

    & > h1 {
      color: rgb(65, 47, 16);
      font-weight: 700;
      font-size: 50px;
      margin: 0;
      cursor: grab;
      
    }

    & > p {
      color: rgb(131, 100, 51);
      margin: 0;
      margin-top: 20px;
    }

    & > button {
      background: rgb(32, 42, 54);
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      color: white;
      font-size: 1em;
      cursor: pointer;
      margin-top: 20px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: rgb(86, 115, 150);
      }
    }

    @media(max-width: 900px) {
            & > h1 {
            color: rgb(65, 47, 16);
            font-weight: 700;
            font-size: 40px;
            margin: 0;
        }
    }

    @media(max-width: 600px) {
            & > h1 {
            font-size: 2em;
        }

        & > p {
            font-size: 15px;
        }
    }

    @media(max-width: 450px) {
        & > h1 {
          font-size: 2.5em;
        }

        & > p {
            font-size: 0.9em;
        }

        & > button {
            padding: 5px 10px;
        }
    }
  }

  @media(max-width: 400px) {
        & > h1 {
          font-size: 2em;
        }

        & > p {
            font-size: 0.9em;
        }

        & > button {
            padding: 5px 10px;
        }
    }
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 2.5em;
    color: rgb(255, 219, 168);
    margin: 50px;
  }

  & > .ServiceContentContainer {
    display: flex;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
  }
`;
export const ServiceContentContainer = styled.div`
  
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  max-width: 250px;
  padding: 20px;
  background: rgb(255, 247, 236);
  border-radius: 20px;
  margin: 50px;

  @media (max-width: 900px) {
    & {
      max-width: 50%;
    }
  }

  @media (max-width: 700px) {
    & {
      max-width: 60%;
    }
  }

  @media (max-width: 600px) {
    & {
      max-width: 70%;
    }
  }
  & > i {
    font-size: 6em;
    color: gray;
    margin: 20px;
  }

  & > h1 {
    margin: 30px;
    font-weight: 500;
    color: gray;
  }
`;

export const OurTeamSection = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 2.5em;
    color: rgb(255, 219, 168);
    margin: 50px;
  }

  & > .TeamSectionContainer {
  display: flex;
  margin: 20px;
  min-height: 550px;
  @media (max-width: 800px) {
    flex-direction: column;

  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  }
`;
export const TeamSectionContainer = styled.div`
  
`;

export const TeamContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  /* border-bottom: solid 2px rgb(252, 185, 91); */
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  gap: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  & > div {
  border: solid 2px rgb(252, 185, 91);
  border-radius: 10px;
  }
  &  img {
    width: 100%;
    height: 75%;
    object-fit: contain;
  }

  &  h1 {
    font-size: 1.3em;
    color: rgb(128, 128, 128);
  }

  &  label {
    color: rgb(252, 187, 94);
  }

  &:hover {
    box-shadow: -5px -2px 8px -1px rgba(135, 135, 135, 0.75);
    -webkit-box-shadow: -5px -2px 8px -1px rgba(135, 135, 135, 0.75);
    -moz-box-shadow: -5px -2px 8px -1px rgba(135, 135, 135, 0.75);
  }
`;

export const Content = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  flex: 1;
  padding: 20px;
  gap: 50px;
  & > h1 {
    font-size: 2.5em;
    color: rgb(252, 185, 91);
  }

  & > p {
    font-size: 1.1em;
    margin: 50px;
    color: rgb(252, 185, 91);
  }

  & > label {
    font-size: 3em;
    margin: 50px;
    color: rgb(252, 185, 91);

  }
`

export const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
    font-size: 1.5em;
    color: rgb(255, 219, 168);
    margin: 30px;

    display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    & {
      margin: 0px;
    }
  }


  & > .ServiceContentContainer {
    display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
  }
  `

export const FeedbackContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  max-width: 280px;
  padding: 20px;
  background: rgb(255, 247, 236);
  border-radius: 20px;
  margin: 50px;
  max-height: 350px;
  min-height: 350px;
  @media (max-width: 900px) {
    & {
      max-width: 50%;
    }
  }

  @media (max-width: 700px) {
    & {
      max-width: 80%;
      padding: 5px;
    }
  }

  @media (max-width: 600px) {
    & {
      max-width: 100%;
    }
  }
`

export const User = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
  align-items: center;
  & > img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  }

  & > span {
    font-size: 0.6em;
    margin-inline: 10px;
    align-self: flex-start;
  }

  & > i {
    font-size: 0.6em;
    color: rgb(248,173,62);
    align-self: flex-start;
    margin-inline: 2px;
  }
`

export const Comments = styled.p`
  text-overflow: ellipsis;
  white-space: pre-wrap ;
  overflow: hidden;
  font-size: 0.6em;
  text-align: start;
  margin: 10px;
`