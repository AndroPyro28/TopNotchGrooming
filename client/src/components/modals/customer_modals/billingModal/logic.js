import * as yup from "yup";
import CustomAxios from "../../../../customer hooks/CustomAxios";

function logic({ items, totalAmount, paymentType, toast, courierType }) {
  const initialValues = {
    city: "malolos",
    subdivision: "",
    houseNo: "",
    brgy: "",
    contactNo: "",
  };

  const validationSchema = yup.object({
    city: yup.string().required("city is required"),
    subdivision: yup.string().required("street / subdivision is required"),
    houseNo: yup.string().required("house number is required"),
    brgy: yup.string().required("barangay is required"),
    // billingAddress: yup
    //   .string()
    //   .required("Billing Address is required")
    //   .min(10, "Billing address must be 10 characters long"),
    contactNo: yup.string().required("Contact number is required"),
  });

  const onSubmit = async (values) => {
    const {brgy, city, contactNo, houseNo, subdivision} = values;
    
    if (courierType == "lalamove" || courierType == "jnt") {
      const billingInfo = {
        billingAddress: `${houseNo} ${subdivision} ${brgy} ${city}`,
        courierType,
        contactNo
      }
      
      const checkoutProducts = items.filter((item) => item.purchase);

      const response = await CustomAxios({
        METHOD: "POST",
        values: { checkoutProducts, totalAmount: totalAmount + (totalAmount * 0.01), billingInfo },
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
          totalAmount:  totalAmount + (totalAmount * 0.01),
          billingInfo,
          proceedPayment,
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
