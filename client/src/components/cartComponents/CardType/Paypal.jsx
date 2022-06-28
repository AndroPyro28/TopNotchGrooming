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
    <PayPalScriptProvider options={{
      "client-id": "AauSqmwmXlqH208Cq4ZTGo5beG8jl3zf2enkD2n-XjbtAkMqn-mv7-Aeue8ZvkQ8TFmhksQ-t670qDEy",
      
      }}>
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