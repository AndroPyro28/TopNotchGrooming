import React, { useEffect, useState } from "react";
import {
  CardInput,
  CartInputContainer,
  CheckoutDetailsContainer,
  CheckOutDetails,
  CheckOutButton,
} from "../../../pages/customerPages/cart/cartComponents";
import axios from "axios";
import Cookies from "js-cookie";
import shopingCartLogic from "../logic/shopingCartLogic";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
function MasterCard({ items, totalAmount, toast}) {

  const { } = shopingCartLogic();

  const checkout = async () => {
    try {
      if(totalAmount <= 0) {
        return toast('Checkout an item first', {type:"info"})
      }
      const checkoutProducts = items.filter(item => item.purchase);
      const res = await axios.post(
        `/api/customer/checkout/card`,
        {
          checkoutProducts,
          totalAmount
        },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const {success, msg, proceedPayment, method, checkoutUrl, orderId} = res.data;

      if(!success && msg?.includes('session expired')) {
        return window.location.reload();
      }

      if(!proceedPayment) {
        return toast(msg, {type: 'warning'})
      }

      localStorage.setItem('onCheckoutProducts', JSON.stringify({checkoutProducts, method, orderId, totalAmount}));
  
      window.location.assign(checkoutUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
      <CheckOutButton onClick={checkout}>
        <span class="check__out__price">
          {productPriceFormatter(totalAmount)}
        </span>
        <span class="check__out__proceed">
          Checkout <i class="fa-solid fa-arrow-right"></i>
        </span>
      </CheckOutButton>
  );
}

export default MasterCard;
