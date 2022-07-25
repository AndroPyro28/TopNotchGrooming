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
function MasterCard({ items, totalAmount, toast, setOpenBilling}) {

  const { } = shopingCartLogic();

  const checkout = async () => {
    try {
      if(totalAmount <= 0) {
        return toast('Checkout an item first', {type:"info"})
      }
      setOpenBilling(true)
  
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
