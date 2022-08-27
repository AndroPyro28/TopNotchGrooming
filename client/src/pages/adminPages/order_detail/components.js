import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        text-align: start;
    }
`;
export const OrderNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: solid 1px lightgray;
  border-left: none;
  background: rgb(255, 255, 255) !important;
  border-right: none;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  & > h3 {
    color: rgb(50, 63, 75);
    font-family: "poppins", sans-serif;

    & > span {
      color: rgb(107, 153, 255);
    }
  }

  & > small {
    color: gray;
    font-size: 0.7em;
  }
`;

export const OrderDetailsContainer = styled.section`
  display: flex;
  background: rgb(255, 255, 255) !important;
  color: rgb(50, 63, 75);
  @media (max-width:950px) {
    flex-direction: column;
  }
`;

export const OrderedItemsContainer = styled.div`
  border: solid 1px lightgray;
  min-height: 28rem;
  border-radius: 10px;
  margin: 20px 10px 20px 20px;
  flex: 2.5;
  position: relative;
  padding-bottom: 70px;
  overflow: auto;

`;

export const OrderedProducts = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto !important;
  height: 320px;
`;

export const OrderedProduct = styled.div`
  display: flex;
  align-items: center;
  max-height: 70px;
  margin: 10px;

  & > .product__image {
    width: 90px;
    max-height: 65px;
    margin: 10px;
    border-radius: 10px;
    object-fit: contain;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductName = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  & > .detail1 {
    font-weight: 600;
    font-size: 0.9em;
    margin: 3px;
    font-weight: 500;
    align-self: start;
  }

  & > .detail2 {
    color: gray;
    margin: 3px;
    font-size: 0.7em;
    align-self: start;

  }
`;

export const ProductCalculation = styled.div`
  flex: 1;
  font-weight: 500;

  @media (max-width:600px) {
    display: none;
  }
`;

export const ProductPrice = styled.div`
  flex: 1;
  font-weight: 700;
`;

export const OrderSummary = styled.section`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  border-top: solid 1px lightgray;
  background: white;
`;
export const OrderCalculation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;

  & > div {
    &:nth-child(1) {
      font-weight: 700;
    }
  }
`;
export const OrderedItemsHeader = styled.div`
  border-bottom: solid 1px lightgray;
  /* width: 95.5%; */
  padding: 10px 20px;
  color: rgb(50, 63, 75);
  margin-bottom: 15px;

  & > h3 {
    & > small {
      font-size: 0.7em;
      color: gray;
      font-weight: 100;
    }
  }
`;

export const OrderStatusContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: solid 1px lightgray;
  margin: 20px 20px 20px 10px;
  border-radius: 10px;
  position: relative;

  & > h3 {
    padding: 10px 20px;
    color: rgb(50, 63, 75);
    text-align: center;
    border-bottom: solid 1px lightgray;
  }

  & > button {
    width: fit-content;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;

    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background:  rgb(68,215,123);
    background-color:  rgb(68,215,123);
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #777777;
    font-size: 15px;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;
    transition: all 0.3s ease;
    color: white;

    &:active {
      background: rgb(135,153,255);
    }

    &:disabled {
      background: rgb(163,191,255);
      cursor: default;
    }

    @media (max-width:950px) {
      position: relative;
      margin: 50px 20px 20px 20px;
    }
  }
`;

export const OrderStatus = styled.div`
  @keyframes animateStatus {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }

  &.notActive {
    opacity: 0.5;
  }

  &.completed {
    font-weight: 1000;
    
  }
  &.active {
    animation: animateStatus infinite 700ms alternate ease-out;
    font-weight: 1000;

    &::before {
      content: ">";
    }
  }

  display: flex;
  align-items: center;
  margin: 10px;
  width: 100%;

  & > i {
    padding: 15px;
    max-width: 18px;
    max-height: 20px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: solid 2px rgb(150, 182, 255);
    color: rgb(150, 182, 255);
    margin: 10px;
  }
`;

export const OrderStatusInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin: 3px;
    font-weight: 600;

    & > i {
      color: rgb(187, 187, 187);
    }

    & > .completed {
      color: rgb(68, 215, 123);
    }
  }

  & > small {
    margin: 3px;
    color: gray;
    font-size: 0.7em;
  }
`;

export const CustomerDetailsContainer = styled.section`
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
  @media (max-width:950px) {
    flex-direction: column;
  }
`;

export const CustomerDetails = styled.div`
  flex: 2.5;
  /* background: black; */
  margin-right: 20px;
  border-radius: 10px;
  border: solid 1px rgb(211, 211, 211);
  padding-bottom: 50px;
  color: rgb(81, 92, 102);

  

  & > h3 {
    text-align: start;
    padding: 10px 20px;
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-bottom: 20px;
  }
`;

export const CustomerInfoContainer = styled.div`
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  text-align: start;
  @media (max-width:700px) { 
    flex-direction :column ;
  }
  & > .customer__info {
    flex: 1;
    margin: 8px 10px;
  }
`;

export const ShippingDetails = styled.div`

@keyframes animateStatus {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }

  flex: 1;
  margin-right: 20px;
  border: solid 1px rgb(211, 211, 211);
  color: rgb(81, 92, 102);
  border-radius: 10px;
  /* background: gray; */
  display: flex;
  flex-direction: column;

  & > h3 {
    padding: 10px 20px;
    border-bottom: solid 1px rgb(211, 211, 211);
  }

  & :is(h4, i) {
    text-align: center;
    margin: 20px;
  }

  & > i {
    font-size: 8em;
    animation: animateStatus infinite 700ms alternate ease-out;
    color: rgb(150, 182, 255);
  }
`;
