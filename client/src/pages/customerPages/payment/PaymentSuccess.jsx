import React from 'react'
import { useEffect } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const {search} =  useLocation()
  const hashId = search.replace('?hash=', '');
  const navigate = useNavigate()
  useEffect( () => {
    (async () => {
      try {
        const onCheckoutProducts = JSON.parse(localStorage.getItem('onCheckoutProducts'));
        
        if(onCheckoutProducts?.length <= 0 || onCheckoutProducts == undefined) {
          return navigate('/customer/cart', {replace: true});
        }

      } catch (error) {
        
      }
    })()
  }, [])
  
  return (
    <div>PaymentSuccess your hash id is {hashId}</div>
  )
}

export default PaymentSuccess