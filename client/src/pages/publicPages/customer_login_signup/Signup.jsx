import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LoginSignupPageContainer,
  LoginSignupWrapper,
  LoginSignupContainer,
  LoginBgFrom,
} from "./loginSignupComponents";
import { Formik, Form } from "formik";
import FormikControl from "../../../formik/FormikControl";
import useLogic from "./useLogic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AppointmentLogic from "../../customerPages/appointment/appointmentLogic";

function Signup() {
  const { onSubmitSignup, initialValuesSignup, validationSchemaSignup } =
    useLogic({ toast });

  const validatePassword = (password, confirmPassword) =>
    password !== confirmPassword
      ? "Password & confirm password do not match!"
      : null;

      const validatePhone = (phone) => {
        const phoneNo = phone.toString()
        return !phoneNo.startsWith('639') ? "Phone number must start with (63) (e.g 639*********)" : null
      }

  const [inputPageNo, setInputPageNo] = useState(0);

  const prevNextBtn = (action) => {
    setInputPageNo((prev) => {
      if (action === "prev") return prev - 1;
      if (action === "next") return prev + 1;
      return prev;
    });
  };

  const {dateTodayFormatter} = AppointmentLogic({})
  useEffect(() => {
    const birthdate = document.querySelector('#birthdate');
    
    if(birthdate) {
      const today = dateTodayFormatter({year:18})
      birthdate.max = today
    }
    
  }, [inputPageNo])

  return (
    <LoginSignupPageContainer>
      <LoginSignupWrapper>
        <LoginSignupContainer>
          <ToastContainer autoClose={1500} />
          <Formik
            initialValues={initialValuesSignup}
            validationSchema={validationSchemaSignup}
            onSubmit={onSubmitSignup}
          >
            {(formik) => {
              const { password, confirmPassword, phoneNo } = formik.values;
              return (
                <Form autoComplete="off" className="form__inputs">
                  <div className="form__content">
                    <h1>Signup</h1>
                    <p>
                    Welcome to Top-Notch Dog Grooming Website, you can access our website by creating an
                    account and filling up the required fields.
                    </p>
                          <FormikControl
                            name="firstname"
                            label="Firstname"
                            type="text"
                            control="input"
                            className="input__container"
                          />
                          <FormikControl
                            name="lastname"
                            label="Lastname"
                            type="text"
                            control="input"
                            className="input__container"
                          />
                   
                          <FormikControl
                            name="birthdate"
                            label="Birthdate"
                            id="birthdate"
                            type="date"
                            control="input"
                            className="input__container"
                          />

                          {/* <FormikControl
                            name="address"
                            label="Address"
                            type="text"
                            control="input"
                            className="input__container"
                          /> */}
                          
                          <FormikControl
                            name="houseNo"
                            label="House no."
                            type="text"
                            control="input"
                            className="input__container"
                          />

                          <FormikControl
                            name="subdivision"
                            label="Street/Subdivision"
                            type="text"
                            control="input"
                            className="input__container"
                          />

                          <FormikControl
                            name="barangay"
                            label="Barangay"
                            type="text"
                            control="input"
                            className="input__container"
                          />

                          <FormikControl
                            name="city"
                            label="city"
                            type="text"
                            control="input"
                            className="input__container"
                            disabled={true}
                          />

                          <FormikControl
                            name="province"
                            label="province"
                            type="text"
                            control="input"
                            className="input__container"
                            disabled={true}
                          />  
                  
                          <FormikControl
                            name="email"
                            label="Email"
                            type="Email"
                            control="input"
                            className="input__container"
                          />
                          
                          <FormikControl
                            name="phoneNo"
                            label="Phone Number"
                            type="number"
                            control="input"
                            className="input__container"
                            validate={(e) =>
                              validatePhone(phoneNo)
                            }
                          />

                    
                          <FormikControl
                            name="password"
                            label="Password"
                            type="password"
                            control="input"
                            className="input__container"
                          />

                          <FormikControl
                            name="confirmPassword"
                            label="Comfirm Password"
                            type="password"
                            control="input"
                            className="input__container"
                            validate={(e) =>
                              validatePassword(password, confirmPassword)
                            }
                          />
                       
                    
                    <Link to="/customer/login">
                      Already have an account? Login
                    </Link>

                    <div className="input__container button__container">
                        <button
                          type="submit"
                          className="loginBtn"
                        >
                          Signup
                        </button>
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

export default Signup;
