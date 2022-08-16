import { useDispatch } from "react-redux";
import CustomAxios from "../../../customer hooks/CustomAxios";
import {
  addToCartReducer,
} from "../../../redux/cartSlice";

function ProductLogic() {

  
  const dispatch = useDispatch();

  const addToCart = async (product) => {
    try {
      const response = await CustomAxios({METHOD:'POST', uri:"/api/customer/addItemsToCart", values:{ id: product.id }})
      
      const { msg, success } = response;
      if (msg?.includes("session expired") && !success)
        return window.location.reload();

      const newProduct = JSON.parse(JSON.stringify(product));
      dispatch(addToCartReducer({ product: newProduct, data: response }));
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    addToCart,
  };
}

export default ProductLogic;
