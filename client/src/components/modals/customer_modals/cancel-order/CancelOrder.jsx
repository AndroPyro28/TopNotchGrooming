import React from 'react'
import { useState } from 'react'
import {CancelOrderBackdrop, CancelForm, ChoiceContainer, ChoiceList, Choice, ChoiceInput} from './components'
import CustomAxios from '../../../../customer hooks/CustomAxios'
function CancelOrder({setToggleCancel, setOrders, id}) {
    const cancelChoice1 = [
        'Want to change payment method',
        'Need to change shipping address',
        'I want to order a different product',
        'I placed a duplicate order'
    ]
    const cancelChoice2 = [
        'Change of mind',
        'Delivery takes too long',
        'Order created by mistake',
        'Other reasons'
    ]

    const [reason, setReason] = useState('');
    const [otherReason, setOtherReason] = useState('')
   
    const cancelOrder = async () => {
        try {
          const res = await CustomAxios({METHOD:'PATCH', uri: `/api/customer/cancelOrder/${id}`, values: {
            reason: `${reason}${otherReason ? `, ` + otherReason : ''}`
          }});
          setOrders(prev => prev.filter(order => order.id != id));
        } catch (error) {
          console.error(error.message)
        } finally {
          setToggleCancel(false)
        }
      }
  return (
    <CancelOrderBackdrop>
        <CancelForm>
            <h1>Why cancel the order?</h1>
            <i className="fa-solid fa-xmark closeBtn" onClick={() => setToggleCancel(false)}></i>
            <ChoiceContainer>
            <ChoiceList>
                {
                    cancelChoice1.map(choice => (
                        <Choice> <input name="reason" type="radio" value={choice} id={choice} onChange={(e) => setReason(e.target.value)}  /> <label htmlFor={choice}>{choice}</label></Choice>
                    ))
                }
            </ChoiceList>

            <ChoiceList>
                {
                    cancelChoice2.map(choice => (
                        <Choice><input name="reason" type="radio" value={choice} id={choice} onChange={(e) => setReason(e.target.value)}  /> <label htmlFor={choice}>{choice}</label> </Choice>
                    ))
                }
            </ChoiceList>
                
        </ChoiceContainer>
        {
            reason.toLocaleLowerCase() === 'other reasons' && <textarea onChange={(e) => setOtherReason(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        }
                <button onClick={cancelOrder}>Submit</button>
        </CancelForm>

        
    </CancelOrderBackdrop>
  )
}

export default CancelOrder