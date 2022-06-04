import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom'

function useLogic({ toast }) {
  //login configuration of formik

  const navigate = useNavigate();

  const onSubmitLogin = async (values) => {
    try {

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
  }
}

export default useLogic;