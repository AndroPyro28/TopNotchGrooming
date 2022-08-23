import React, { useState } from "react";

import {
  AdminInventoryWrapper,
  PageGlobal
} from "./inventoryComponents";
import InventoryModal from "../../../components/modals/admin_modals/InventoryModal";
import InventoryLeftPage from "./InventoryLeftPage";
import InventoryRightPage from "./InventoryRightPage";
function Inventory() {

  const [searchItem, setSearchItem] = useState({
    petCategory:"",
    ageLimit:"",
    ItemCategory:"",
    itemName:""
  });

  return (
    <AdminInventoryWrapper>
        <PageGlobal />
        <InventoryLeftPage searchItem={searchItem} setSearchItem={setSearchItem}/>
        <InventoryRightPage searchItem={searchItem} setSearchItem={setSearchItem}/>
    </AdminInventoryWrapper>
  );
}

export default Inventory;
