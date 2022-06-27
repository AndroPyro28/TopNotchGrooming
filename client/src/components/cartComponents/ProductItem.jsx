import React from 'react'
import {ProductItemContainer} from "../../pages/customerPages/cart/cartComponents";
function ProductItem({product}) {
  const {product_image_url, product_name, product_description, product_price, quantity} = product;
  return (
    <ProductItemContainer>
          <i className="fa-solid fa-basket-shopping addToShop"></i> 
          <img src={product_image_url} className="product__image" />

          <div className="product__name">
            <h5>{product_name}</h5>
            <h6>{product_description}</h6>
          </div>

          <div className="product__quantity">
            <button className="decremeant">-</button>
            <label>{quantity}</label>
            <button className="incremeant">+</button>
          </div>

          <h5 className="product__price">₱ {product_price}</h5>

          <h5 className="product__price">₱ {product_price * quantity}</h5>

          <i class="fa-solid fa-circle-xmark checkbox"></i>

        </ProductItemContainer>
  )
}

export default ProductItem