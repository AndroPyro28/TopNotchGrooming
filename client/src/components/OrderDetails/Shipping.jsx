import React from 'react'
import {
    ShippingDetails 
  } from "../../pages/adminPages/order_detail/components";

function Shipping({data}) {
  return (
    <ShippingDetails>
          <h3>Shipping Details</h3>

          <h4>{data?.courrier_type} Delivery</h4>

          <i class="fa-solid fa-truck-fast"></i>
        </ShippingDetails>
  )
}

export default Shipping