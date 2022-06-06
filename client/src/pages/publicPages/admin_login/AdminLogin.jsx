import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import useLogic from './useLogic'
import { AdminLoginWrapper, AdminLoginContainer, CheckboxContainer, GlobalStyle } from "./adminComponents"
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from "formik";
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    const {
        initialValuesLogin,
        validationSchemaLogin,
        onSubmitLogin
    } = useLogic({toast});

    const [showPassword, setShowPassword] = useState(false);

  return (
    <AdminLoginWrapper>
        <GlobalStyle />
        <ToastContainer autoClose={1500} />

      <h1>Login As Admin</h1>
      <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationSchemaLogin}
            onSubmit={onSubmitLogin}
          >

          {
              formik => {
                  return <Form className='admin__login__container'>

                        <div>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name='email' component="div" className="error__message" />
                        </div>

                        <div>
                            <Field type={showPassword ? `text` : `password`} name="password" placeholder="Password" />
                            <ErrorMessage name='password' component="div" className="error__message" />
                        </div>
                        <CheckboxContainer>
                        <input type="checkbox" className="checkbox" onClick={() => setShowPassword(!showPassword)} />
                        <label for="showPassword">Show Password</label>
                        
                        </CheckboxContainer>

                        <button id="loginBtn" type="submit">Login</button>
                    
                  </Form>
              }
          }
      
      </Formik>
    </AdminLoginWrapper>
  )
}

export default AdminLogin