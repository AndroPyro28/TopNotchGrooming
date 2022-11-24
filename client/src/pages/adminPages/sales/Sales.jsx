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
import exportFromJSON from "export-from-json";

import FormateDateLocal from "../../../helpers/FormateDateLocal";
import Get_Date_N_Time from "../../../helpers/Get_Date_N_Time";

function Sales() {
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const [totalSalesByDateBetween, setTotalSalesByDateBetween] = useState(0);
  const [orders, setOrders] = useState();
  const [monthly, setMonthly] = useState()
  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({
          METHOD: "POST",
          values: { filterDateFrom, filterDateTo },
          uri: "/api/admin/saleReport",
        });
        const { msg, success, data } = result;
        console.log(data);
        if (msg?.includes("session expired") && !success) {
          return window.location.reload();
        }
        const totalSales = data?.reduce(
          (total, currentIteration) =>
            currentIteration.order_status !== "cancelled"
              ? total + currentIteration.total_amount
              : total,
          0
        );
        setOrders(data);
        setTotalSalesByDateBetween((prev) => totalSales);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [filterDateFrom, filterDateTo]);

  const exportType = exportFromJSON.types.xls;

  const exportTransactionsToExcel = () => {
    
    const formattedData = orders.map((order) => {
      const formmattedDate = FormateDateLocal(order.order_date);
      const { newDate, newTime } = Get_Date_N_Time(formmattedDate);
      return {
        customer_name: `${order.firstname} ${order.lastname}`,
        billing_address: order.billing_address,
        transactionId: order.reference,
        payment_method: order.payment_type,
        total_amount: order.total_amount,
        date_time: `${newDate} ${newTime}`,
      };
    });

    const month = new Date().getMonth()
    const data = {
      TotalSalesThisYear: monthly.overAllSales,
      TotalCancelledTransactionsThisYear: monthly.totalCancelledTransactions,
      TotalSuccessFullTransactionsThisYear: monthly.totalNumberOfAllTransactions,
      TotalSalesToday: monthly.totalSalesToday,
      TotalSalesThisMonth: monthly.monthlySales[month]
    }
     
    let divider = [];
      divider.push({'|': '|'})

     const newData = [ data, ...formattedData, ]
  
    const fileName = "Summary Record";

    exportFromJSON({ data: newData, fileName, exportType});
  };

  return (
    <SaleContainerPage>
      <GlobalStyles />
      <SalesData setMonthly={setMonthly}/>
      <div className="exportButtons">
        <button onClick={exportTransactionsToExcel}>
          <i class="fa-solid fa-file-export"></i> Export Transaction Summary to excel{" "}
        </button>
      </div>

      <FilterDataContainer>
        <Title>
          Total sales: {productPriceFormatter(totalSalesByDateBetween)}
        </Title>
        <FilterData dateSetter={{ setFilterDateFrom, setFilterDateTo }} />
      </FilterDataContainer>
      <SaleOrders orders={orders} />
    </SaleContainerPage>
  );
}

export default Sales;
