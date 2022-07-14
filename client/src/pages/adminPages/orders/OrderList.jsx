import React from "react";
import { useEffect, useTransition } from "react";
import OrderData from "../../../components/order/OrderData";
import {
  OrderDetailsContainer,
  OrderDetailsList,
  SearchBarWrapper,
  SearchBarContainer,
  TableContainer,
  TableRowHeader,
  T_Head,
  GlobalStyles
} from "./components";
function OrderList() {
    const [loading, startTranstion] = useTransition();
    
    useEffect(() => {
        startTranstion(() => {
            try {
                
            } catch (error) {
                
            }
        })
    }, []);


  return (
    <OrderDetailsContainer>
        <GlobalStyles />
      <h3>Order Details</h3>

      <p>
        In the order details section, you can review and manage all orders with
        their details. You can view and edit many information such as IDs of all
        orders, ordered product, order date, price and order status. Access to
        this area is limited. Only administrators and team leaders can reach.
        The changes you make will be approved after they are checked.
      </p>


      <OrderDetailsList>
        <SearchBarWrapper>
          <SearchBarContainer>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for Order ID, Customer Name"
            />
          </SearchBarContainer>

          <select name="" id="" className="select">
            <option value="">All Orders</option>
            <option value="">Completed</option>
            <option value="">Pending</option>
            <option value="">Cancelled</option>
          </select>
        </SearchBarWrapper>

        <TableContainer>
            
          <TableRowHeader>
            <T_Head> Order ID </T_Head>
            <T_Head> Customer </T_Head>
            <T_Head> Order </T_Head>
            <T_Head> Delivery Date </T_Head>
            <T_Head> Delivery Price </T_Head>
            <T_Head> Delivery Status </T_Head>
            <T_Head> Payment </T_Head>
          </TableRowHeader>

          <OrderData />

          
        </TableContainer>

      </OrderDetailsList>
    </OrderDetailsContainer>
  );
}

export default OrderList;
