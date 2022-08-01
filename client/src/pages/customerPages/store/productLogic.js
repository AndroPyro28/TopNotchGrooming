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
  const {socket} = useSelector(state => state);
  const dispatch = useDispatch();
  const addToCart = async (product) => {
    try {
      
      // socket?.emit('someEvent', ++counter);

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
      if (msg?.includes("session expired") && !success)
        return window.location.reload();

      const newProduct = JSON.parse(JSON.stringify(product));
      dispatch(addToCartReducer({ product: newProduct, data: res.data }));
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    addToCart,
  };
}

export default ProductLogic;
