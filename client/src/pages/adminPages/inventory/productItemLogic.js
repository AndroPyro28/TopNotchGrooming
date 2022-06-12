import axios from "axios";
import Cookies from "js-cookie";
function productItemLogic({ setProducts, item, setItem, imageDisplay, toast, setDisableUpdate }) {

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`/api/products/deleteProduct/${id}`, {
        headers: {
          userinfo: Cookies.get("userToken"),
        },
      });

      const { success, msg } = res.data;

      if(msg?.includes('session expired') && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }

      if (success) {
        setProducts((prev) => prev.filter((product) => product.id != id));
        return toast(msg, {type: "success"})
      }

      return toast(msg, {type:"error"})
    } catch (error) {
      console.error(error.message);
    }
  };

  const setProps = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateProduct = async () => {
    try {
      //to becontinue here
      const res = await axios.post(
        `/api/products/updateItem`,
        { item, imageDisplay },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const { success, msg } = res.data;

      if(msg?.includes('session expired') && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }

      if (success) {
        return toast(msg, {type: "success"})
      }

      return toast(msg, {type:"error"})
    } catch (error) {
      console.error(error.message);
    }
    finally {
      setDisableUpdate(true)
    }
  };

  return {
    updateProduct,
    deleteProduct,
    setProps,
  };
}

export default productItemLogic;
