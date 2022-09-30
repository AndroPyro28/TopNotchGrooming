import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CodCardButton} from "../../../pages/customerPages/cart/cartComponents";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
function Cod({ items, totalAmount, toast, setOpenBilling}) {
  const navigate = useNavigate();
  
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
      <CodCardButton onClick={checkout}>
        <span class="check__out__price">
          {productPriceFormatter(totalAmount)}
        </span>
        <span class="check__out__proceed">
          Checkout <i class="fa-solid fa-arrow-right"></i>
        </span>
      </CodCardButton>
    );
}

export default Cod;
