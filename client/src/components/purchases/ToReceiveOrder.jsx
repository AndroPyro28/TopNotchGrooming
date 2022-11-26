import React from "react";
import { Order, Info, Row, ViewButton, ReceivedButton } from "./components";
import productPriceFormatter from "../../helpers/ProductPriceFormatter";
import { useNavigate } from "react-router-dom";
import CustomAxios from "../../customer hooks/CustomAxios";
import {useDispatch, useSelector } from 'react-redux';
import {open} from '../../redux/feedbackSlice'
function ToReceiveOrder({ data, setOrders }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);

  const orderCompleted = async () => {
    try {

      const customer = {
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
        contact: currentUser.phoneNo,
        email: currentUser.email
      }
      
      data.customer = customer;

      const response = await CustomAxios({
        METHOD: "PATCH",
        uri: `/api/admin/orderNextStage/${data.reference}`,
        values: { deliveryStatus: 4, data },
      });
      
      const { success, msg } = response;
      if (!success && msg?.includes("session expired")) {
        return window.location.reload();
      }

      setOrders(prev => prev.filter(order => order.reference != data.reference && order.id != data.id))
      dispatch(open())
    } catch (error) {
      console.error(error.message);
    }
  };

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
            &nbsp; {data.billing_address} {data.zip_code} ( North Luzon
            Philippines ){" "}
          </small>
        </Row>
        <Row>
          <small>
            <i className="fa-solid fa-phone"></i>&nbsp; (+
            {data.contact})
          </small>
        </Row>

        <Row>
          <small style={{ textTransform: "capitalize" }}>
            <i className="fa-solid fa-credit-card"></i> &nbsp;{" "}
            {data.payment_type} Payment
          </small>
        </Row>

        <Row>
          <ViewButton
            className=""
            onClick={() => navigate(`/customer/purchases/${data.reference}`)}
          >
            View Order
          </ViewButton>
          {data.delivery_status === 3 && (
            <ReceivedButton onClick={orderCompleted}>Order Received</ReceivedButton>
          )}
        </Row>
      </Info>
    </Order>
  );
}

export default ToReceiveOrder;
