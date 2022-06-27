import React, { useState } from "react";
import {
  CartDetailsContainer,
  CartTypeContainer,
} from "../../pages/customerPages/cart/cartComponents";
import MasterCard from "./CardType/MasterCard";
import MasterCardInputs from "./CardType/MasterCard";
import Paypal from "./CardType/Paypal";
function CardDetails() {
  const [cartType, setCardType] = useState("");

  const pickCardType = (cardType) => {
    setCardType(cardType);
    console.log(cardType);
  };

  return (
    <CartDetailsContainer>
      <h2>Card Details</h2>

      <CartTypeContainer>
        <h4>Cart Type</h4>

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
            className={
              cartType === "visa" ? `card activeCardPayment` : "card"
            }
            onClick={() => pickCardType("visa")}
          >
            <img src="/images/imgbin_visa-png.png" />
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

      {cartType === "paypal" && <Paypal />}

      {cartType === "mastercard" && <MasterCard />}
    </CartDetailsContainer>
  );
}

export default CardDetails;
