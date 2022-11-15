import React from "react";
import { ShippingDetails } from "../../pages/adminPages/order_detail/components";

function Shipping({ data }) {
  return (
    <ShippingDetails>
      <h3>Order Details</h3>
      {data.delivery_status === -1 ? (
        <>
          <h4>Order has been cancelled</h4>
          <p><h4>Reason:</h4> {data?.cancel_message} </p>
        </>
      ) : (
        <>
          <h4>{data?.courrier_type} Delivery</h4>
          <i class="fa-solid fa-truck-fast"></i>
        </>
      )}
    </ShippingDetails>
  );
}

export default Shipping;
