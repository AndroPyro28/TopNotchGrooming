import React from 'react'
import { FeedbackdataContainer } from "./components"
function Feedbackdata() {
    return (
        <FeedbackdataContainer>
            <img src="/images/nicePicture.jpg" alt="" />
            <div>
                <span> 5 <i class="fa-solid fa-star" style={{color:"orangered"}}></i></span> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorem, consequuntur iure quae nesciunt veniam exercitationem quis a quasi doloremque repudiandae necessitatibus explicabo placeat totam dicta ipsam! Molestiae, maiores obcaecati.</p>
            </div>

        </FeedbackdataContainer>
    )
}

export default Feedbackdata