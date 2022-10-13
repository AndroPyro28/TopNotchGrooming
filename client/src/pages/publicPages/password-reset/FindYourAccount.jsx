import React from 'react'
import { useState } from 'react'
import {GlobalStyles, FindYourAccountContainer, Field,FieldContainer, Message} from "./components"
import Logic from "./Logic"
import {useNavigate} from "react-router-dom";

function FindYourAccount() {
    const [email, setEmail] = useState({
        value: '',
        show: false,
        message: ''
    });
    const [code, setCode] = useState(
        {
            value: '',
            show: false,
            message: ''
        }
    );
  const navigate = useNavigate()

    const {findAccount, verifyCode} = Logic({email, setEmail, code, setCode})
  return (
    <FindYourAccountContainer>
        <GlobalStyles />
        <i className="fa-solid fa-arrow-left " onClick={() => navigate(-1)}></i>

        <img src="/images/logo.png"  />
        <h1>Find Your Account.</h1>
        <p>Please enter your email to search for your account</p>
        <FieldContainer>
        <Field>
            <input placeholder="email" onChange={(e) => setEmail(prev => ({...prev, value: e.target.value}))} type="email" />
            <button onClick={findAccount}>Send Email</button>
        </Field>
        <Message>{email.show && email.message}</Message>
        </FieldContainer>
        <FieldContainer>
        <Field>
            <input placeholder="Code" onChange={(e) => setCode(prev => ({...prev, value: e.target.value}))} />
            <button onClick={verifyCode}>Verify Code</button>
        </Field>
        <Message>{code.show && code.message}</Message>
        </FieldContainer>
        
        
    </FindYourAccountContainer>
  )
}

export default FindYourAccount