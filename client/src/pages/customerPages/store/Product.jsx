import React from "react";
import {
  ProductItemName,
  ProductItemDescription,
  ProductItemPrice,
  ProductItem,
  ProductItemImg,
} from "./storeComponents";
function Product({product}) {
  return (
    <ProductItem>
      <ProductItemImg src={product.productImg} />
      <ProductItemName>{product.productName}</ProductItemName>
      <ProductItemDescription>
        {product.productDesc}
      </ProductItemDescription>
      <ProductItemPrice>₱ {product.productPrice}</ProductItemPrice>
      <span className="add__to__cart">
        <i className="fa-solid fa-cart-plus"></i> <span>Add To Cart</span>
      </span>
    </ProductItem>
  );
}

export default Product;
