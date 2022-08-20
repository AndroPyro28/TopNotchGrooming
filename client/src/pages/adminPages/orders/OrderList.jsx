import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import OrderData from "../../../components/order/OrderData";

import {
  OrderDetailsContainer,
  OrderDetailsList,
  SearchBarWrapper,
  SearchBarContainer,
  TableContainer,
  TableRowHeader,
  T_Head as Thead,
  GlobalStyles
} from "./components";
import CustomAxios from "../../../customer hooks/CustomAxios";

function OrderList() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('all');
    const [orders, setOrders] = useState([]);
    const [textSearch, setTextSearch] = useState('');

    useEffect(() => {
      
        (async () => {
            try {
              setLoading(true)
              setOrders([])
              const response = await CustomAxios({METHOD:"POST", uri:`/api/admin/getOrders`, values: {status, textSearch}})
                
                const {msg, success} = response;
                if(!success && msg?.includes('session expired')) {
                  return window.location.reload()
                }
                const {orders} = response;
                setOrders(orders);

            } catch (error) {
                console.error(error.message);
            }
            finally {
            setLoading(false)
            }
        })()
    }, [status, textSearch]);

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
              placeholder="Search for Order ID"
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </SearchBarContainer>

          <select name="" id="" className="select" onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All Orders</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="onGoing">On Going</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </SearchBarWrapper>

        <TableContainer>
            
          <TableRowHeader>
            <Thead className="id"> Order ID </Thead>
            <Thead className="customer"> Customer </Thead>
            <Thead className="products"> Products </Thead>
            <Thead className="date"> Date </Thead>
            <Thead className="price"> Price </Thead>
            <Thead className="order__status"> Order Status </Thead>
            <Thead className="payment__method"> Payment Method</Thead>
          </TableRowHeader>

          {
            loading ?
            <h2 style={{color:"gray", marginBlock:50}}>Loading orders...</h2> 
            : orders?.length === 0 ? (
            <h2 style={{color:"gray", marginBlock:50}}>No Orders Yet</h2>
            )
            :
             orders?.map(order => (
              <OrderData key={order.id} data={order} />
            ))
          }
          
        </TableContainer>

      </OrderDetailsList>
    </OrderDetailsContainer>
  );
}

export default OrderList;
