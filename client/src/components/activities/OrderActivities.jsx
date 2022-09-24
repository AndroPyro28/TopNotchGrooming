import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import DateFormmater from "../../helpers/DateFormatter";
import { UserActivities, Activity, RowInfo, Pagination } from "./components";
import ProductPriceFormmater from "../../helpers/ProductPriceFormatter";
function OrderActivities() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await CustomAxios({
          METHOD: "GET",
          uri: "/api/customer/getAllOrderActivities",
        });
        const { msg, data } = result;

        if (msg?.includes("session expired")) {
          return window.location.reload();
        }
        setOrders(data);
        setMaxPage(Math.ceil(data.length / 6));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const fetchOrders = loading ? (
    <h4>Loading activities...</h4>
  ) : orders?.length > 0 ? (
    orders.map((order, index) => {
      return (
        <RowInfo key={index}>
          <Activity status={order.order_status}>
            <span class="date cancelled">
              {DateFormmater(order.order_date)}
            </span>
          </Activity>

          <Activity status={order.order_status}>
            <span class="payment">Paid by: {order.payment_type}</span>
          </Activity>

          <Activity status={order.order_status}>
            <span class="service">
              Amount:{" "}
              {ProductPriceFormmater(
                order.total_amount + order.total_amount * 0.01
              )}
            </span>
          </Activity>

          <Activity status={order.order_status}>
            <span class="status">{order.order_status}</span>
          </Activity>
        </RowInfo>
      );
    })
  ) : (
    <h4>No activities found</h4>
  );

  const fetchPagination = !loading &&  <Pagination>
  <i class="fa-solid fa-chevron-left" onClick={() => setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))}></i>{" "}
  <span>{`${currentPage + 1} / ${maxPage}`}</span>
  <i class="fa-solid fa-chevron-right" onClick={() =>setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))}
  ></i>

</Pagination>
  return (
    <UserActivities>
      
      <h2>Completed Orders</h2>
      {fetchOrders}
      {fetchPagination}
    </UserActivities>
  );
}

export default OrderActivities;
