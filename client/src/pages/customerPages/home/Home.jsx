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
          W e l c o m e 
          &nbsp;
            <br />
            t o  T h e
            &nbsp;
            <br />T o p N o t c h &nbsp; <br /> D o g &nbsp; <br /> G r o o m i n g &nbsp; <br /> M a l o l o s{" "}
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
            (1st shipping) Delivered with US
            <br />
            (2nd shipping) Delivered through LalaMove and J&T
            <br />
            (3rd shipping) Pay via Master Card, Gcash or Cash on Delivery 
            </p>
          </Step>

          <Step>
            <img src="/images/shippingIcon.png" alt="" />
            <h3>Shipping</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, aut.
            </p>
          </Step>

          <Step>
            <img src="/images/shippingIcon.png" alt="" />
            <h3>Shipping</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, aut.
            </p>
          </Step>
        </StepsContainer>
      </StepsWrapper>
    </HomePageContainer>
  );
}

export default Home;
