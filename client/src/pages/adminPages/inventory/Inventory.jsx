import React from 'react'
import {
    AdminInventoryWrapper, InventoryProductSaleChart, SearchItemContainer,
    ProductStatisticContainer, ProductStatistic
} from "./inventoryComponents"
function Inventory() {
    return (
        <AdminInventoryWrapper>
            <InventoryProductSaleChart>

                <h1>Search for items</h1>

                <small>Name of item or category</small>

                <SearchItemContainer>
                    <input type="text" placeholder="Search items..." />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </SearchItemContainer>

                <ProductStatisticContainer>

                    <div class="product__info">
                        <div class="product__label">
                            <center>
                                <label for="">Purchased</label>
                                <h3>1339</h3>
                            </center>
                        </div>

                        <div class="product__label">
                            <center>
                                <label for="">Available Stock</label>
                                <h3>1028</h3>
                            </center>
                        </div>
                    </div>

                    <ProductStatistic>
                        <canvas id="productChart" height="300px" ></canvas>
                    </ProductStatistic>
                </ProductStatisticContainer>

            </InventoryProductSaleChart>

            
        </AdminInventoryWrapper>
    )
}

export default Inventory