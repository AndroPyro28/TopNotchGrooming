import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import CustomAxios from '../../../customer hooks/CustomAxios'
import * as yup from "yup"
import axios from 'axios'

function Logic({email, setEmail, code, setCode, toast}) {
    const navigate = useNavigate()
    const findAccount = async () => {
        try {
            if(!email.value) {
                return setEmail(prev => ({...prev, show: true, message:'Invalid Email'}))
            }
            const res = await CustomAxios({uri:'/api/public/findAccountAndSendEmail', METHOD:"POST", values:{
                email: email.value
            }})
            const {msg, success} = res;
            if(msg?.includes('session expired') && !success) {
                return window.location.reload()
            }
             setEmail(prev => ({...prev, show: true, message:msg}))
        } catch (error) {
            console.error(error)
        }
    }

    const verifyCode = async () => {
        try {
            if(!email.value) {
                return setEmail(prev => ({...prev, show: true, message:'Invalid Email'}))
            }
            if(!code.value) {
                return setCode(prev => ({...prev, show: true, message:'Invalid Code'}))
            }
            const res = await CustomAxios({uri:'/api/public/verifyCode', METHOD:"POST", values:{
                email: email.value,
                code: code.value
            }})
            const {msg, success} = res;
            if(msg?.includes('session expired') && !success) {
                return window.location.reload()
            }
            if(!success) {
                return setCode(prev => ({...prev, show: true, message:msg}))
            }

            const {reset_token, usertype} = res;
            Cookies.set(
                "reset_token",
                JSON.stringify({
                  userType: usertype,
                  userToken: reset_token,
                }),
                {
                  expires: new Date(new Date().getTime() + 5 * 60 * 1000),
                  secure: true,
                }
              );
              console.log('yes');
              navigate('/public/update-password', {replace: true})
        } catch (error) {
            console.error(error)
        }
    }

    const onSubmit = async (values) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URI_PROD}/api/public/updatePassword`, values, {
                headers: {
                    userinfo: Cookies.get('reset_token')
                }
            })

            const {msg, success} = res.data;

            if(msg?.includes('session expired') && !success) {
                return window.location.reload()
            }

            if(!success) {
                return toast(msg, {type:'warning'})
            }

            toast(msg, {type:'success'})
            const {userType} = JSON.parse(Cookies.get('reset_token'));
            Cookies.remove('reset_token');
            setTimeout(() => navigate(`/${userType}/login`))
        } catch (error) {
            console.error(error.message)
        }
    }

    const validationSchema = yup.object().shape({
        password: yup.string().required('password is required').min(6, 'password must be atleast 6 characters'),
        confirmPassword:yup
        .string().required('password confirmation is required')
        .when("password", (password, field) =>
          password
            ? field
                .required()
                .oneOf(
                  [yup.ref("password")],
                  "password and confirm password do not match"
                )
            : field
        ),
    })

    const initialValues = {
        password: '',
        confirmPassword: ''
    }

  return {
    findAccount,
    verifyCode,
    onSubmit,
    validationSchema,
    initialValues,
  }
}

export default Logic