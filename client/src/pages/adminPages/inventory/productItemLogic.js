import axios from "axios";
import Cookies from "js-cookie";
function productItemLogic({
  setProducts,
  item,
  setItem,
  imageDisplay,
  toast,
  setDisableUpdate,
  setOpenItem,
  setImageDisplay
}) {
  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`/api/products/deleteProduct/${id}`, {
        headers: {
          userinfo: Cookies.get("userToken"),
        },
      });

      const { success, msg } = res.data;

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

  const setProps = (e) => setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  

  const updateProduct = async () => {
    try {
      setDisableUpdate(true);
      const res = await axios.post(
        `/api/products/updateItem`,
        { item, imageDisplay },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const { success, msg, product } = res.data;

      if (msg?.includes("session expired") && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }
      if (success) {
        setItem(product)
        return toast(msg, { type: "success" });
      }
      setDisableUpdate(false);
      return toast(msg, { type: "error" });
    } catch (error) {
      console.error(error.message);
    } finally {
      setImageDisplay(null);
      
    }
  };

  return {
    updateProduct,
    deleteProduct,
    setProps,
  };
}

export default productItemLogic;
