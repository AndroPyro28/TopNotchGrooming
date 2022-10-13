import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CustomAxios from "../../../customer hooks/CustomAxios";
function useLogic({ toast }) {
  //login configuration of formik

  const navigate = useNavigate();

  const onSubmitLogin = async (values) => {
    try {
      const response = await CustomAxios({METHOD:"POST", uri:`/api/customer/login`, values})
      const { success, msg } = response;

      if (!success) return toast(msg, { type: "error" });

      Cookies.set(
        "userToken",
        JSON.stringify({
          userType: "customer",
          userToken: response.assignedToken,
        }),
        {
          expires: 1,
          secure: true,
        }
      );

      toast(msg, { type: "success" });

      setTimeout((_) => window.location.assign("/customer/profile"), 2500);

      
    } catch (error) {
      console.error(error.message);
    }
  };

  const initialValuesLogin = () => {
    return {
      email: "",
      password: "",
    };
  };

  const validationSchemaLogin = yup.object({
    email: yup
      .string()
      .email("This is invalid email")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  //signup configuration of formik

  const onSubmitSignup = async (values) => {
    try {
      const response = await CustomAxios({METHOD:'POST', uri:'/api/customer/signup', values})

      const { msg, success } = response;

      if (!success) {
        return toast(msg, { type: "error" });
      }

      toast(msg, { type: "success" });

      setTimeout(() => {
        return navigate("/customer/login", { replace: true });
      }, 2500);
    } catch (error) {
      console.error(error.message)
    }
  };

  const initialValuesSignup = () => {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phoneNo: "",
      address: "",
      password: "",
      confirmPassword: "",
    };
  };

  const validationSchemaSignup = yup.object({
    firstname: yup.string().required().min(3),
    lastname: yup.string().required().min(3),
    email: yup
      .string()
      .email("This is invalid email")
      .required("This field is required"),
    phoneNo: yup.string().required(),
    address: yup
      .string()
      .required("This field is required"),
    birthdate: yup.string().required("This field is required"),
    password: yup.string().required("This field is required").min(6),
    confirmPassword: yup.string().required("This field is required"),
  });

  return {
    validationSchemaLogin,
    initialValuesLogin,
    onSubmitLogin,
    validationSchemaSignup,
    initialValuesSignup,
    onSubmitSignup,
  };
}

export default useLogic;
