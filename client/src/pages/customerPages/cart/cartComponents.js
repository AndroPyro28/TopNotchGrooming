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
  margin-top: -40px;
  margin-bottom: 0;
`;

export const PaymentSectionWrapper = styled.section`
  height: 80%;
  width: 80%;
  display: flex;
  border-radius: 20px;
  background: white;
  flex-direction: column;
  padding: 20px 40px 10px 40px;

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
  }
`;

export const PaymentSectionContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
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
  }
`;

export const ShoppingCartDetails = styled.p`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: gray;
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
  border: ${({isInPurchase}) => isInPurchase ? `#F0AF4C solid 2px` : 'white solid 2px'} ;
  & > .checkbox {
    flex: 1;
    align-self: center;
    color: red;
    font-size: 1.2em;
    cursor: pointer;
    width: fit-content;
    padding: 5px;
    transition: all .3s ease;

    &:hover {
      color: maroon;
    }
  }

  & > .product__image {
    width: 80px;
    height: 100%;
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
    }

    & > h6 {
      font-size: 0.7em;
      color: gray;
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

      &:hover {
        background: white;
      }
    }

    & > .incremeant {
      color: rgb(92, 250, 113) !important;
    }

    & > label {
      color: rgb(87, 86, 86);
    }
  }

  & > .product__price {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 1em;
    font-family: "league spartan", sans-serif;
  }

  & > .addToShop {
    align-self: center;
    padding: 5px;
    /* background: rgb(212, 212, 212); */
    flex: 1;
    border-radius: 20px;
    font-size: 1.5em;
    color: ${({isInPurchase}) => isInPurchase ? `#F0AF4C` : 'rgb(255,231,147)'} ;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
      color: #F0AF4C;
    }

    &:active {
      font-size: 3em;
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
    transition: all .3s ease-out;
    border-radius: 5px;
    &:hover {
      background: #F0AF4C;
    }
  }
`;

export const CartDetailsContainer = styled.div`
  flex: 1;
  background: rgb(120, 155, 160);
  background: rgb(86, 92, 186);
  width: 100%;
  height: 100%;
  transform: translateY(-40px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
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
    font-size: 0.7em;
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
        border-color: white;
      }
      &.activeCardPayment {
        border-color: white;
      }

      & > img {
        width: 50px;
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
  margin: 5px;
`;

export const CheckOutDetails = styled.div`
  display: flex;
  width: 100%;
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
  margin: 5px !important;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: black;
    color: white;
  }
`;
