import React from 'react'
import productPriceFormatter from '../../../helpers/ProductPriceFormatter';
import {  Header,
    DeliveryInfo,
    DeliveryInfoContainer,
  } from "./components";
  import GetDateToday from "../../../helpers/DateToday";

function OrderDetails({data}) {
  const {customer} = data;
  return (
    <DeliveryInfoContainer>
        <Header>
          <h1>Order # {data?.reference}</h1>
          
        </Header>

        <DeliveryInfo>
          <small>
            <i class="fa-solid fa-basket-shopping"></i> {data.products?.length} item(s)
          </small>
          <small>
          <i class="fa-solid fa-receipt"></i> total {productPriceFormatter(data.total_amount)} pesos only
          </small>
          <small>
          <i class="fa-solid fa-receipt"></i> shipping: {productPriceFormatter(Math.round(data.total_amount * 0.01))} pesos only
          </small>
          <small>
          <i class="fa-solid fa-credit-card"></i> {data.payment_type} Payment
          </small>
        </DeliveryInfo>


        <DeliveryInfo>
          <small>
            <i class="fa-solid fa-user"></i> {customer?.firstname} {customer?.lastname}
          </small>
          <small>
            <i class="fa-solid fa-phone"></i>+{data?.contact}
          </small>
          <small>
            <i class="fa-solid fa-location-dot"></i> {data.billing_address}
          </small>
        </DeliveryInfo>

        <DeliveryInfo>
          <h4>
            Delivered by {" "}
            <small>
              {data.courrier_type} Delivery Service
            </small>
          </h4>

          <i class="fa-solid fa-truck-fast track"></i>

          <p> Dispatched at {GetDateToday()} </p>
        </DeliveryInfo>
      </DeliveryInfoContainer>
  )
}

export default OrderDetails