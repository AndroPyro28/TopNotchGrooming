import React, { useState } from "react";
import {
  IndexPageContainer,
  CarouselWrapper,
  CarouselContainer,
  CarouselSlider,
  ServicesSection,
  ServiceContentContainer,
  ServiceContent,
  OurTeamSection,
  TeamSectionContainer,
  TeamContent
} from "./indexComponents";

function Index() {
  const [pageContent, setPageContent] = useState(0);

  const slidePage = (direction) => {
    setPageContent((prev) => {
      if (direction === "left" && prev > 0) return prev - 1;

      if (direction === "right" && prev < 2) return prev + 1;

      return prev;
    });
  };

  return (
    <IndexPageContainer>
      <CarouselSlider>
        <i
          className="fa-solid fa-chevron-left slidToLeft"
          onClick={() => slidePage("left")}
        ></i>
        <i
          className="fa-solid fa-chevron-right slidToRight"
          onClick={() => slidePage("right")}
        ></i>

        <CarouselWrapper
          style={{
            transform: `translateX(${pageContent * -100}vw)`,
          }}
        >
          <CarouselContainer>
            <img src="/images/lurkingDog.png" />
            <div className="carousel__content">
              <h1>
                Make Your Lovely <br></br>Pets Feel Loved
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br></br> Cumque, laborum.
              </p>
              <button>See Here</button>
            </div>
          </CarouselContainer>

          <CarouselContainer>
            <img src="/images/pedigree.png" />
            <div className="carousel__content">
              <h1>
                The Dog Food That <br></br>loves The Planet
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br></br> Cumque, laborum.
              </p>
              <button>See Here</button>
            </div>
          </CarouselContainer>

          <CarouselContainer>
            <div className="carousel__content">
              <h1>
                Know Your Pets <br></br>Needs
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br></br> Cumque, laborum.
              </p>
              <button>See Here</button>
            </div>
            <img src="/images/petpic1.png" />
          </CarouselContainer>
        </CarouselWrapper>
      </CarouselSlider>

      <ServicesSection>
          <h1>OUR SERVICES</h1>

          <ServiceContentContainer>

            <ServiceContent>
            <i className="fa-solid fa-paw"></i>
            <h1>Pet Grooming</h1>

            <p>We do pet grooming, making your pet good looking and unlock it's best appearance</p>
            </ServiceContent>

            <ServiceContent>
            <i class="fa-solid fa-truck-fast"></i>
            <h1>Shipping</h1>

            <p>We ship products fast and secured for affordable price</p>
            </ServiceContent>

            <ServiceContent>
            <i class="fa-solid fa-bone" style={{
              transform:"rotate(-50deg)"
            }}></i>
            <h1>Online Pet Store</h1>

            <p>We sell pet foods, needs, utility and health care for their needs.</p>
            </ServiceContent>

          </ServiceContentContainer>
          
      </ServicesSection>

      <OurTeamSection>
            <h1>Meet Our Team</h1>

            <TeamSectionContainer>

              <TeamContent>
                <img src='/images/doc1.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

              <TeamContent>
                <img src='/images/doc2.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

              <TeamContent>
                <img src='/images/doc3.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

              <TeamContent>
                <img src='/images/doc4.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

              <TeamContent>
                <img src='/images/doc5.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

              <TeamContent>
                <img src='/images/doc6.jpg' />
                <h1>Dr.Jean</h1>
                <label>Veterenary</label>
              </TeamContent>

            </TeamSectionContainer>
      </OurTeamSection>


    </IndexPageContainer>
  );
}

export default Index;
