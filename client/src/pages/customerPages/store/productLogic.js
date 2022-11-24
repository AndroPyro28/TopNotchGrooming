import { useDispatch, useSelector } from "react-redux";
import CustomAxios from "../../../customer hooks/CustomAxios";
import {
  addToCartReducer,
} from "../../../redux/cartSlice";

function ProductLogic({toast, setDisable}) {
  const {cart} = useSelector(state => state)
  const dispatch = useDispatch();
  
  const addToCart = async (product) => {
    try {
      const index = cart?.findIndex((c) => c.product_id == product.id)
    
      if(cart[index]?.quantity + 1 <= product.product_stocks || index == -1) {
        setDisable(true)
        const response = await CustomAxios({METHOD:'POST', uri:"/api/customer/addItemsToCart", values:{ id: product.id }})
        const { msg, success } = response;
        if (msg?.includes("session expired") && !success)
        return window.location.reload();
        const newProduct = JSON.parse(JSON.stringify(product));
        return dispatch(addToCartReducer({ product: newProduct, data: response }));
      }

      toast('product is out of stock', {type:'warning'})
    } catch (error) {
      console.error(error.message);
    } finally {
      setDisable(false)
    }
  };

  return {
    addToCart,
  };
}

export default ProductLogic;
