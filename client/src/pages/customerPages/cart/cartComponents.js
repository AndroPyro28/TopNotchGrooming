import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: rgb(230,233,234);
    overflow-x: hidden;
  }
  `;

export const MainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: -55px;
  margin-bottom: 0;
`;

export const PaymentSectionWrapper = styled.section`
  height: 80%;
  width: 80%;
  display: flex;
  border-radius: 20px;
  background: white;
  flex-direction: column;
  padding: 20px 20px 10px 40px;


  @media (max-width:1200px) {
    width: 90%;
  }

  @media (max-width:1000px) {
    width: 100%;
  }

  @media (max-width:430px) {
    padding: 0px;
  }


  & > h3 {
    color: rgb(133, 133, 133);
    margin: 3px;
    font-size: 15px;
    border-radius: 50%;
    padding: 3px 7px 3px 7px;
    width: fit-content;
    background: rgb(221, 221, 221);
    transform: translate(-30px, -10px);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: white;
      background: rgb(153, 153, 153);
    }

    @media (max-width: 430px) {
      margin: 50px;
    }
  }
`;

export const PaymentSectionContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;

  @media (max-width:970px) {
    flex-direction: column;
  }

`;
export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 103%;
  flex: 2;
  transform: translateY(-10px);

  & > h2 {
    margin: 5px;
    color: rgb(92, 92, 92);
    
    @media (max-width:600px) {
      margin: 15px;
      font-size: 1.2em;
    }
  }
`;

export const ShoppingCartDetails = styled.p`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: gray;
  overflow-x: hidden;

  @media (max-width:600px) {
    & > small {
      font-size: 0.7em;
    }
  }
`;

export const ProductListContainer = styled.div`
  height: 80%;
  background: rgb(230, 233, 234);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  overflow: auto;
  padding-block: 5px;
  box-shadow: -1px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 11px 0px rgba(0, 0, 0, 0.75);

  & > h2 {
    margin: 50px;
    color: gray;
  }
`;

export const ProductItemContainer = styled.figure`
  display: flex;
  width: 90%;
  background: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  max-height: 90px;
  border: ${({ isInPurchase }) =>
    isInPurchase ? `#F0AF4C solid 2px` : "white solid 2px"};
  & > .checkbox {
    flex: 1;
    align-self: center;
    color: red;
    font-size: 1.2em;
    cursor: pointer;
    width: fit-content;
    padding: 5px;
    transition: all 0.3s ease;

    &:hover {
      color: maroon;
    }
  }

  & > .product__image {
    width: 80px;
    height: 100%; 
    object-fit: cover;

    @media (max-width:600px) {
      width: 50px;
    }
  }

  & > .product__name {
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1.5;
    overflow: hidden;
    & > h5 {
      font-size: 1em;
      color: rgb(59, 59, 59);
      @media (max-width:500px) {
        font-size: 0.8em;
      }

    }

    & > h6 {
      margin: 5px;
      font-size: 0.7em;
      color: gray;

      @media (max-width:500px) {
        font-size: 0.6em;
      }
    }
  }

  & > .product__quantity {
    display: flex;
    flex: 1;
    align-items: center;



    & > button {
      height: fit-content;
      margin: 5px;
      border: none;
      color: gray;
      padding: 5px;
      font-size: 1em;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 900;
      background: none;
      @media (max-width:500px) {
        font-size: 0.8em;
      }

      &:hover {
        background: white;
      }
    }

    & > .incremeant {
      color: rgb(92, 250, 113) !important;
    }

    & > label {
      color: rgb(87, 86, 86);

      @media (max-width:500px) {
        font-size: 0.9em;
      }
    }
  }

  & > .product__price {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 1em;
    font-family: "league spartan", sans-serif;
    @media (max-width:500px) {
        font-size: 0.8em;
      }
  }

  & > .quantity__details {
    @media (max-width:650px) {
      display: none;
    }
  }

  & > .addToShop {
    align-self: center;
    padding: 5px;
    /* background: rgb(212, 212, 212); */
    flex: 1;
    border-radius: 20px;
    font-size: 1.5em;
    color: ${({ isInPurchase }) =>
      isInPurchase ? `#F0AF4C` : "rgb(255,231,147)"};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #f0af4c;
    }

    &:active {
      font-size: 3em;
    }

    @media (max-width:600px) {
    font-size: 1em;

    }
  }

  & > .productShopAdded {
    color: rgb(89, 180, 89) !important;
    background: rgb(255, 255, 255);
  }

  & > .removeProduct {
    font-size: 10px;
    color: red;
    cursor: pointer;
    padding: 5px;
    height: fit-content;
    transition: all 0.3s ease-out;
    border-radius: 5px;
    
    @media (max-width:600px) {
      font-size: 0.5em;
    }
    &:hover {
      background: #f0af4c;
    }
  }
`;

export const CartDetailsContainer = styled.div`
  flex: 1;
  background: rgb(86, 92, 186);
  width: 100%;
  transform: translateY(25px);
  margin: 20px;
  height: fit-content;
  min-height: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 10px;
  overflow-y: auto;

  @media (max-width:970px) {
    margin: 0px;
    width: 50%;
  }

  @media (max-width:700px) {
    margin: 0px;
    width: 60%;
  }

  @media (max-width:600px) {
    margin: 0px;
    width: 70%;
  }

  @media (max-width:450px) {
    margin: 0px;
    width: 80%;
  }
  @media (max-width:350px) {
    margin: 0px;
    width: 95%;
  }
  & > h2 {
    color: white;
    align-self: flex-start;
    margin: 5px;
  }
`;

export const CartTypeContainer = styled.div`
  margin: 5px;
  & > h4 {
    color: white;
    font-size: 0.9em;
    margin: 5px;
  }

  & > .card__type {
    display: flex;
    justify-content: center;

    & > .card {
      display: flex;
      align-items: center;
      margin: 5px;
      border-radius: 5px;
      padding: 5px;
      border: solid 2px rgb(146, 146, 146);
      cursor: pointer;
      transition: all 0.3s ease-in;
      cursor: pointer;
      
      &:hover {
        border-color: lightgray;
      }
      &.activeCardPayment {
        border-color: white;
      }

      & > img {
        width: 60px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
`;
export const CardInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 6px;
  margin-bottom: 6px;

  & > label {
    font-size: 0.7em;
    color: white;
    font-weight: 500;
    text-align: start;
  }

  & > .input {
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
  }
`;

export const CartInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;

  & > .cart__input {
    display: flex;
    align-items: center;
    & > label {
      text-align: center !important;
    }
    & > .input {
      width: 85%;
    }
  }
`;

export const CheckoutDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: white;
  font-size: 0.8em;
  margin-top: 30px;
`;

export const CheckOutDetails = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.2em;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CheckOutButton = styled.button`
  width: 90%;
  padding: 13px;
  border-radius: 10px;
  background: rgb(67, 189, 245);
  border: none;
  color: white;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  margin-block: 20px !important;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: black;
    color: white;
  }
`;
