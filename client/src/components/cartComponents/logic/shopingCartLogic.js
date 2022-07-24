import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  removeTocartReducer,
  updateToCartReducer,
} from "../../../redux/cartSlice";
function ShopingCartLogic(props) {
  const dispatch = useDispatch();

  const fetcher = async () => {
    try {
      const res = await axios.get("/api/customer/getItemsIncart", {
        headers: {
          userinfo: Cookies.get("userToken"),
        },
      });

      const { items, notFound } = res.data;

      return notFound
        ? []
        : items.map((item) => ({ ...item, purchase: false }));
    } catch (error) {
      console.error(error.message);
    }
  };

  const calculateTotalAmount = (items) => {
    return items.length > 0
      ? items.reduce(
          (total, item) =>
            item.purchase ? item.quantity * item.product_price + total : total,
          0
        )
      : 0;
  };

  const calculateTotalAmountOnCart = (items) => {
    return items.length > 0
      ? items.reduce(
          (total, item) =>
             item.quantity * item.product_price + total,
          0
        )
      : 0;
  };

  

  const handleItem = (item, setItems) => {
    setItems((cartItems) => {
      return cartItems.map((cartItem) => {
        if (cartItem.id == item.id) {
          return { ...item, purchase: cartItem.purchase ? false : true };
        }
        return cartItem;
      });
    });
    return;
  };

  const removeToCart = async (product, setItems) => {
    const { id } = product;
    dispatch(removeTocartReducer(id));
    const res = await axios.delete(`/api/customer/deleteItemInCart/${id}`, {
      headers: {
        userinfo: Cookies.get("userToken"),
      },
    });
    const { success } = res.data;
    if (!success) window.location.reload();
  };

  const incremeantDecreament = async (product, action) => {
    try {
      const { id } = product;
      dispatch(updateToCartReducer({ id, updateAction: action }));
      const res = await axios.patch(
        `/api/customer/updateItemQuantity/${id}`,
        {
          action,
          product,
        },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const { success, updateAction } = res.data;

      if (updateAction === "delete" && success) {
        return dispatch(removeTocartReducer(id));
      }

      if (!success && action === "incremeant") {
        return dispatch(
          updateToCartReducer({ id, updateAction: "decremeant" })
        );
      }
      if (!success && action === "decremeant") {
        return dispatch(
          updateToCartReducer({ id, updateAction: "incremeant" })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    fetcher,
    calculateTotalAmount,
    handleItem,
    removeToCart,
    incremeantDecreament,
    calculateTotalAmountOnCart
  };
}

export default ShopingCartLogic;
