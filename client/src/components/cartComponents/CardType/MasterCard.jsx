import React from "react";
import {
  CardInput,
  CartInputContainer,
  CheckoutDetailsContainer,
  CheckOutDetails,
  CheckOutButton,
} from "../../../pages/customerPages/cart/cartComponents";

function MasterCard() {
  return (
    <>
      <CardInput>
        <label for="">Name on Card</label>
        <input type="text" class="input" placeholder="(e.g John Doe)" />
      </CardInput>

      <CardInput>
        <label for="">Card Number</label>
        <input
          type="number"
          min="1"
          class="input"
          placeholder="(e.g 1111 2222 3333 4444)"
        />
      </CardInput>

      <CardInput>
        <label for="">CVV</label>
        <input
          type="number"
          min="1"
          class="input"
          max="999"
          placeholder="(e.g 123)"
          onchange="(e) => {
        console.log('...')
      }"
        />
      </CardInput>

      <CartInputContainer>
        <CardInput className="cart__input">
          <label for="">Expiration MM</label>
          <select class="input" aria-placeholder="Month">
            <option value="">(e.g Month)</option>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
            <option value="">08</option>
            <option value="">09</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
        </CardInput>

        <CardInput className="cart__input">
          <label for="">Expiration YYYY</label>
          <select class="input">
            <option value="">(e.g Year)</option>
            <option value="">2022</option>
            <option value="">2023</option>
            <option value="">2024</option>
            <option value="">2025</option>
            <option value="">2026</option>
            <option value="">2027</option>
            <option value="">2028</option>
            <option value="">2029</option>
            <option value="">2030</option>
          </select>
        </CardInput>
      </CartInputContainer>

      <CheckoutDetailsContainer>
        <CheckOutDetails>
          <span class="leftDetails">Subtotal</span>
          <span class="rightDetails subtotalPrice">₱ 0.00</span>
        </CheckOutDetails>

        <CheckOutDetails>
          <span class="leftDetails">Shipping</span>
          <span class="rightDetails shippingPrice">₱ 0.00</span>
        </CheckOutDetails>

        <CheckOutDetails>
          <span class="leftDetails">Total</span>
          <span class="rightDetails totalAmount">₱ 0.00</span>
        </CheckOutDetails>
      </CheckoutDetailsContainer>

      <CheckOutButton>
        <span class="check__out__price">₱ 0.00</span>
        <span class="check__out__proceed">
          Checkout <i class="fa-solid fa-arrow-right"></i>
        </span>
      </CheckOutButton>
    </>
  );
}

export default MasterCard;
