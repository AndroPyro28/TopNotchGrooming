import React, { useEffect, useState } from "react";
import {
  ShoppingCartContainer,
  ShoppingCartDetails,
  ProductListContainer,
} from "../../pages/customerPages/cart/cartComponents";
import shopingCartLogic from "./logic/shopingCartLogic";
import ProductItem from "./ProductItem";

function ShoppingCart() {
  const { fetcher } = shopingCartLogic();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);

    (async () => {
      setItems(await fetcher());
    })();
  }, []);

  return (
    <ShoppingCartContainer>
      <h2>
        <i class="fa-solid fa-cart-shopping"></i> &nbsp; Your Shopping Cart
      </h2>

      <ShoppingCartDetails>
        <small>You have 4 items in your cart</small>
        <small>**</small>
      </ShoppingCartDetails>

      <ProductListContainer>
        {items.length > 0 ? (
          items.map((product) => (
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
