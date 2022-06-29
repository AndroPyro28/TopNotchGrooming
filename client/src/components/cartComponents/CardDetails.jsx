import React, { useState } from "react";
import {
  CartDetailsContainer,
  CartTypeContainer,
} from "../../pages/customerPages/cart/cartComponents";
import Gcash from "./PaymentType/Gcash";
import MasterCard from "./PaymentType/MasterCard";
import Paypal from "./PaymentType/Paypal";


function CardDetails({ items, setItems }) {

  const [cartType, setCardType] = useState("mastercard");

  const pickCardType = (cardType) => {
    setCardType(cardType);
  };

  return (
    <CartDetailsContainer>
      <h2>Payment</h2>

      <CartTypeContainer>
        <h4>Choose your prefered payment method</h4>

        <div className="card__type">
          <div
            className={
              cartType === "mastercard" ? `card activeCardPayment` : "card"
            }
            onClick={() => pickCardType("mastercard")}
          >
            <img src="/images/imgbin_mastercard-png.png" />
          </div>

          <div
            className={cartType === "gcash" ? `card activeCardPayment` : "card"}
            onClick={() => pickCardType("gcash")}
          >
            <img src="/images/gcash.png" />
          </div>

          <div
            className={
              cartType === "paypal" ? `card activeCardPayment` : "card"
            }
            onClick={() => pickCardType("paypal")}
          >
            <img src="/images/imgbin_paypal-png.png" />
          </div>
        </div>
      </CartTypeContainer>

      {cartType === "paypal" && <Paypal items={items} />}

      {cartType === "mastercard" && <MasterCard items={items} />}

      {cartType === "gcash" && <Gcash items={items} />}
    </CartDetailsContainer>
  );
}

export default CardDetails;
