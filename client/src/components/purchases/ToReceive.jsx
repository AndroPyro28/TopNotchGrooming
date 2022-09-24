import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import { OrderContainer, GlobalStyles } from "./components";
import ToReceiveOrder from "./ToReceiveOrder";
function ToReceive() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders([]);
    (async () => {
      setLoading(true)
      try {
        const response = await CustomAxios({
          METHOD: "GET",
          uri: `/api/customer/orders/3`,
        }); // 3 means status of 3 that are to receive
        const {msg, success} = response;
        if(msg?.includes('session expired') && !success) {
          return window.location.reload();
        }
        setOrders(response.orders);
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <OrderContainer>
      <GlobalStyles />
      { loading ? <h1>loading...</h1> : orders.length === 0 ? (
        <h1>No Orders Yet</h1>
      ) : (
        orders
          .slice(0)
          .reverse()
          .map((order) => {
            return <ToReceiveOrder key={order.id} data={order} />;
          })
      )}
    </OrderContainer>
  );
}

export default ToReceive;
