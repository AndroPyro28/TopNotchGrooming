import styled from "styled-components";

export const CustomerNavbarContainer = styled.nav`
  display: flex;
  backdrop-filter: blur(3px);
  background: white;
  /* justify-content: space-between; */
  /* border-bottom: solid 2px rgb(216, 216, 216); */
  /* background: rgb(248, 241, 231); */
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 5;
  /* text-shadow: 1px 2px 3px gray; */
  flex-direction: column;
  /* background: black; */
`;

export const TopNavbar = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 10px;
  margin: 0px;

  @media (max-width: 400px) {
    padding: 0px;
  }
`;

export const BrandLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  transform: translateX(50px);
  color: gray;
  flex: 1;
  & a > img {
    height: 50px;
    width: 50px;
    margin: 5px;
    cursor: pointer;
    background: rgb(255, 231, 147);
    border-radius: 50%;
    padding: 10px;
    object-fit: cover;

    @media (max-width: 400px) {
      height: 40px;
      width: 40px;
      margin: 0px;
    }
  }

  @media (max-width: 400px) {
    transform: translateX(20px);
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  height: 30px;
  flex: 1;
  & > input {
    flex: 1;
    height: 100%;
    border-radius: 5px;
    width: 100%;
    border: solid 2.5px rgb(8, 8, 8);
    font-size: 100%;
    padding-left: 10px;
    outline: none;
  }

  & > button {
    position: relative;
    padding: 17px 20px;
    display: flex;
    align-items: center;
    font-size: 1em;
    background: black;
    color: white;
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: black;
      background: rgb(230, 230, 230);
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const InfoAndCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-overflow: 1px 3px 5px black;
  flex: 1;

  @media (max-width: 950px) {
    justify-content: flex-end;
    margin-inline: 50px;
  }

  @media (max-width: 450px) {
    margin-inline: 10px;
  }
  & a > button {
    display: flex;
    align-items: center;
    padding: 17px 20px;
    font-size: 1em;
    background: white;
    border: solid 2.5px black;
    border-radius: 10px;
    height: 30px;
    margin-right: 50px;
    cursor: pointer;

    @media (max-width: 950px) {
      margin: 20px;
    }

    @media (max-width: 430px) {
      padding: 13px 15px;
      font-size: 0.8em;
    }

    & > .cart__number__item {
      padding: 0px 6px;
      background: rgb(172, 172, 172);
      color: white;
      transition: all 0.3s ease-in-out;
      border-radius: 50%;

      &.active {
        background: rgb(141, 124, 87);
      }
    }

    &:active {
      background: black;
      color: white;
    }
    /* &:hover {
            background: black;
            color: white;
        }

        &:hover > .cart__number__item {
            background: rgb(255, 255, 255);
            color: rgb(2, 2, 2);
        } */
  }

  & a > .userProfile {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 0 5px 0 5px;
    cursor: pointer;
    object-fit: cover;
    border: solid 2px gray;

    @media (max-width: 430px) {
      height: 40px;
      width: 40px;
    }
  }
`;

export const BotNavbar = styled.section`
  margin-top: -5px;
  width: 100%;
  display: flex;
  justify-content: center;

  & > a {
    padding: 10px 20px;
    margin: 5px;
    color: black !important;

    @media (max-width: 580px) {
      & {
        padding: 10px;
      }
    }

    &:hover {
      border-bottom: solid 2px gray;
    }
  }

  @media (max-width: 580px) {
    & > a > span {
      display: none;
    }
  }
`;

export const DropDown = styled.div`
  position: relative;

  & > .dropDownBtn {
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      background: rgb(255, 231, 147);
    }

    @media (max-width: 430px) {
      font-size: 0.7em;
    }
  }

  & > .dropdown__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: #eaeaea;
    margin-left: -50px;
    margin-top: -5px;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
    & > a {
      padding: 10px 20px;
      cursor: pointer;
      color: black;
      &:hover {
        background: gray;
        color: white;
      }
    }
  }
`;

export const CartPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 30%;
  margin-right: 50px;
  right: -30px;
  top: 70px;
  background: white;
  box-shadow: 1px 3px 5px gray;
  border-radius: 10px;
  color: black;
  min-height: 10vh;
  z-index: 10000;

  max-height: 75vh;

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 55%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }

  @media (max-width: 350px) {
    width: 100%;
    margin-right: 30px;
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0vh;
  max-height: 50vh;
  overflow: auto;
  @media (max-width: 550px) {
    font-size: 1em;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  border-bottom: solid 2px lightgray;
  border-width: 80%;
  margin: 10px;
  padding: 10px;
  @media (max-width: 550px) {
    font-size: 1em;
  }
  & > img {
    width: 100px;
    max-height: 80px;
    max-width: 100px;
    margin: 0;
    object-fit: contain;
  }

  & > * {
    flex: 1;
    margin-top: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > i {
    color: red;
    flex: 0.5;
    padding: 10px 0px;
    border-radius: 50%;
    height: fit-content;
    width: fit-content;
    margin-top: 0px;
    cursor: pointer;
    &:hover {
      background: lightgray;
    }
  }
`;

export const ProductName = styled.div`
  font-size: 0.9em;
  flex: 2 !important;
  color: #181818;
  font-weight: 500;
  @media (max-width: 550px) {
    font-size: 0.7em;
  }

  & > small {
    color: gray;
    font-weight: 500;
  }
`;
export const ProductQuantity = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  color: gray;
  @media (max-width: 550px) {
    font-size: 0.7em;
  }
`;
export const ProductPrice = styled.div`
  font-size: 0.9em;
  font-weight: 600;
  color: gray;

  @media (max-width: 550px) {
    font-size: 0.7em;
  }
`;

export const CartPopupBoxContainer = styled.div`
 position: relative;
   height: 100%;
   z-index: 10000;

   & > h1 {
     margin: 20px;
     text-align: start;
     color: #181818;
     @media (max-width:550px) {
      font-size: 1em;
     }
    }
`;

export const CartSummary = styled.div`
  height: 100px;
  text-align: start;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 550px) {
    font-size: 1em;
  }

  & > button {
    padding: 5px;
    border-radius: 10px;
    border: none;
    background: rgb(248,181,81);
    color: white;
    font-size: 0.9em;
    margin: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    @media (max-width: 550px) {
      font-size: 0.8em;
    }
    &:hover {
      background: black;
    }
  }
`;
export const SummaryRow = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  @media (max-width: 550px) {
    font-size: 0.9em;
  }
  & > h1 {
    flex: 1;
    color: #181818;
    @media (max-width: 550px) {
      font-size: 1em;
    }
  }

  & > span {
    flex: 1;
    text-align: end;
    color: #181818;
    @media (max-width: 550px) {
      font-size: 1em;
    }
  }
`;

export const FeedBackButtton = styled.i`

@keyframes animateFeedBackBtn {
  0% {
  transform: scale(1);
  }
  100% {
  transform: scale(1.2);
  }
}

  background: white;
  color: rgb(248, 195, 116);
  padding: 10px;
  border-radius: 50%;
  box-shadow: 1px 3px 5px rgb(46, 46, 46);
  z-index: 5;
  font-size: 2em;
  position: fixed;
  right: 20px;
  top: 150px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  animation: animateFeedBackBtn 1s infinite alternate-reverse;

  &:hover {
    color: rgb(248, 167, 46);
  transform: scale(1.1);
  }
`