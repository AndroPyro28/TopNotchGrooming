import productLogic from "./productLogic";
import {
  ProductItemName,
  ProductItemDescription,
  ProductItemPrice,
  ProductItem,
  ProductItemImg,
} from "./storeComponents";
import { toast } from "react-toastify";
function Product({ product, isOutOfStock }) {
  const { addToCart } = productLogic({ toast });

  return (
    <ProductItem isOutOfStock={isOutOfStock}>
      {/* <ToastContainer autoClose={1500} /> */}
      <ProductItemImg src={product?.product_image_url} />
      <ProductItemName>{product?.product_name}</ProductItemName>
      <small>
        For {product?.pet_type}s {product.age_limit} old
      </small>
      <ProductItemDescription>
        {product?.product_description}
      </ProductItemDescription>

      <ProductItemPrice>₱ {product?.product_price}</ProductItemPrice>
      <span className="add__to__cart" onClick={() => addToCart(product)}>
        <i className="fa-solid fa-cart-plus"></i>{" "}
        <span>{isOutOfStock ? "Out Of Stock" : "Add To Cart"} </span>
      </span>
    </ProductItem>
  );
}

export default Product;
