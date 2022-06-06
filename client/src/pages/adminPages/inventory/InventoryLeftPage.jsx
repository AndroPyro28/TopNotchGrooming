import React, { useEffect, useState } from "react";

import {
  InventoryLeftContent,
  SearchItemContainer,
  ProductStatisticContainer,
  ProductStatistic,
} from "./inventoryComponents";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

function InventoryLeftPage() {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        month: "January",
        numberOfSales: 120,
        totalSales: 10320,
      },
      {
        id: 2,
        month: "Febuary",
        numberOfSales: 120,
        totalSales: 10320,
      },
      {
        id: 3,
        month: "March",
        numberOfSales: 120,
        totalSales: 10320,
      },
      {
        id: 4,
        month: "April",
        numberOfSales: 120,
        totalSales: 10320,
      },
    ];

    setProductData({
      labels: mockData?.map((data) => data?.month),
      datasets: [
        {
          label: "Sales information of this product",
          data: mockData?.map((data) => data?.numberOfSales),
        },
      ],
    });
  }, []);

  return (
    <InventoryLeftContent>
      <h1>Search for items</h1>

      <small>Name of item or category</small>

      <SearchItemContainer>
        <input type="text" placeholder="Search items..." />
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
          {productData != null ||
            (productData != {} && (
              <Line data={productData} style={{ height: "300px" }}
              />
            ))}
        </ProductStatistic>
      </ProductStatisticContainer>
    </InventoryLeftContent>
  );
}

export default InventoryLeftPage;
