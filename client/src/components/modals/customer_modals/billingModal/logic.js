import * as yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";

function logic({
  items,
  totalAmount,
  paymentType,
  toast,
  courierType,
}) {
  const initialValues = () => {
    return {
      billingAddress: "",
      contactNo: "",
      zipCode: "",
    };
  };

  const validationSchema = yup.object({
    billingAddress: yup
      .string()
      .required("Billing Address is required")
      .min(10),
    contactNo: yup.string().min(11).required("Contact number is required"),
    zipCode: yup.number("Invalid zip code").required("Zip code is required"),
  });

  const onSubmit = async (billingInfo) => {

    if(courierType == "lalamove" || courierType == 'toktok') {
      billingInfo.courierType = courierType;
      const checkoutProducts = items.filter((item) => item.purchase);
      const res = await axios.post(
        `/api/customer/checkout/${paymentType}`,
        {
          checkoutProducts,
          totalAmount,
          billingInfo,
        },
        {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        }
      );
      const { success, msg, proceedPayment, method, checkoutUrl, orderId } =
        res.data;
  
      if (!success && msg?.includes("session expired")) {
        return window.location.reload();
      }
  
      if (!proceedPayment) {
        return toast(msg, { type: "warning" });
      }
  
      localStorage.setItem(
        "onCheckoutProducts",
        JSON.stringify({
          checkoutProducts,
          method,
          orderId,
          totalAmount,
          billingInfo,
        })
      );
  
      return window.location.assign(checkoutUrl);
    }
   

    return toast('Choose a courrier below!', {type:'warning'});
  };

  const validateContact = (value) => {
    const phone = value + "";

    if (isNaN(Number(phone))) {
      return "Phone must be valid ph number";
    }

    if (phone.startsWith("63") || phone.startsWith("09")) {
      return null;
    }

    return "Phone must be valid ph number";
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    validateContact,
  };
}

export default logic;
