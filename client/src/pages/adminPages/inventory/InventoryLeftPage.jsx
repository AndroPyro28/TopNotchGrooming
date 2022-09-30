import React, { useEffect, useState } from "react";

import {
  InventoryLeftContent,
  SearchItemContainer,
  ProductStatisticContainer,
  ProductStatistic,
} from "./inventoryComponents";
import CustomAxios from "../../../customer hooks/CustomAxios";
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
  LineElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const salesChartOption = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: `Total sales for ${new Date().getFullYear()}`,
      align: "center",
      fontSize: 10,
      color: "black",
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
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

function InventoryLeftPage({ setSearchItem, searchItem }) {
  const [salesData, setSalesData] = useState([]);
  const [overAllSales, setOverAllSales] = useState(0);
  const [totalNumberOfAllTransactions, setTotalNumberOfAllTransactions] = useState(0);
  
  useEffect(() => {
    (async () => {
      try {
        const result = await CustomAxios({
          METHOD: "GET",
          uri: "/api/admin/dashboard",
        });
        const salesArr = new Array(12);
        const { data, success, msg } = result;
        const {
          monthlySales,
          overAllSales,
          totalNumberOfAllTransactions,
        } = data;

        if (!success && msg?.includes("session expired")) {
          return window.location.reload();
        }

        setOverAllSales(overAllSales);
        setTotalNumberOfAllTransactions(totalNumberOfAllTransactions);
        for (const sale in monthlySales) {
          salesArr[sale] = monthlySales[sale];
        }

        setSalesData(salesArr);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "",
        borderColor: "black",
        backgroundColor: "white",
        data: salesData,
      },
    ],
  };

  return (
    <InventoryLeftContent>
      <h1>Search for items</h1>

      <small>Name of an item</small>

      <SearchItemContainer>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchItem.itemName}
          onChange={(e) =>
            setSearchItem({ ...searchItem, itemName: e.target.value })
          }
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchItemContainer>

      <ProductStatisticContainer>
        <div className="product__info">
          <div className="product__label">
            <center>
              <label htmlFor=""> {`Total sales for ${new Date().getFullYear()}`} </label>
              <h3>{overAllSales}</h3>
            </center>
          </div>

          <div className="product__label">
            <center>
              <label htmlFor=""> Total transactions </label>
              <h3>{totalNumberOfAllTransactions}</h3>
            </center>
          </div>
        </div>

        <ProductStatistic>
          {data && <Line data={data} options={salesChartOption} />}
        </ProductStatistic>
      </ProductStatisticContainer>
    </InventoryLeftContent>
  );
}

export default InventoryLeftPage;
