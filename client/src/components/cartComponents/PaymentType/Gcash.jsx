import axios from "axios";
import React, { useEffect, useRef } from "react";

function Gcash({ items }) {
  const anchorRef = useRef(null);
  const gcashPayment = async () => {
    const formData = new FormData();
    formData.append("x-public-key", process.env.REACT_APP_GCASH_PUBLIC_KEY);
    formData.append("amount", "1");
    formData.append("description", "Payment for services rendered");
    formData.append(
      "redirectsuccessurl",
      "http://localhost:3000:3000/customer/payment=success?"
    );

    const res = await axios.post(
      "https://g.payx.ph/payment_request",
      formData,
      {
        withCredentials: false,
      }
    );

    const { data } = res.data;

    const { checkouturl } = data;
    anchorRef.current.href = checkouturl;
    anchorRef.current.click();
  };
  return (
    <div style={{ marginBlock: 50 }}>
      <a style={{ opacity: 0, pointerEvents: "none" }} ref={anchorRef}></a>
      <a
        onClick={gcashPayment}
        class="x-getpaid-button"
        style={{ cursor: "pointer" }}
      >
        <img src="https://getpaid.gcash.com/assets/img/paynow.png" />
      </a>
    </div>
  );
}

export default Gcash;
