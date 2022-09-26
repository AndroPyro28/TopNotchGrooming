import React from 'react'
import { FeedbackdataContainer } from "./components"
function Feedbackdata({data}) {
    return (
        <FeedbackdataContainer>
            <img src={data?.profile_image_url} alt="" />
            <div>
                <span> {data?.ratings} <i class="fa-solid fa-xmark" style={{color:"rgb(248,173,62)"}}></i></span> 
                <p>{data?.comments}</p>
            </div>

        </FeedbackdataContainer>
    )
}

export default Feedbackdata