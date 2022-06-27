import React, { useEffect, useState } from "react";
import {
  ShoppingCartContainer,
  ShoppingCartDetails,
  ProductListContainer,
} from "../../pages/customerPages/cart/cartComponents";
import ProductItem from "./ProductItem";

function ShoppingCart({items, setItems}) {
  

  return (
    <ShoppingCartContainer>
      <h2>
        <i class="fa-solid fa-cart-shopping"></i> &nbsp; Your Shopping Cart
      </h2>

      <ShoppingCartDetails>
        <small>You have {items?.length} items in your cart</small>
        <small>**</small>
      </ShoppingCartDetails>

      <ProductListContainer>
        {items?.length > 0 ? (
          items?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <h1>No items in cart</h1>
        )}
      </ProductListContainer>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
