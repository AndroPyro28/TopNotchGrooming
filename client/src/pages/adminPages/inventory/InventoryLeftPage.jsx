import React, { useEffect, useState } from "react";

import {
  InventoryLeftContent,
  SearchItemContainer,
  ProductStatisticContainer,
  ProductStatistic,
} from "./inventoryComponents";

import { Line, Bar } from "react-chartjs-2";

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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },

};

const salesChartOption = {
  responsive:true,
  plugins: {
      title: {
          display: true,
          text: 'Overall sales chart of this product 2022',
          align: "center",
          fontSize: 10,
          color: "black",
      }
    },
  animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
      }
    
  },
  maintainAspectRatio:false
    
}

function InventoryLeftPage({ setSearchItem, searchItem }) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        month: "January",
        numberOfSales: 10,
        totalSales: 1200,
      },
      {
        id: 2,
        month: "Febuary",
        numberOfSales: 20,
        totalSales: 5000,
      },
      {
        id: 3,
        month: "March",
        numberOfSales: 30,
        totalSales: 12100,
      },
      {
        id: 4,
        month: "April",
        numberOfSales: 40,
        totalSales: 3250,
      },
      
      {
        id: 4,
        month: "May",
        numberOfSales: 50,
        totalSales: 4250,
      },

      {
        id: 4,
        month: "June",
        numberOfSales: 60,
        totalSales: 3250,
      },
      {
        id: 4,
        month: "July",
        numberOfSales: 70,
        totalSales: 6250,
      },

      {
        id: 4,
        month: "August",
        numberOfSales: 90,
        totalSales: 5350,
      },

      {
        id: 4,
        month: "September",
        numberOfSales: 100,
        totalSales: 2250,
      },

      {
        id: 4,
        month: "October",
        numberOfSales: 300,
        totalSales: 1250,
      },
    ];

    setProductData({
      labels: mockData?.map((data) => data?.month),
      datasets: [
        {
          label: "Total revenue", // quantity * price
          data: mockData?.map((data) => data?.totalSales), 
          backgroundColor: 'white',
          borderColor: 'black',
        },
      ],
    });
  }, []);

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
              <label htmlFor="">Purchased</label>
              <h3>1339</h3>
            </center>
          </div>

          <div className="product__label">
            <center>
              <label htmlFor="">Available Stock</label>
              <h3>1028</h3>
            </center>
          </div>
        </div>

        <ProductStatistic>
          {productData && <Line data={productData} options={salesChartOption} />}
        </ProductStatistic>
      </ProductStatisticContainer>
    </InventoryLeftContent>
  );
}

export default InventoryLeftPage;
