import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useNavigate} from "react-router-dom"

function Paypal({items, totalAmount, toast}) {
  const navigate = useNavigate();

  return (
    <div style={{marginBlock:20}}>
        <PayPalScriptProvider options={{
          "client-id": process.env.REACT_APP_PAYPAL_SANDBOX_CLIENT_ID,
          }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: Math.ceil(totalAmount / 55),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                alert("Transaction completed by " + name);
                navigate.push('/localhost:3000/customer/payment=success')
              }}
              onError={(error) => {
                if(totalAmount <= 0) {
                return toast('Checkout an item first', {type:'info'})
                }
              }}
            />
        </PayPalScriptProvider>
    </div>
  )
}

export default Paypal