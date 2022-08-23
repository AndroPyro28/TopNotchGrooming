import React from "react";
import {
  DashboardChartsContainer,
  MonthlySalesChartsContainer,
  NewClients,
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

const rawData = [123, 139, 322, 25, 32, 13, 12, 3, 23, 1, 23, 21];
const total = rawData.reduce((total, current) => total + current, 0);
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

const data = {
  labels,
  datasets: [
    {
      type: "line",
       label: "",
      borderColor: "gray",
      backgroundColor:"white",
      data: [112, 123, 532, 122, 222, 333, 666, 123, 321],
    },
    {
      type: "bar",
       label: "",
      backgroundColor: "#a6b7f1",
      data: [112, 123, 532, 122, 222, 333, 666, 123, 321],
      borderColor: "white",
      borderWidth: 2,
      borderRadius:100
    },
  ],
};

function DashboardCharts() {
  return (
    <DashboardChartsContainer>
      <MonthlySalesChartsContainer>
        <h1>Monthly sales for year 2022</h1>
        <Chart
          data={data}
          options={salesChartOption}
          style={{ position: "relative", }}
        />
      </MonthlySalesChartsContainer>

      <NewClients>
        <h1>New Clients Today</h1>

        <h2>
          <span>54</span>
        </h2>

        <p> See the new 54 clients</p>
      </NewClients>
    </DashboardChartsContainer>
  );
}

export default DashboardCharts;
