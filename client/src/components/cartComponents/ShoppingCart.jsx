import React from "react";
import {
  ShoppingCartContainer,
  ShoppingCartDetails,
  ProductListContainer,
} from "../../pages/customerPages/cart/cartComponents";
import Sign_Products from "../sign/Sign_Products";
import ProductItem from "./ProductItem";

function ShoppingCart({items, setItems}) {
  
  return (
    <ShoppingCartContainer>
      <h2>
        <i class="fa-solid fa-cart-shopping"></i> &nbsp; Your Shopping Cart
      </h2>

      <ShoppingCartDetails>
        <small>You have {items?.length} items in your cart</small>
        <small>*Select the items you want to purchase*</small>
      </ShoppingCartDetails>

      <ProductListContainer>
        {items?.length > 0 ? (
          items?.map((product) => (
            <ProductItem key={product.id} product={product} setItems={setItems} />
          ))
        ) : (
          <Sign_Products />
        )}
      </ProductListContainer>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
