import axios from "axios";
import Cookies from "js-cookie";
import CustomAxios from "../../customer hooks/CustomAxios";
function statusLogic({ deliveryStatus, setDeliveryStatus, data }) {
  const statusSummary = (stage) => {
    let summary = "notActive";

    if (deliveryStatus == stage) {
      summary = "active";
    }

    if (deliveryStatus > stage) {
      summary = "completed";
    }

    return summary;
  };

  const orderNextStage = async () => {
    try {
      setDeliveryStatus(deliveryStatus + 1);
      const response = await CustomAxios({
        METHOD: "PATCH",
        uri: `/api/admin/orderNextStage/${data.reference}`,
        values: { deliveryStatus: deliveryStatus + 1, data },
      });
      
      const { success, msg } = response;
      if (!success && msg?.includes("session expired")) {
        return window.location.reload();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    statusSummary,
    orderNextStage,
  };
}

export default statusLogic;
