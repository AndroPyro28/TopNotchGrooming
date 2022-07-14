import React from "react";
import { TableRowData, T_Data } from "../../pages/adminPages/orders/components";
function OrderData({data}) {
  return (
    <TableRowData data-status="completed">
      <T_Data> 45548 </T_Data>
      <T_Data> Andro Eugenio </T_Data>
      <T_Data> Wagg Food set, etc </T_Data>
      <T_Data> 05/21/22 </T_Data>
      <T_Data className="price"> ₱ 5512.00 </T_Data>
      <T_Data className={`status status__complete`}> Completed </T_Data>
      <T_Data> Gcash Payment </T_Data>
    </TableRowData>
  );
}

export default OrderData;
