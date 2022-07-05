import React, { useState, useEffect } from "react";
import {
  CartDetailsContainer,
  CartTypeContainer,
} from "../../pages/customerPages/cart/cartComponents";
import {
  CheckoutDetailsContainer,
  CheckOutDetails,
} from "../../pages/customerPages/cart/cartComponents";
import Gcash from "./PaymentType/Gcash";
import Card from "./PaymentType/Card";
import Paypal from "./PaymentType/Paypal";
import shopingCartLogic from "./logic/shopingCartLogic";

function CardDetails({ items, setItems, toast }) {

  const [cartType, setCardType] = useState("card");

  const pickCardType = (cardType) => {
    setCardType(cardType);
  };

  const [totalAmount, setTotalAmount] = useState(0);
  const { calculateTotalAmount, productPriceFormatter } = shopingCartLogic();

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(items));
  }, [items]);

  return (
    <CartDetailsContainer>
      <h2>Payment</h2>

      <CartTypeContainer>
        <h4>Choose your prefered payment method</h4>

        <div className="card__type">
          <div
            className={
              cartType === "card" ? `card activeCardPayment` : "card"
            }
            onClick={() => pickCardType("card")}
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

      <CheckoutDetailsContainer>
        <CheckOutDetails>
          <span class="leftDetails">Subtotal</span>
          <span class="rightDetails subtotalPrice">
            {productPriceFormatter(totalAmount)}
          </span>
        </CheckOutDetails>

        <CheckOutDetails>
          <span class="leftDetails">Shipping</span>
          <span class="rightDetails shippingPrice">
            {productPriceFormatter(totalAmount * 0.01)}
          </span>
        </CheckOutDetails>

        <CheckOutDetails>
          <span class="leftDetails">Total</span>
          <span class="rightDetails totalAmount">
            {productPriceFormatter(totalAmount * 0.01 + totalAmount)}{" "}
          </span>
        </CheckOutDetails>
      </CheckoutDetailsContainer>

      {cartType === "paypal" && <Paypal items={items} totalAmount={totalAmount} toast={toast} />}

      {cartType === "card" && <Card items={items} totalAmount={totalAmount} toast={toast} />}

      {cartType === "gcash" && <Gcash items={items} totalAmount={totalAmount} toast={toast} />}
      

    </CartDetailsContainer>
  );
}

export default CardDetails;
