import React from "react";
import {
  HomePageContainer,
  HomeBannerContainer,
  BannerContent,
  StepsWrapper,
  StepsContainer,
  Step
} from "./homeComponents.js";
function Home() {
  
  return (
    <HomePageContainer>
      <HomeBannerContainer>
        <BannerContent>
          <h3>
          W e l c o m e   &nbsp; t o   &nbsp; T h e &nbsp;  T o p N o t c h
            &nbsp;
            <br /> D o g &nbsp; G r o o m i n g &nbsp; M a l o l o s{" "}
          </h3>
          <p>
          Your furbaby’s need
          </p>
        </BannerContent>
      </HomeBannerContainer>

      <StepsWrapper>
        <h1>Start your first step with us</h1>
        <StepsContainer>
          <Step>
            <img src="/images/iconRecord.png" alt="" />
            <h3>Live Streaming</h3>
            <p>
            WATCH Live Pet Grooming Here 
            </p>
          </Step>

          <Step>
            <img src="/images/bagIcon.png" alt="" />
            <h3>Pet Store</h3>
            <p>
            Shop your favorite pet products and get delivered to your doorstep. 
            </p>
          </Step>

          <Step>
            <img src="/images/appointmentIcon.png" alt="" />
            <h3>Apointment</h3>
            <p>
            Get an appointment now! 
            </p>
          </Step>

          <Step>
            <img src="/images/shippingIcon.png" alt="" />
            <h3>Shipping</h3>
            <p>
             Deliver with Us
            </p>
          </Step>
          
        </StepsContainer>
      </StepsWrapper>
    </HomePageContainer>
  );
}

export default Home;
