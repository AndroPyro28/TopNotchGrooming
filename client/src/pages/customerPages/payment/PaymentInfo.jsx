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
import Cookies from "js-cookie";
import Loader from "../../../components/loader/Loader"
function PaymentInfo() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        if (
          localStorage.getItem("onCheckoutProducts") == undefined ||
          !localStorage.getItem("onCheckoutProducts")
        ) {
          return;
        }

        const checkoutInfo = JSON.parse(
          localStorage.getItem("onCheckoutProducts")
        );

        if(checkoutInfo instanceof SyntaxError) {
          return window.location.assign('/customer/payment');
        }

        if(checkoutInfo) {
          const { method, orderId, totalAmount } = checkoutInfo
          const inFiveMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
          Cookies.set('onCheckoutProducts', JSON.stringify({ method, orderId, totalAmount }), {
            expires:inFiveMinutes
          })
        }

        localStorage.removeItem("onCheckoutProducts");

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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if(loading) return <Loader bg="rgba(0,0,0,0.5)" />

  try {
    const checkoutSummary = JSON.parse(Cookies.get('onCheckoutProducts'))
  } catch (error) {
    console.log('error json parse here')

    return navigate("/customer/cart");
  }

  const {
    method,
    orderId,
    totalAmount,
  } = JSON.parse(Cookies.get('onCheckoutProducts'));

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

      <TransactionNumber>Transaction ID: {orderId}</TransactionNumber>

      <PaymentData>
        <span>TOTAL AMOUNT PAID</span>
        <strong>{productPriceFormatter(totalAmount)}</strong>
      </PaymentData>

      <Line />

      <PaymentData>
        <span>payed by</span>
        <strong>{method}</strong>
      </PaymentData>

      <Line />

      <ProceedButton onClick={() => navigate("/customer/cart")}>
        Proceed
      </ProceedButton>
    </PaymentSuccessContainer>
  );
}

export default PaymentInfo;
