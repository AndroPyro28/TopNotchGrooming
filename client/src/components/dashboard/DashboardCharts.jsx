import React from "react";
import {
  DashboardChartsContainer,
  MonthlySalesChartsContainer,
  FeedbackList,
  SalesAndProductsData,
  DataContainer
} from "./components";

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
import { useEffect } from "react";
import CustomAxios from "../../customer hooks/CustomAxios";
import { useState } from "react";
import DataInformation from "./DataInformation";
import Feedbackdata from "./Feedbackdata";

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



function DashboardCharts() {

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

  const [salesData, setSalesData] = useState([]);
  const [overAllSales, setOverAllSales] = useState(0);
  const [totalSalesToday, setTotalSalesToday] = useState(0);
  const [totalNumberOfAllTransactions, setTotalNumberOfAllTransactions] = useState(0)
  useEffect(() => {
    (async () => {
      const result = await CustomAxios({ METHOD: "GET", uri: "/api/admin/dashboard" });
      const salesArr = new Array(12);
      console.log(result);
      const { data, success, msg } = result;
      const { monthlySales, overAllSales, totalSalesToday, totalNumberOfAllTransactions } = data;
      if (!success && msg?.includes("session expired")) {
        return window.location.reload();
      }
      setOverAllSales(overAllSales);
      setTotalSalesToday(totalSalesToday);
      setTotalNumberOfAllTransactions(totalNumberOfAllTransactions);
      for (const sale in monthlySales) {
        salesArr[sale] = monthlySales[sale];
      }

      setSalesData(salesArr)
    })()
  }, [])

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "",
        borderColor: "gray",
        backgroundColor: "white",
        data: salesData,
      },
      {
        type: "bar",
        label: "",
        backgroundColor: "#a6b7f1",
        data: salesData,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100
      },
    ],
  };


  return (
    <DashboardChartsContainer>
      <SalesAndProductsData>

        <DataContainer>
          <DataInformation icon={'fa-solid fa-ranking-star'} data={totalSalesToday} title="Total Sales Today" />
          <DataInformation icon={'fa-solid fa-bag-shopping'} data={overAllSales} title={`Overall sales for ${new Date().getFullYear()}`} />
          <DataInformation icon={'fa-solid fa-cash-register'} data={totalNumberOfAllTransactions} title="Total number of all transactions" />
        </DataContainer>

        <MonthlySalesChartsContainer>
          {/* <h1>Monthly sales for year {new Date().getFullYear()}</h1> */}
          <Chart
            data={data}
            options={salesChartOption}
            style={{ position: "relative", }}
          />
        </MonthlySalesChartsContainer>

      </SalesAndProductsData>

      <FeedbackList>
        <h1>Feedback</h1>
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      <Feedbackdata />  
      
      </FeedbackList>
    </DashboardChartsContainer>
  );
}

export default DashboardCharts;
