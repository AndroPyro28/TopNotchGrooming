import React from "react";

import {
  OrderedItemContainer,
  Img,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductQuantity,
} from "./components";
import productPriceFormmater from "../../../helpers/ProductPriceFormatter";
function Item({ data }) {
  return (
    <OrderedItemContainer>
      <Img src={data?.imageUrl} />

      <ProductName> {data?.product_name} </ProductName>
      <ProductDescription> {data?.product_description} </ProductDescription>
      <ProductQuantity>Qty: {data?.quantity} </ProductQuantity>
      <ProductPrice>
        {productPriceFormmater(data?.quantity * data?.product_price)}
      </ProductPrice>
    </OrderedItemContainer>
  );
}

export default Item;
