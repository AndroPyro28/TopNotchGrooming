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
  const [loading, startTransition] = useTransition();
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    setOrders([]);
    startTransition(async () => {
      try {
        const response = await CustomAxios({METHOD:"GET", uri:`/api/customer/orders/pending`})
        setOrders(response.orders);
      } catch (error) {}
    });
  }, []);

  return (
    <OrderContainer>
      <GlobalStyles />
      {orders.length === 0 ? (
        <h1>No Orders Yet</h1>
      ) : (
        orders.slice(0).reverse().map((order) => {
          return (
            <PreparingOrder key={order.id} data={order} />
          );
        })
      )}
    </OrderContainer>
  );
}

export default Preparing;
