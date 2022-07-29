import React from "react";
import { Order, Info, Row, CancelButton, ViewButton } from "./components";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";

function PreparingOrder({data}) {
  return (
    <Order key={data.id}>
      <img src={data.products[0].imageUrl} />
      <Info>
        <Row>
          <h1>
            Order <span># {data.reference}</span>
          </h1>
        </Row>
        <Row>
          <h4>Total amount of {productPriceFormatter(data.total_amount)}</h4>
        </Row>
        <Row>
          <h3>
            <i className="fa-solid fa-basket-shopping"></i>&nbsp;{" "}
            {data.products.length} items
          </h3>
        </Row>
        <Row>
          <small style={{textTransform:"capitalize"}}>
          <i className="fa-solid fa-credit-card"></i> &nbsp; {data.payment_type} Payment
          </small>
        </Row>
        <Row>
          <ViewButton className="" onClick={() => console.log("no")}>
            View Order
          </ViewButton>
          <CancelButton className="" onClick={() => console.log("no")}>
            Cancel Order
          </CancelButton>
        </Row>
      </Info>
    </Order>
  );
}

export default PreparingOrder;
