import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import {
  PaymentSuccessContainer,
  Title,
  Line,
  TransactionNumber,
  PaymentData,
  ProceedButton,
} from "./components";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
import GetDateToday from "../../../helpers/DateToday";
import CustomAxios from "../../../customer hooks/CustomAxios";

function PaymentInfo() {
  const { search } = useLocation();

  const navigate = useNavigate();

  const [transactionId, setTransactionId] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (
          localStorage.getItem("onCheckoutProducts") == undefined ||
          !localStorage.getItem("onCheckoutProducts")
        ) {
          return;
        }

        const checkoutInfo = JSON.parse(
          localStorage.getItem("onCheckoutProducts")
        );

        localStorage.removeItem("onCheckoutProducts");

        const {
          method,
          orderId,
          totalAmount,
          // checkoutProducts,
          // billingInfo,
          // proceedPayment,
        } = checkoutInfo;

          setTotalAmount(totalAmount);
          setTransactionId(orderId);
          setPaymentMethod(method);

          const response = CustomAxios({
            METHOD: "POST",
            uri: `/api/customer/payment`,
            values: checkoutInfo,
          });

          const { msg, success } = response;
          if (!success && msg?.includes("session expired")) {
            toast(msg, { type: "error" });
            return window.location.reload();
          }

          toast(msg, { type: "success" });
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  if (totalAmount == 0 || transactionId == null || paymentMethod == null) {
    return navigate("/customer/cart");
  }

  return (
    <PaymentSuccessContainer>
      <ToastContainer autoClose={1500} />

      <i className="fa-solid fa-circle-check"></i>

      <Title>
        <h1>Payment Successful</h1>
        <p>Your payment has been processed!</p>
        <small>Details of transaction are included below</small>
      </Title>

      <Line />

      <TransactionNumber>Transaction ID: {transactionId}</TransactionNumber>

      <PaymentData>
        <span>TOTAL AMOUNT PAID</span>
        <strong>{productPriceFormatter(totalAmount)}</strong>
      </PaymentData>

      <Line />

      <PaymentData>
        <span>payed by</span>
        <strong>{paymentMethod}</strong>
      </PaymentData>

      <Line />

      <PaymentData>
        <span>transaction date</span>
        <strong>{GetDateToday()}</strong>
      </PaymentData>

      <ProceedButton onClick={() => navigate("/customer/cart")}>
        Proceed
      </ProceedButton>
    </PaymentSuccessContainer>
  );
}

export default PaymentInfo;
