import axios from "axios";
import Cookies from "js-cookie";
import React, { startTransition } from "react";
import { useTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { OrderContainer, GlobalStyles} from "./components";
import ToReceiveOrder from "./ToReceiveOrder";
function ToReceive() {
  const [loading, startTransition] = useTransition();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders([]);
    startTransition(async () => {
      try {
        const res = await axios.get("/api/customer/orders/3", {
          headers: {
            userinfo: Cookies.get("userToken"),
          },
        });
        setOrders(res.data.orders);
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
          return <ToReceiveOrder key={order.id} data={order} />;
        })
      )}
    </OrderContainer>
  );
}

export default ToReceive;
