import React from "react";
import { Order, Info, Row, ViewButton } from "./components";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";
import { useNavigate } from "react-router-dom";

function ToReceiveOrder({ data }) {
  const navigate = useNavigate();
  
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
          <small>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "red" }}
            ></i>
            &nbsp; {data.billing_address} {data.zip_code} ( North Luzon Philippines ){" "}
          </small>
        </Row>
        <Row>
          <small>
            <i className="fa-solid fa-phone"></i>&nbsp; (+
            {data.contact})
          </small>
        </Row>

        <Row>
          <small style={{textTransform:"capitalize"}}>
          <i className="fa-solid fa-credit-card"></i> &nbsp; {data.payment_type} Payment
          </small>
        </Row>

        <Row>
          <ViewButton className="" onClick={() => navigate(`/customer/purchases/${data.reference}`)}>
            View Order
          </ViewButton>
        </Row>
      </Info>
    </Order>
  );
}

export default ToReceiveOrder;
