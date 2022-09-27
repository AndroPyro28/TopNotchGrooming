import axios from "axios";
import Cookies from "js-cookie";
import CustomAxios from "../../../customer hooks/CustomAxios";
function productItemLogic({
  setProducts,
  item,
  setItem,
  imageDisplay,
  toast,
  setDisableUpdate,
  setOpenItem,
  setImageDisplay,
}) {
  const deleteProduct = async (id) => {
    try {
      const response = await CustomAxios({METHOD:"DELETE", uri:`/api/products/deleteProduct/${id}`});
      
      const { success, msg } = response;

      if (msg?.includes("session expired") && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }

      if (!success) {
        return toast(msg, { type: "error" });
      }
      setProducts((prev) => prev.filter((product) => product.id !== id));  // !bug detected!
      return toast(msg, { type: "success" });
    } catch (error) {
      console.error(error.message);
    }
  };

  const setProps = (e) => {
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}

  const updateProduct = async () => {
    try {
      setDisableUpdate(true);
      const response = await CustomAxios({METHOD:"POST", uri:`/api/products/updateItem`, values:{ item, imageDisplay }})
      const { success, msg, product } = response;

      if (msg?.includes("session expired") && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }
      if (success) {
        return toast(msg, { type: "success" });
      }
      setDisableUpdate(false);
      return toast(msg, { type: "error" });
    } catch (error) {
      console.error(error.message);
    } finally {
      // setImageDisplay(null);
    }
  };

  return {
    updateProduct,
    deleteProduct,
    setProps,
  };
}

export default productItemLogic;
