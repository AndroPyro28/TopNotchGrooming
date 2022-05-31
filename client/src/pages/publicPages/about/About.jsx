import React from 'react'
import {
    AboutPageContainer,
    AboutBannerContainer,
    DogImage,
    Mission_Vission,
    BestSellerSection

} from "./aboutComponents";
function About() {
  return (
    <AboutPageContainer>
        <AboutBannerContainer>
            <DogImage src='/images/standingDog.png' />

            <div class="first__banner__content">
                <h1> <span>G i v e &nbsp; Y o u r &nbsp; P e t  &nbsp;a</span><span>Healthy Treat</span></h1>
            </div>
        </AboutBannerContainer>

        <Mission_Vission>
            <div class="mission">
                <h2>M i s s i o n</h2>
                <p>We are committed to foster best dog grooming practices. We make sure that your dogs not only MUST look their BEST but MUST be SAFE also at all TIMES.</p>
            </div>

            <div class="vision">
                <h2>V i s i o n</h2>

                <p>We at Top Notch Grooming believe that Grooming is Not just about Shaving. It is a combination of ART and SCIENCE.</p>
            </div>
        </Mission_Vission>

        <BestSellerSection>

            <div class="deal__of__the__week">
                <div class="content">
                    <h1>Deal Of The Week</h1>
                    <button>Shop Now</button>
                </div>
            </div>

            <div class="best__products"></div>
            </BestSellerSection>

    </AboutPageContainer>
  )
}

export default About