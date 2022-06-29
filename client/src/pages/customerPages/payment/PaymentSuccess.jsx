import React from 'react'
import {useLocation, useParams} from "react-router-dom"
function PaymentSuccess() {
  const {search} =  useLocation()
  const hashId = search.replace('?hash=', '');
  return (
    <div>PaymentSuccess your hash id is {hashId}</div>
  )
}

export default PaymentSuccess