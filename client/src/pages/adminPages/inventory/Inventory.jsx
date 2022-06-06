import React from "react";

import {
  AdminInventoryWrapper,
  PageGlobal
} from "./inventoryComponents";
import InventoryLeftPage from "./InventoryLeftPage";
import InventoryRightPage from "./InventoryRightPage";
function Inventory() {
  return (
    <AdminInventoryWrapper>
        <PageGlobal />
        <InventoryLeftPage />
        <InventoryRightPage />
    </AdminInventoryWrapper>
  );
}

export default Inventory;
