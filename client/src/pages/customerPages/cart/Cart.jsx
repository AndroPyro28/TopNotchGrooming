import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardDetails from "../../../components/cartComponents/CardDetails";
import ShoppingCart from "../../../components/cartComponents/ShoppingCart";
import { ToastContainer, toast } from "react-toastify";

import {
  MainContainer,
  GlobalStyles,
  PaymentSectionWrapper,
  PaymentSectionContainer,
} from "./cartComponents";

import BillingModal from "../../../components/modals/customer_modals/billingModal/BillingModal";

function Cart() {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("card");

  const navigate = useNavigate();
  const [openBilling, setOpenBilling] = useState(false)

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.removeItem("onCheckoutProducts");
    setItems([]);
    (async () => {
      setItems(cart);
    })();
  }, [cart]);

  return (
    <MainContainer>
      <ToastContainer autoClose={1500} />

      {
        openBilling &&  <BillingModal 
          items={items}
          totalAmount={totalAmount}
          paymentType={paymentType}
          setOpenBilling={setOpenBilling}
      />
      }

      <GlobalStyles />
      <PaymentSectionWrapper>
        <h3>
          <i className="fa-solid fa-arrow-left backBtn" onClick={() => navigate(-1)}></i>
        </h3>
        <PaymentSectionContainer>
          
          <ShoppingCart items={items} setItems={setItems} />

          <CardDetails
          setOpenBilling={setOpenBilling}
            items={items}
            setItems={setItems}
            toast={toast}
            setTotalAmount={setTotalAmount}
            totalAmount={totalAmount}
            paymentType={paymentType}
            setPaymentType={setPaymentType}
          />
          {/* i will move this component in to modal when it become a mobile responsive */}
        </PaymentSectionContainer>
      </PaymentSectionWrapper>
    </MainContainer>
  );
}

export default Cart;
