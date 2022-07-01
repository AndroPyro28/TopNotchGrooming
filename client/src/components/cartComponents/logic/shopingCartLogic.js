import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
function shopingCartLogic() {
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

  const productPriceFormatter = (price) => {
    const PRICE_FORMATTER = Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "PHP",
    });

    return PRICE_FORMATTER.format(price);
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
    setItems((prevItems) => prevItems.filter((item) => item.id != id));
    const res = await axios.delete(`/api/customer/deleteItemInCart/${id}`, {
      headers: {
        userinfo: Cookies.get("userToken"),
      },
    });

    const { success } = res.data;

    return !success && setItems((prevItems) => [...prevItems, product]);
  };

  return {
    productPriceFormatter,
    fetcher,
    calculateTotalAmount,
    handleItem,
    removeToCart,
  };
}

export default shopingCartLogic;
