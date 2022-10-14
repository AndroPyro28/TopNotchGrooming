import productLogic from "./productLogic";
import {
  ProductItemName,
  ProductItemDescription,
  ProductItemPrice,
  ProductItem,
  ProductItemImg,
} from "./storeComponents";
import { toast } from "react-toastify";
import { useState } from "react";
function Product({ product, isOutOfStock }) {
  const [disable, setDisable] = useState(false);

  const { addToCart } = productLogic({ toast, setDisable });
  return (
    <ProductItem isOutOfStock={isOutOfStock}>
      <ProductItemImg src={product?.product_image_url} />
      <ProductItemName>{product?.product_name}</ProductItemName>
      <small>
        For {product?.pet_type}s {product.age_limit} old
      </small>
      <ProductItemDescription>
        {product?.product_description}
      </ProductItemDescription>

      <ProductItemPrice>₱ {product?.product_price}</ProductItemPrice>
      <span className={`add__to__cart ${disable ? `disable` : ``}`} onClick={() => addToCart(product)} >
        <i className="fa-solid fa-cart-plus"></i>{" "}
        <span>{isOutOfStock ? "Out Of Stock" : "Add To Cart"} </span>
      </span>
    </ProductItem>
  );
}

export default Product;
