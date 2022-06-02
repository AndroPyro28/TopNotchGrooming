import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

function Footer() {

     const {pathname} = useLocation();

     const caller = async () => {
        try {
            const res = await axios.get(`/api/auth`, {
                headers: {
                    userInfo: Cookies.get('userToken')
                }
            });
            console.log(res.data);
        } catch (error) {
            console.error(error)
        }
    }


     useEffect( () => {
        caller();
     }, [pathname])
    

  return (
    <div>Footer</div>
  )
}

export default Footer