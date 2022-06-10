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
      <ProductItemImg src={product?.product_image_url} />
      <ProductItemName>{product?.product_name}</ProductItemName>
      <ProductItemDescription>
        {product?.product_description}
      </ProductItemDescription>
      <ProductItemPrice>₱ {product?.product_price}</ProductItemPrice>
      <span className="add__to__cart">
        <i className="fa-solid fa-cart-plus"></i> <span>Add To Cart</span>
      </span>
    </ProductItem>
  );
}

export default Product;
