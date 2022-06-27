import React from "react";
import CardDetails from "../../../components/cartComponents/CardDetails";
import ShoppingCart from "../../../components/cartComponents/ShoppingCart";
import {
  MainContainer,
  GlobalStyles,
  PaymentSectionWrapper,
  PaymentSectionContainer,
} from "./cartComponents";
function Cart() {
  return (
    <MainContainer>
      <GlobalStyles />
      <PaymentSectionWrapper>
        <h3>
          <i className="fa-solid fa-arrow-left backBtn"></i>
        </h3>

        <PaymentSectionContainer>
          <ShoppingCart /> {/* Shoping cart component */}
          <CardDetails /> {/* Card details component */}{" "}
          {/* i will move this component in to modal when it become a mobile responsive */}
        </PaymentSectionContainer>
      </PaymentSectionWrapper>
    </MainContainer>
  );
}

export default Cart;
