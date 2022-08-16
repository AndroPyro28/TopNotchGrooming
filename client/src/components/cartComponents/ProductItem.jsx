import React from "react";
import { ProductItemContainer } from "../../pages/customerPages/cart/cartComponents";
import shopingCartLogic from "./logic/shopingCartLogic";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";
function ProductItem({ product, setItems }) {
  
  const {
    product_image_url,
    product_name,
    product_description,
    product_price,
    quantity,
    purchase,
  } = product;

  const {
    handleItem,
    removeToCart,
    incremeantDecreament,
  } = shopingCartLogic();

  return (
    <ProductItemContainer isInPurchase={purchase}>
      <i
        className="fa-solid fa-basket-shopping addToShop"
        onClick={() => handleItem(product, setItems)}
      ></i>
      <img src={product_image_url} className="product__image" />
      
      <div className="product__name">
        <h5>{product_name}</h5>
        <h6>{product_description}</h6>
      </div>

      <div className="product__quantity">
        <button
          className="decremeant"
          onClick={() => incremeantDecreament(product, "decremeant")}
        >
          -
        </button>
        <label>{quantity}</label>
        <button
          className="incremeant"
          onClick={() => incremeantDecreament(product, "incremeant")}
        >
          +
        </button>
      </div>

      <h5 className="product__price quantity__details">@ {product_price} x {quantity} </h5>

      <h5 className="product__price">
        {productPriceFormatter(product_price * quantity)}
      </h5>

      <p
        className="removeProduct"
        onClick={() => removeToCart(product, setItems)}
      >
        Remove
      </p>
    </ProductItemContainer>
  );
}

export default ProductItem;
