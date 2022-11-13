import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LoginSignupPageContainer,
  LoginSignupWrapper,
  LoginSignupContainer,
  LoginBgFrom,
} from "./loginSignupComponents";
import { Formik, Form } from "formik";
import FormikControl from "../../../formik/FormikControl"
import useLogic from "./useLogic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const {
     onSubmitLogin,
     initialValuesLogin, 
     validationSchemaLogin 
    } = useLogic({toast});

  return (
    <LoginSignupPageContainer>
      <LoginSignupWrapper>
        <LoginSignupContainer>
        <ToastContainer autoClose={1500} />
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationSchemaLogin}
            onSubmit={onSubmitLogin}
          >
            {(formik) => {
              return (
                <Form autoComplete="off" className="form__inputs">
                  <div className="form__content">
                    <h1>login</h1>
                    <p>
                    Welcome! Please enter your email address and password to login to your account.
                    </p>

                    <FormikControl
                      name="email"
                      label="Email"
                      type="email"
                      control="input"
                      className="input__container"
                      />

                      <FormikControl
                      name="password"
                      label="Password"
                      type="password"
                      control="input"
                      className="input__container"
                      />

                  <Link to="/public/find-your-account">
                     Forgot password? recover here
                    </Link>

                    <Link to="/customer/signup">
                      Don't have an account? Signup
                    </Link>

                    <div className="input__container button__container">
                      <button className="loginBtn">Login</button>
                    </div>
                    
                  </div>
                </Form>
              );
            }}
          </Formik>
          <LoginBgFrom />
        </LoginSignupContainer>
      </LoginSignupWrapper>
    </LoginSignupPageContainer>
  );
}

export default Login;
