import React from "react";
import FormateDateLocal from "../../helpers/FormateDateLocal";
import Get_Date_N_Time from "../../helpers/Get_Date_N_Time";
import { TableRow, Col, DropDownAction } from "./components";
import ProductPriceFormmater from "../../helpers/ProductPriceFormatter";
import {useNavigate} from "react-router-dom";

function Data({ order }) {
    const navigate = useNavigate();
  const formmattedDate = FormateDateLocal(order.order_date);
  const { newDate, newTime } = Get_Date_N_Time(formmattedDate);
  return (
    <TableRow className="data" onClick={() => navigate(`/admin/orders/${order.reference}`)}>
      <Col className="id">{order.reference}</Col>
      <Col className="customer">
        {order.firstname} {order.lastname}
      </Col>
      {/* <Col className="products">Products</Col> */}
      <Col className="date">
        {newDate} at {newTime}{" "}
      </Col>
      <Col className="price">{ProductPriceFormmater(order.total_amount)}</Col>
      {order.order_status === "completed" && (
        <Col className={`status status__complete order__status`}>
          {" "}
          Completed{" "}
        </Col>
      )}

      {order.order_status === "pending" && (
        <Col className={`status status__pending order__status`}> Pending </Col>
      )}

      {order.order_status === "onGoing" && (
        <Col className={`status status__onGoing order__status`}> On Going </Col>
      )}

      {order.order_status === "cancelled" && (
        <Col className={`status status__cancelled order__status`}>
          {" "}
          Cancelled{" "}
        </Col>
      )}
      <Col className="payment__method">{order.payment_type}</Col>
      
    </TableRow>
  );
}

export default Data;
