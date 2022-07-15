import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardDetails from "../../../components/cartComponents/CardDetails";
import ShoppingCart from "../../../components/cartComponents/ShoppingCart";
import {ToastContainer, toast} from "react-toastify"

import {
  MainContainer,
  GlobalStyles,
  PaymentSectionWrapper,
  PaymentSectionContainer,
} from "./cartComponents";
function Cart() {
  
  const [items, setItems] = useState([]);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.removeItem('onCheckoutProducts');
    setItems([]);
    (async () => {
      setItems(cart);
    })();
  }, [cart]);

  return (
    <MainContainer>
      <ToastContainer autoClose={1500}/>

      <GlobalStyles />
      <PaymentSectionWrapper>
        <h3>
          <i className="fa-solid fa-arrow-left backBtn"></i>
        </h3>
        <PaymentSectionContainer>
          <ShoppingCart items={items} setItems={setItems} />
          <CardDetails items={items} setItems={setItems} toast={toast} />
          {/* i will move this component in to modal when it become a mobile responsive */}
        </PaymentSectionContainer>
      </PaymentSectionWrapper>
    </MainContainer>
  );
}

export default Cart;
