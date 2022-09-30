import React, { useEffect, useState } from "react";
import {
  SalesDataContainer,
  DataContainer1,
  DataContainer2,
} from "./components";
import SaleInfo from "./SaleInfo";
import CustomAxios from "../../customer hooks/CustomAxios";
import { Line, Bar, Pie, Doughnut, Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  LineController,
  BarController,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LineController,
  BarController
);

const salesChartOption = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      align: "center",
      fontSize: 50,
      color: "black",
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 0,
      to: 1,
      loop: true,
    },
  },
  scales: {
    y: {
      // defining min and max so hiding the dataset does not change scale range
      min: 0,
    },
  },
  maintainAspectRatio: false,
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LineController,
  BarController
);

function SalesData() {
  const [salesData, setSalesData] = useState([]);
  const [transactionsData, setTransactionsData] = useState([]);
  const [overAllSales, setOverAllSales] = useState(0);
  const [totalSalesToday, setTotalSalesToday] = useState(0);
  const [totalNumberOfAllTransactions, setTotalNumberOfAllTransactions] =
    useState(0);

  useEffect(() => {
    (async () => {
      const result = await CustomAxios({
        METHOD: "GET",
        uri: "/api/admin/dashboard",
      });
      const salesArr = new Array(12);
      const monthlyTransactions = new Array(12);
      const { data, success, msg } = result;
      const {
        monthlySales,
        overAllSales,
        totalSalesToday,
        totalNumberOfAllTransactions,
        totalTransactionsPerMonth,
      } = data;
      if (!success && msg?.includes("session expired")) {
        return window.location.reload();
      }

      setOverAllSales(overAllSales);
      setTotalSalesToday(totalSalesToday);
      setTotalNumberOfAllTransactions(totalNumberOfAllTransactions);

      for (const sale in monthlySales) {
        salesArr[sale] = monthlySales[sale];
      }
      for (const transaction in totalTransactionsPerMonth) {
        monthlyTransactions[transaction] =
          totalTransactionsPerMonth[transaction];
      }

      setSalesData(salesArr);
      setTransactionsData(monthlyTransactions);
    })();
  }, []);
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Monthly sales",
        borderColor: "black",
        backgroundColor: "white",
        data: salesData,
      },
      {
        type: "bar",
        label: "Monthly Transactions",
        backgroundColor: "#a6b7f1",
        data: transactionsData,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
      },
    ],
  };

  return (
    <SalesDataContainer>
      <DataContainer1>
        <SaleInfo
          icon={"fa-solid fa-ranking-star"}
          data={totalSalesToday}
          title="Total sales today"
        />
        <SaleInfo
          icon={"fa-solid fa-bag-shopping"}
          data={overAllSales}
          title={`Total sales for ${new Date().getFullYear()}`}
        />
        <SaleInfo
          icon={"fa-solid fa-cash-register"}
          data={totalNumberOfAllTransactions}
          title="Total number of all transactions"
        />
        {/* <SaleInfo /> */}
      </DataContainer1>

      <DataContainer2>
        <Chart
          data={data}
          options={salesChartOption}
          style={{ position: "relative" }}
        />
      </DataContainer2>
    </SalesDataContainer>
  );
}

export default SalesData;