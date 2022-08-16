import React from "react";
import { TableRowData, T_Data } from "../../pages/adminPages/orders/components";
import productPriceFormatter from '../../helpers/ProductPriceFormatter'
import {useNavigate} from 'react-router-dom';
import DateFormatter from "../../helpers/DateFormatter"
function OrderData({ data }) {
  
  const navigate = useNavigate()

  const { firstname, lastname } = JSON.parse(data.customer);
  const {products, order_date, total_amount, reference, order_status, payment_type, delivery_status} = data;
  
  const orderedProducts = products.reduce((string, product) => {
    return string += `${product.product_name} `
  }, '');
  
  return (
    <TableRowData onClick={() => navigate(`/admin/orders/${reference}`)}>
      <T_Data> {reference}</T_Data>
      <T_Data> {firstname} {lastname}</T_Data>
      <T_Data> {orderedProducts} </T_Data>
      <T_Data> {DateFormatter(order_date)} </T_Data>
      <T_Data className="price"> {productPriceFormatter(total_amount)} </T_Data>

      {
        order_status == 'completed' && <T_Data className={`status status__complete`}> Completed </T_Data>
      }

      {
        order_status == 'pending' && <T_Data className={`status status__pending`}> Pending </T_Data>
      }

      {
        order_status == 'onGoing' && <T_Data className={`status status__onGoing`}> On Going </T_Data>
      }

      {
        order_status == 'cancelled' && <T_Data className={`status status__cancelled`}> Cancelled </T_Data>
      }

      <T_Data style={{textTransform:'capitalize'}}>{payment_type} Payment </T_Data>
    </TableRowData>
  );
}

export default OrderData;
