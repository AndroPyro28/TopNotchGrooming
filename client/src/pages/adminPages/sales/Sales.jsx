import React from "react";
import FilterData from "../../../components/sales/FilterData";
import SalesData from "../../../components/sales/SalesDataContainer";
import {
  SaleContainerPage,
  GlobalStyles,
  FilterDataContainer,
  Title,
} from "./components";
import SaleOrders from "../../../components/sales/SaleOrders";
import productPriceFormatter from "../../../helpers/ProductPriceFormatter";
import { useState } from "react";
import { useEffect } from "react";
import CustomAxios from "../../../customer hooks/CustomAxios";
function Sales() {
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const [totalSalesByDateBetween, setTotalSalesByDateBetween] = useState(0);
  const [orders, setOrders] = useState()
  useEffect(() => {
    (async () => {
      try {

        const result = await CustomAxios({
          METHOD: "POST", values: {filterDateFrom, filterDateTo}, uri:'/api/admin/saleReport'
        })
        const {msg, success, data} = result;
        console.log(data)
        if(msg?.includes('session expired') && !success) {
          return window.location.reload();
        }
         const totalSales = data?.reduce((total, currentIteration)=> total + currentIteration.total_amount, 0);
         setOrders(data);
         setTotalSalesByDateBetween(prev => totalSales)
      } catch (error) {
        console.error(error.message)
      }
    })()
  }, [filterDateFrom, filterDateTo]);

  return (
    <SaleContainerPage>
      <GlobalStyles />
      <SalesData />

      <FilterDataContainer>
        <Title>Total sales: {productPriceFormatter(totalSalesByDateBetween)}</Title>
        <FilterData dateSetter={{ setFilterDateFrom, setFilterDateTo }} />
      </FilterDataContainer>
      <SaleOrders orders={orders} />
    </SaleContainerPage>
  );
}

export default Sales;
