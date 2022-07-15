import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
function PaymentSuccess() {
  const { search } = useLocation();
  const hashId = search.replace("?hash=", "");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const onCheckoutProducts = JSON.parse(
          localStorage.getItem("onCheckoutProducts")
        );

        if (
          onCheckoutProducts?.length <= 0 ||
          onCheckoutProducts == undefined
        ) {
          return ;
        }
        localStorage.removeItem("onCheckoutProducts");

        const res = await axios.post(
          `/api/customer/payment`,
          onCheckoutProducts,
          {
            headers: {
              userinfo: Cookies.get("userToken"),
            },
          }
        );
        const { msg, success } = res.data;
        if (!success && msg.includes("session expired")) {
          toast(msg, { type: "error" });
          return window.location.reload();
        }
        toast(msg, { type: "success" });

        setTimeout(() => {
          navigate("/customer/profile", { replace: true });
        }, 2500);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <ToastContainer autoClose={1500} />
      PaymentSuccess your hash id is {hashId}
    </div>
  );
}

export default PaymentSuccess;
