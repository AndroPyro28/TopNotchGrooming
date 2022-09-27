import { useDispatch } from "react-redux";
import {
  removeTocartReducer,
  updateToCartReducer,
} from "../../../redux/cartSlice";
import CustomAxios from "../../../customer hooks/CustomAxios";
function ShopingCartLogic(props) {
  const dispatch = useDispatch();

  const fetcher = async () => {
    try {
      const response = await CustomAxios({METHOD:"GET", uri:`/api/customer/getItemsIncart`})

      const { items, notFound } = response;
      console.log(response);
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
    const response = await CustomAxios({METHOD:"DELETE", uri:`/api/customer/deleteItemInCart/${id}`});

    const { success } = response;

    if (!success) window.location.reload();
  };

  const incremeantDecreament = async (product, action) => {
    try {
      const { id } = product;
      dispatch(updateToCartReducer({ id, updateAction: action }));
      const response = await CustomAxios({METHOD:`PATCH`, uri:`/api/customer/updateItemQuantity/${id}`, values: { action, product}})
      const { success, updateAction } = response;

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
