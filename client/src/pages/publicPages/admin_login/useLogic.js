import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CustomAxios from "../../../customer hooks/CustomAxios";

function useLogic({ toast }) {
  //login configuration of formik

  const onSubmitLogin = async (values) => {
    try {
      const { email, password } = values;
      const response = await CustomAxios({METHOD:"POST", uri:'/api/admin/login', values})

      const { success, msg } = response;

      if (!success) {
        return toast(msg, { type: "error" });
      }
      
      Cookies.set(
        "userToken",
        JSON.stringify({
          userType: "admin",
          userToken: response.token,
        }),
        {
          expires: 1,
          secure: true,
        }
      );

      toast(msg, { type: "success" });

      setTimeout((_) => window.location.assign("/admin"), 2500);
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

  return {
    onSubmitLogin,
    initialValuesLogin,
    validationSchemaLogin,
  };
}

export default useLogic;
