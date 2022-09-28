import React from 'react'
import Data from "./Data"
import {SaleOrdersContainer, TableRow, Col, DataList} from "./components"
function SaleOrders({orders}) {
  const fetchOrders = orders?.length > 0 ? orders?.map((order, index) => {
    return <Data order={order} />
  }) : <h1>No transaction found!</h1>

  return (
        <SaleOrdersContainer>
          <TableRow className="header">
              <Col className="id">Order ID</Col>
              <Col className="customer">Customer</Col>
              {/* <Col className="products">Products</Col> */}
              <Col className="date">Date</Col>
              <Col className="price">Price</Col>
              <Col className="order__status">Order Status</Col>
              <Col className="payment__method">Payment Method</Col>
          </TableRow>

          <DataList>
          {
            fetchOrders
          }
          </DataList>
         
        </SaleOrdersContainer>
  )
}

export default SaleOrders