import axios from "axios";
import Cookies from "js-cookie";
import React, { startTransition } from "react";
import { useTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import {
  OrderContainer,
  GlobalStyles
} from "./components";
import PreparingOrder from "./PreparingOrder";
function Preparing() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    setOrders([]);
    (async () => {
      try {
        setLoading(true)
        const response = await CustomAxios({METHOD:"GET", uri:`/api/customer/orders/pending`})
        const {success, msg} = response;

        if(msg?.includes('session expired') && !success) {
          return window.location.reload();
        }
        setOrders(response.orders);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  


  return (
    <OrderContainer>
      <GlobalStyles />
      {loading ? <h1>loading...</h1> : orders.length === 0 ? (
        <h1>No Orders Yet</h1>
      ) : (
        orders.slice(0).reverse().map((order) => {
          return (
            <PreparingOrder key={order.id} data={order} setOrders={setOrders} />
          );
        })
      )}
    </OrderContainer>
  );
}

export default Preparing;
