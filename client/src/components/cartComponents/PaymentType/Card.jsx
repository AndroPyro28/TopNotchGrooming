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
function MasterCard({ items, totalAmount, toast}) {

  const { productPriceFormatter } = shopingCartLogic();

  const checkout = async () => {
    try {
      if(totalAmount <= 0) {
        return toast('Checkout an item first', {type:"info"})
      }
      const res = await axios.post(
        `/api/customer/checkout/card`,
        {},
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const { checkoutUrl } = res.data;
      window.location.assign(checkoutUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(totalAmount);
  return (
      <CheckOutButton onClick={checkout}>
        <span class="check__out__price">
          {productPriceFormatter(totalAmount * 0.01 + totalAmount)}
        </span>
        <span class="check__out__proceed">
          Checkout <i class="fa-solid fa-arrow-right"></i>
        </span>
      </CheckOutButton>
  );
}

export default MasterCard;
