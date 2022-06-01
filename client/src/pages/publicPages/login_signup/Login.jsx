import React from "react";
import { NavLink } from "react-router-dom";
import {
  LoginSignupPageContainer,
  LoginSignupWrapper,
  LoginSignupContainer,
  LoginBgFrom
} from "./loginSignupComponents";
function Login() {
  return (
    <LoginSignupPageContainer>
      <LoginSignupWrapper>
        <LoginSignupContainer>
          <div className="form__inputs">

          <div className="form__content">
            <h1>login</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              magni laboriosam sint odio vitae ipsum.
            </p>

            <div className="input__container">
              <label >Email</label>
              <input autocomplete="off" type="text" placeholder="Email" />
              <div className="error__message"></div>
            </div>

            <div className="input__container">
              <label >Password</label>
              <input autocomplete="off" type="password"placeholder="Password"/>
              <div className="error__message"></div>
            </div>

            <NavLink to="/customer/signup" >Don't have an account? Signup</NavLink>

            <div class="input__container button__container">
              <button className="loginBtn" >Login</button>
            </div>

          </div>
        </div>
        <LoginBgFrom />
        </LoginSignupContainer>
      </LoginSignupWrapper>
    </LoginSignupPageContainer>
  );
}

export default Login;
