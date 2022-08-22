import * as yup from "yup";
import CustomAxios from "../../../../customer hooks/CustomAxios";

function logic({ items, totalAmount, paymentType, toast, courierType }) {
  
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
      .min(10, "Billing address must be 10 characters long"),
    contactNo: yup.string().min(11).required("Contact number is required"),
    zipCode: yup.string().required("Zip code is required"),
  });

  const onSubmit = async (billingInfo) => {

    if (courierType == "lalamove" || courierType == "toktok") {

      billingInfo.courierType = courierType;
      
      const checkoutProducts = items.filter((item) => item.purchase);

      const response = await CustomAxios({
        METHOD: "POST",
        values: { checkoutProducts, totalAmount, billingInfo },
        uri:`/api/customer/checkout/${paymentType}`
      });
     
      const { success, msg, proceedPayment, method, checkoutUrl, orderId } = response;

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
          proceedPayment
        })
      );

      return window.location.assign(checkoutUrl);
    }

    return toast("Choose a courrier below!", { type: "warning" });
  };

  const validateContact = (value) => {
    const phone = value + "";

    if (isNaN(Number(phone))) {
      return "Phone must be valid ph number";
    }

    if (phone.startsWith("63")) {
      return null;
    }

    return "Contact must start with 63xxxxxxxxxx";
  };

  const validateZipCode = (value) => {
    if (isNaN(Number(value))) {
      return "Zip Code is not valid";
    }

    return null;
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    validateContact,
    validateZipCode,
  };
}

export default logic;
