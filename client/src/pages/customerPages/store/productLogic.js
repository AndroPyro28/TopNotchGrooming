import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartReducer,
  removeTocartReducer,
  updateToCartReducer,
} from "../../../redux/cartSlice";

function ProductLogic() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addToCart = async (product) => {
    try {
      const res = await axios.post(
        "/api/customer/addItemsToCart",
        { id: product.id },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );

      const { msg, success } = res.data;
      if (msg?.includes("session expired") && !success) {
        return window.location.reload();
      }

      dispatch(addToCartReducer({ product, data: res.data }));
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    addToCart,
  };
}

export default ProductLogic;
