import axios from "axios"
import Cookies from "js-cookie"
function statusLogic({deliveryStatus, setDeliveryStatus, data}) {

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
            const res = await axios.patch(`/api/admin/orderNextStage/${data.reference}`, {
              deliveryStatus: deliveryStatus + 1,
              data
            }, {
                headers: {
                    userinfo: Cookies.get('userToken')
                }
            });
            const {success, msg} = res.data;
            if(!success && msg?.includes('session expired')) {
                return window.location.reload()
            }
            console.log(res.data)
        } catch (error) {
            console.error(error.message)
        }
      }

  return {
    statusSummary,
    orderNextStage
  }
}

export default statusLogic