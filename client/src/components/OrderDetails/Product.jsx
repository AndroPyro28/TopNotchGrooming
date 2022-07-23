import React from "react";
import { useState } from "react";
import {
  OrderedProduct,
  ProductName,
  ProductCalculation,
  ProductPrice,
} from "../../pages/adminPages/order_detail/components"
import productPriceFormatter from "../../helpers/ProductPriceFormatter"
function Product({data}) {
  const [product, setProduct] = useState(data)

  return (
    <OrderedProduct>
      <img src={product?.imageUrl} alt="" class="product__image" />
      <ProductName>
        <span class="detail1">{product?.product_name}</span>
        <small class="detail2"> {product?.product_description}</small>
      </ProductName>
      <ProductCalculation>₱ {product?.product_price } x {product?.quantity} </ProductCalculation>
      <ProductPrice>{productPriceFormatter(product?.product_price * product?.quantity)}</ProductPrice>
    </OrderedProduct>
  );
}

export default Product;
