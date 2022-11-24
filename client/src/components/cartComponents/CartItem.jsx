import React from "react";
import {
  ProductName,
  ProductQuantity,
  ProductContainer,
  ProductPrice,
} from "../customer_navbar/navbarComponents";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";
import ShopingCartLogic from "./logic/shopingCartLogic";

function CartItem({ data }) {
  const { item, setItems } = data;

  const { removeToCart, incremeantDecreament } = ShopingCartLogic();

  return (
    <ProductContainer>
      <img src={item.product_image_url} />
      <ProductName>
        <div>{item.product_name}</div>
        <br />
        <small>{item.product_description}</small>
      </ProductName>
      <ProductQuantity>
        {" "}
        <button
          className="decremeant"
          onClick={() => incremeantDecreament(item, "decremeant")}
        >
          -
        </button>
        {item.quantity}
        <button
        disabled={item.product_stocks <= item.quantity}
          onClick={() => incremeantDecreament(item, "incremeant")}
          className="incremeant"
        >
          +
        </button>
      </ProductQuantity>
      <ProductPrice>
        {" "}
        {productPriceFormatter(item.product_price * item.quantity)}{" "}
      </ProductPrice>
      {/* <i className="fa-solid fa-trash" onClick={() => removeToCart(item, setItems)}></i> */}
    </ProductContainer>
  );
}

export default CartItem;
