import axios from "axios";
import Cookies from "js-cookie"
import {useSelector} from "react-redux";

function Gcash({ items, totalAmount, toast }) {
  const {currentUser} = useSelector(state => state?.user);
  
  const gcashPayment = async () => {

    try {
      if(totalAmount <= 0) {
        return toast('Checkout an item first', {type: 'info'})
      }
      const checkoutProducts = items.filter(item => item.purchase);
      const res = await axios.post(`/api/customer/checkout/gcash`, {
        checkoutProducts,
        totalAmount
      }, {
        headers: {
          userInfo: Cookies.get('userToken')
        }
      });
      const {success, msg, proceedPayment, method, checkoutUrl } = res.data;

      if(!success && msg?.includes('session expired')) {
        return window.location.reload();
      }

      if(!proceedPayment) {
        return toast(msg, {type: 'warning'})
      }
      localStorage.setItem('onCheckoutProducts', JSON.stringify({checkoutProducts, method}));
  
      window.location.assign(checkoutUrl);

    } catch (error) {
      console.error(error.message);
    }
    // try {
    //   const formData = new FormData();
    //   if(totalAmount<=10) {
    //     return toast('Checkout an item first', {type:"info"})
    //   }
    //   formData.append("x-public-key", process.env.REACT_APP_GCASH_PUBLIC_KEY);
    //   formData.append("amount", '1');
    //   formData.append("description", "Payment for services rendered");
    //   formData.append(
    //     "redirectsuccessurl",
    //     "http://localhost:3000:3000/customer/payment=success"
    //   );
    //   formData.append(
    //     "redirectfailurl",
    //     "http://localhost:3000/customer/cart"
    //   );
    //   formData.append(
    //     "customeremail",
    //     `${currentUser?.email}`
    //   );
  
    //   formData.append(
    //     "customermobile",
    //     `${currentUser?.phoneNo}`
    //   );
  
    //   formData.append(
    //     "customername",
    //     `${currentUser?.firstname} ${currentUser?.lastname}`
    //   );
    //   const res = await axios.post(
    //     "https://g.payx.ph/payment_request",
    //     formData,
        
    //   );
      
    //   const { data } = res.data;
  
    //   const { checkouturl } = data;
    //   console.log(data);
    //   window.location.assign(checkouturl);
    // } catch (error) {
    //   console.error(error.message)
    // }
    
  };

  return (
    <div style={{ marginBlock: 20 }}>
      <a
        onClick={gcashPayment}
        class="x-getpaid-button"
        style={{ cursor: "pointer" }}
      >
        <img src="https://getpaid.gcash.com/assets/img/paynow.png" />
      </a>
    </div>
  );
}

export default Gcash;
