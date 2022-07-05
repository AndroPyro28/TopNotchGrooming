import axios from "axios";

function Gcash({ items, totalAmount, toast }) {
  console.log(totalAmount);

  const gcashPayment = async () => {
    const formData = new FormData();
    if(totalAmount<=10) {
      return toast('Checkout an item first', {type:"info"})
    }
    formData.append("x-public-key", process.env.REACT_APP_GCASH_PUBLIC_KEY);
    formData.append("amount", `${totalAmount}`);
    formData.append("description", "Payment for services rendered");
    formData.append(
      "redirectsuccessurl",
      "http://localhost:3000:3000/customer/payment=success?"
    );

    const res = await axios.post(
      "https://g.payx.ph/payment_request",
      formData,
      {
        withCredentials: false,
      }
    );
    
    const { data } = res.data;

    const { checkouturl } = data;
    window.location.assign(checkouturl);
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
