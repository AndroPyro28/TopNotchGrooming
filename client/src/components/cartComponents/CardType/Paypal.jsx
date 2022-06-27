import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import shopingCartLogic from '../logic/shopingCartLogic';
function Paypal({items}) {
  const {calculateTotalAmount} = shopingCartLogic();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    (() => {
      const total = (calculateTotalAmount(items) * 0.01 + calculateTotalAmount(items)) / 55;
      setTotalAmount(total.toFixed(2))
    })()
  }, [items])

  return (
    <div style={{marginBlock:50}}>
    <PayPalScriptProvider>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
    </PayPalScriptProvider>
    </div>
  )
}

export default Paypal