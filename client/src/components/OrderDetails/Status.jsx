import React from 'react'
import {
    OrderStatusContainer,
    OrderStatus,
    OrderStatusInfo,  
  } from "../../pages/adminPages/order_detail/components";

function Status({data}) {

  const statusSummary = (stage) => {
    let summary = 'notActive'

    if(data.delivery_status == stage) { // 0
      summary = 'active'
    }

    if(data.delivery_status > stage) { // 0
      summary = 'completed'
    }

    return summary
  }
  return (
    <OrderStatusContainer>
          <h3>Order Status</h3>
          
          <OrderStatus className={statusSummary(1)}>
            <i class="fa-solid fa-boxes-stacked"></i>
            <OrderStatusInfo>
              <span>
                Order Packed <i class={`fa-solid fa-circle-check ${statusSummary(1)}`}></i>
              </span>
              <small>Order is being prepared</small>
            </OrderStatusInfo>
          </OrderStatus>

          <OrderStatus className={statusSummary(2)}>
            <i class="fa-solid fa-truck-fast"></i>
            <OrderStatusInfo>
              <span>
                Shipping <i class={`fa-solid fa-circle-check ${statusSummary(2)}`}></i>
              </span>
              <small>Order has been dispatched</small>
            </OrderStatusInfo>
          </OrderStatus>

          <OrderStatus className={statusSummary(3)}>
            <i class="fa-solid fa-truck-ramp-box "></i>
            <OrderStatusInfo>
              <span> Delivered <i class={`fa-solid fa-circle-check ${statusSummary(3)}`}></i> </span>
              <small>Order has been delivered</small>
            </OrderStatusInfo>
          </OrderStatus>

          <button>Next Stage </button>
        </OrderStatusContainer>
  )
}

export default Status