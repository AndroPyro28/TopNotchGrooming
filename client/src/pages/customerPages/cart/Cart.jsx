import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import CardDetails from "../../../components/cartComponents/CardDetails";
import shopingCartLogic from "../../../components/cartComponents/logic/shopingCartLogic";
import ShoppingCart from "../../../components/cartComponents/ShoppingCart";
import {
  MainContainer,
  GlobalStyles,
  PaymentSectionWrapper,
  PaymentSectionContainer,
} from "./cartComponents";
function Cart() {
  const [items, setItems] = useState([]);

  const cart = useSelector(state => state.cart)
  
  useEffect(() => {
    setItems([]);
    (async () => {
      setItems(cart);
    })();
  }, [cart]);
  
  return (
    <MainContainer>
      <GlobalStyles />
      <PaymentSectionWrapper>
        <h3>
          <i className="fa-solid fa-arrow-left backBtn"></i>
        </h3>

        <PaymentSectionContainer>
          <ShoppingCart items={items} setItems={setItems}/> {/* Shoping cart component */}
          <CardDetails items={items} setItems={setItems}/> {/* Card details component */}{" "}
          {/* i will move this component in to modal when it become a mobile responsive */}
        </PaymentSectionContainer>
      </PaymentSectionWrapper>
    </MainContainer>
  );
}

export default Cart;
