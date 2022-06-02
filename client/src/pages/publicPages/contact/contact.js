import styled from "styled-components";

export const ContactPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

`;

export const MapContainer = styled.div`
  height: 350px;
  width: 100%;
`;

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  background: rgb(255, 242, 223);

  & > img {
    width: 60%;
  height: 500px;
  right: 50px;
  position: absolute;

  @media (max-width: 900px) {
    display: none;
  }
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  text-align: start;
  transform: translateX(-120px);

  & > h1 {
    font-size: 40px;
    margin-bottom: 40px;
    margin-top:20px;
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;
  }

  & div {
    margin-top: 20px;
  }

  & > .address_and__phone {
    display: flex;
    justify-content: space-between;

    & > div > h3 {
      font-size: 15px !important;
    }

    & > div > p {
      font-size: 13px !important;
    }
  }

  & > .email > p {
    font-size: 13px !important;
  }

  & > .email > h3 {
    font-size: 15px !important;
  }

  @media (max-width: 900px) {
    & {
      width: 50%;
      transform: translateX(10px);
    }
  }

  @media (max-width: 700px) {
    & {
      width: 70%;
      transform: translateX(10px);
    }
  }

  @media (max-width: 500px) {
    & {
      width: 90%;
      transform: translateX(10px);
    }
  }

  @media (max-width: 350px) {
    & {
      margin-top: 80px;
    }

    & > h1 {
      font-size: 2em;
    }
  }
`;

export const DogImage = styled.img`
  
`;

export const GetInTouchContainer = styled.section`
  text-align: center;

  & > h1 {
    margin: 50px;
    font-size: 30px;
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;
  }

  & > p {
    color: gray;
  }

  & > button {
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 15px;
    border: solid 1px rgb(117, 105, 76);
    color: aliceblue;
    background: rgb(223, 197, 138);
    margin-top: 50px;
  }

  @media (max-width: 370px) {
    & > h1 {
      font-size: 1.3em;
    }

    & > p {
      font-size: 0.8em;
    }
  }
`;

export const OurLocationContainer = styled.section`
  margin-top: 100px;
  text-align: center;

  & > h1 {
    margin: 50px;
    font-size: 30px;
    font-family: "league spartan", sans-serif;
    text-transform: uppercase;
  }

  @media (max-width: 370px) {
    & > h1 {
      font-size: 1.3em;
    }
  }
`;
