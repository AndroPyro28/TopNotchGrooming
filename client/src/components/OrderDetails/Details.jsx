import React from 'react'
import { useState } from 'react'
import {
    CustomerDetails,
    CustomerInfoContainer,
  } from "../../pages/adminPages/order_detail/components"

function Details({data}) {
  const {customer} = data;
  return (
    <CustomerDetails>
          <h3>Customer Details</h3>

          <CustomerInfoContainer>
            <div class="customer__info">
              {" "}
              <i class="fa-solid fa-user"></i> {customer?.firstname} {customer?.lastname}
            </div>
            <div class="customer__info">
              <i class="fa-solid fa-flag"></i> Philippines
            </div>
          </CustomerInfoContainer>

          <CustomerInfoContainer>
            <div class="customer__info">
              <i class="fa-solid fa-envelope"></i> {customer?.email}
            </div>
            <div class="customer__info">
              <i class="fa-solid fa-road"></i> {customer?.address}
            </div>
            
          </CustomerInfoContainer>

          <CustomerInfoContainer>

            <div class="customer__info">
              <i class="fa-solid fa-phone"></i> {customer?.phone}
            </div>
            <div class="customer__info">
              <i class="fa-solid fa-credit-card"></i> {data?.payment_type}
            </div>
            
          </CustomerInfoContainer>
        </CustomerDetails>
  )
}

export default Details