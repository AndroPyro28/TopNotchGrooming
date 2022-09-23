import React from "react";
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import { UserActivities, Activity, RowInfo } from "./components";

function OrderActivities() {

  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({METHOD:"GET", uri:"/api/customer/getAllOrderActivities"})
        console.log('orders...')
      } catch (error) {
        console.error(error.message)
      }
    })()
  }, []);


  return (
    <UserActivities>
      <h2>Completed Orders</h2>
      <RowInfo>
        <Activity status={'cancelled'}>
          <span class="date cancelled">12 May 2022 9:00AM</span>
        </Activity>

        <Activity status={'cancelled'}>
          <span class="quantity">Quantity: 10</span>
        </Activity>

        <Activity status={'cancelled'}>
          <span class="service">Amount: ₱ 5000.00</span>
        </Activity>

        <Activity status={'cancelled'}>
          <span class="status">Cancelled</span>
        </Activity>
      </RowInfo>

      <RowInfo>
        <Activity status={'onGoing'}>
          <span class="date cancelled">12 May 2022 9:00AM</span>
        </Activity>

        <Activity status={'onGoing'}>
          <span class="quantity">Quantity: 10</span>
        </Activity>

        <Activity status={'onGoing'}>
          <span class="service">Amount: ₱ 5000.00</span>
        </Activity>

        <Activity status={'onGoing'}>
          <span class="status">onGoing</span>
        </Activity>
      </RowInfo>

      <RowInfo>
        <Activity status={'completed'}>
          <span class="date">12 May 2022 9:00AM</span>
        </Activity>

        <Activity status={'completed'}>
          <span class="quantity">Quantity: 10</span>
        </Activity>

        <Activity status={'completed'}>
          <span class="service">Amount: ₱ 5000.00</span>
        </Activity>

        <Activity status={'completed'}>
          <span class="status">Completed</span>
        </Activity>
      </RowInfo>
    </UserActivities>
  );
}

export default OrderActivities;
