import React from 'react'
import { FeedbackdataContainer } from "./components"
function Feedbackdata({data}) {
    const feedbackLength = [];
    for(let i = 0; i < data.ratings; i++) {
        feedbackLength.push('')
    }

    const rate = feedbackLength?.map(() => <i className="fa-solid fa-paw" style={{color:"rgb(248,173,62)"}}></i>)
    return (
        <FeedbackdataContainer>
            <img src={data?.profile_image_url} alt="" />
            <div>
                <span> {rate} </span> 
                <p>{data?.comments}</p>
            </div>

        </FeedbackdataContainer>
    )
}

export default Feedbackdata