import React, {useEffect, useState} from "react";
import {
  CartPopupBox,
  CartSummary,
  SummaryRow,
  CartPopupBoxContainer,
  ProductListContainer,
} from "../customer_navbar/navbarComponents";

import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import {useSelector} from "react-redux"
import ShopingCartLogic from "./logic/shopingCartLogic";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";

function CartPopup({ nocartItems }) {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const [items, setItems] = useState([]);
  const {calculateTotalAmountOnCart} = ShopingCartLogic()
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setItems([]);
    (async () => {
      setItems(cart);
      setTotalAmount(calculateTotalAmountOnCart(cart))
    })();
  }, [cart]);

  return (
    <CartPopupBox>
      <CartPopupBoxContainer>
        <h1>You have {nocartItems} items in your cart</h1>

        <ProductListContainer>

        {
            items.length == 0 ? <h3 style={{color:'gray'}}>No items found</h3> 
            : items.map(item => (
                <CartItem key={item.id} data={{setItems, item}} />
            ))
        }
    
        </ProductListContainer>

        <CartSummary>
          <SummaryRow>
            <h1>Cart Total</h1>
            <span style={{fontWeight:"600"}}> {productPriceFormatter(totalAmount)}</span>
          </SummaryRow>

          <button onClick={() => navigate("/customer/cart")}>Checkout</button>
        </CartSummary>
      </CartPopupBoxContainer>
    </CartPopupBox>
  );
}

export default CartPopup;
