import React from "react";
import {
  GlobalStyles,
  FindYourAccountContainer,
  FieldContainer,
  Message,
} from "./components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logic from "./Logic";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify"
function UpdatePassword() {
  const navigate = useNavigate()
  const {onSubmit,
    validationSchema,
    initialValues} = Logic({toast})
  return (
    <FindYourAccountContainer>
      <GlobalStyles />
      <ToastContainer autoClose={1500} />
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form autoComplete="off">
              <i className="fa-solid fa-arrow-left " onClick={() => navigate(-1)}></i>
              <img src="/images/logo.png" />
              <h1>Update Password.</h1>
              <p>Please enter your new password</p>
              <FieldContainer>
                <Field name="password" placeholder="password" type="password" />
                <Message><ErrorMessage component={'div'} style={{color:'red'}} name="password" /></Message>
              </FieldContainer>
              <FieldContainer>
                <Field name="confirmPassword" placeholder="confirm password" type="password" />
                <Message><ErrorMessage component={'div'} style={{color:'red'}} name="confirmPassword" /></Message>
              </FieldContainer>
              <button type="submit" >Change Password</button>
            </Form>
          );
        }}
      </Formik>
    </FindYourAccountContainer>
  );
}

export default UpdatePassword;
