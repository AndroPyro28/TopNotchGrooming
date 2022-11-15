import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  OrderStatusContainer,
  OrderStatus,
  OrderStatusInfo,
} from "../../pages/adminPages/order_detail/components";
import statusLogic from "./statusLogic";

function Status({ data }) {
  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const [statusSummaryPackaging, setStatusSummaryPackaging] = useState("");
  const [statusSummaryShipping, setStatusSummaryShipping] = useState("");
  const [statusSummaryDelivering, setStatusSummaryDelivering] = useState("");
  const { statusSummary, orderNextStage } = statusLogic({
    deliveryStatus,
    setDeliveryStatus,
    data,
  });
  useEffect(() => {
    setDeliveryStatus(data?.delivery_status);
  }, [data]);

  useEffect(() => {
    setStatusSummaryPackaging(statusSummary(1));
    setStatusSummaryShipping(statusSummary(2));
    setStatusSummaryDelivering(statusSummary(3));
  }, [deliveryStatus]);

  return (
    <OrderStatusContainer>
      <h3>Order Status</h3>

      <OrderStatus className={statusSummaryPackaging}>
        <i class="fa-solid fa-boxes-stacked"></i>
        <OrderStatusInfo>
          <span>
            Order Packed{" "}
            <i class={`fa-solid fa-circle-check ${statusSummaryPackaging}`}></i>
          </span>
          <small>Order is being prepared</small>
        </OrderStatusInfo>
      </OrderStatus>

      <OrderStatus className={statusSummaryShipping}>
        <i class="fa-solid fa-truck-fast"></i>
        <OrderStatusInfo>
          <span>
            Order Dispatched{" "}
            <i class={`fa-solid fa-circle-check ${statusSummaryShipping}`}></i>
          </span>
          <small>Preparing to dispatch </small>
        </OrderStatusInfo>
      </OrderStatus>

      <OrderStatus className={statusSummaryDelivering}>
        <i class="fa-solid fa-truck-ramp-box "></i>
        <OrderStatusInfo>
          <span>
            Order Delivered{" "}
            <i
              class={`fa-solid fa-circle-check ${statusSummaryDelivering}`}
            ></i>
          </span>
          <small>Order is in shipping process </small>
        </OrderStatusInfo>
      </OrderStatus>

      {data?.id ? (
        <>
          {data.delivery_status !== "cancelled" && deliveryStatus !== -1 ? (
            <button onClick={orderNextStage} disabled={deliveryStatus >= 4}>
              {deliveryStatus >= 4 ? "Order completed" : "Next Stage"}
            </button>
          ) : (
            <button disabled={deliveryStatus === -1}>
              {"Order cancelled"}
            </button>
          )}
        </>
      ) : (
        <> </>
      )}
    </OrderStatusContainer>
  );
}

export default Status;
