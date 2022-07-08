import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productLogic from "./productLogic";
import {
  ProductItemName,
  ProductItemDescription,
  ProductItemPrice,
  ProductItem,
  ProductItemImg,
} from "./storeComponents";
function Product({ product }) {
  const { addToCart } = productLogic();
  
  return (
    <ProductItem>
      <ProductItemImg src={product?.product_image_url} />
      <ProductItemName>{product?.product_name}</ProductItemName>
      <small>
      For {product?.pet_type}s {product.product_age_limit} yrs old
      </small>
      <ProductItemDescription>
         {product?.product_description}
      </ProductItemDescription>
      
      <ProductItemPrice>₱ {product?.product_price}</ProductItemPrice>
        <span className="add__to__cart" onClick={() => addToCart(product)}>
          <i className="fa-solid fa-cart-plus"></i> <span>Add To Cart</span>
        </span>
    </ProductItem>
  );
}

export default Product;
