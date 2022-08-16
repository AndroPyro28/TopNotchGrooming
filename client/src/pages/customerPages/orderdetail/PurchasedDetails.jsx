import React, { useEffect, useTransition, useState} from "react";
import {
  PurchasedItemContainer,
  ItemListContainer,
} from "./components";
import Item from "./Item";
import {useParams} from "react-router-dom";
import OrderDetails from "./OrderDetails";
import axios from "axios";
import Cookies from "js-cookie"
import CustomAxios from "../../../customer hooks/CustomAxios";
function PurchasedDetails() {

  const {reference} = useParams()
  const [loading, startTransition] = useTransition()
  const [order, setOrder] = useState({});

  useEffect(() => {
    startTransition(async() => {
      try {
        const response = await CustomAxios({METHOD:"GET", uri:`/api/customer/getOrderByReference/${reference}`});

        const {msg, success, order} = response;

        if(!success && msg?.includes('session expired')) {
          return window.location.reload();
        }

        setOrder(order)
      } catch (error) {
        console.error(error.message)
      }
    })
  }, []);


  return (
    <PurchasedItemContainer>

      <ItemListContainer>
        <h1>Your Ordered Products</h1>
        {
          order?.products?.map(product => (
             <Item data={product} key={product.product_id}/>
          )) 
        }
      </ItemListContainer>

      <OrderDetails data={order}/>
    </PurchasedItemContainer>
  );
}

export default PurchasedDetails;
