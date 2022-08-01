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
            Y o u r &nbsp;
            <br /> f u r b a b y ' s &nbsp; <br /> n e e d.{" "}
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
            Odio, aspernatur! Necessitatibus fuga veniam, <br />
            ipsum ipsam voluptate porro autem assumenda inventore.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, aut.
            </p>
          </Step>

          <Step>
            <img src="/images/bagIcon.png" alt="" />
            <h3>Pet Store</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, aut.
            </p>
          </Step>

          <Step>
            <img src="/images/appointmentIcon.png" alt="" />
            <h3>Apointment</h3>
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
