import React, { useState, useEffect } from "react";
import {
  IndexPageContainer,
  CarouselWrapper,
  CarouselContainer,
  CarouselSlider,
  ServicesSection,
  ServiceContent,
  OurTeamSection,
  TeamContent,
  FeedbackSection,
} from "./indexComponents";
import CustomAxios from "../../../customer hooks/CustomAxios";
import { motion } from "framer-motion";
import FeedbackContent from "./FeedbackContent";
import Board from "../../../components/livestream_room/Board";

function Index() {
  const [pageContent, setPageContent] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await CustomAxios({
          METHOD: "GET",
          uri: "/api/public/getFirstThreeFeedback",
        });
        console.log(res);
        setFeedbacks(res);
      } catch (error) {
        console.error("error here", error.message);
      }
    })();
  }, []);
  const slidePage = (direction) => {
    setPageContent((prev) => {
      if (direction === "left") {
        return prev > 0 ? prev - 1 : 2;
      } else {
        return prev < 2 ? prev + 1 : 0;
      }
    });
  };

  const childVariants = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const fetchFeedbacks = <FeedbackSection>
  <motion.h1 variants={childVariants} animate="animate" initial="initial">
    Our Feedbacks
  </motion.h1>
  <motion.div
    className="ServiceContentContainer"
    variants={cardVariants}
    animate="animate"
    initial="initial"
  >
    {
      feedbacks.map((data) => <FeedbackContent data={data} />)
    }

  </motion.div>
</FeedbackSection>
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
            <motion.img src="/images/lurkingDog.png" />
            <div className="carousel__content">
              <motion.h1
                whileDrag={{
                  scale: 1,
                  cursor: "grabbing",
                }}
                drag
                dragConstraints={{ left: 5, top: 5, right: 5, bottom: 5 }}
              >
                Make Your Lovely <br></br>Pets Feel Loved
              </motion.h1>
              <p>
              Your pet deserves to be treated as if it were a member of your family. As a member of your family, we
              make sure that your pet receives the respect and care they merit. 
              </p>
              {/* <button>See Here</button> */}
            </div>
          </CarouselContainer>

          <CarouselContainer>
            <img src="/images/pedigree.png" />
            <div className="carousel__content">
              <motion.h1
                whileDrag={{
                  scale: 1,
                  cursor: "grabbing",
                }}
                drag
                dragConstraints={{ left: 5, top: 5, right: 5, bottom: 5 }}
              >
                The Dog Food That <br></br>loves The Planet
              </motion.h1>
              <p>
              Your bestfriend deserves the best meal! Make your friend happy
              </p>
              {/* <button>See Here</button> */}
            </div>
          </CarouselContainer>

          <CarouselContainer>
            <div className="carousel__content">
              <motion.h1
                whileDrag={{
                  scale: 1,
                  cursor: "grabbing",
                }}
                drag
                dragConstraints={{ left: 5, top: 5, right: 5, bottom: 5 }}
              >
                Know Your Pets <br></br>Needs
              </motion.h1>
              <p>
              We always work to give your pet the ideal groom and ensure that they are feeling their best during the
              whole experience.
              </p>
              {/* <button>See Here</button> */}
            </div>
            <img src="/images/petpic1.png" />
          </CarouselContainer>
        </CarouselWrapper>
      </CarouselSlider>
      
      <ServicesSection>
        <motion.h1 variants={childVariants} animate="animate" initial="initial">
          OUR SERVICES
        </motion.h1>

        <motion.div
          className="ServiceContentContainer"
          variants={cardVariants}
          animate="animate"
          initial="initial"
        >
          <ServiceContent>
            <i className="fa-solid fa-paw"></i>
            <h1>Pet Grooming</h1>

            <p>
              We do pet grooming, making your pet good looking and unlock it's
              best appearance
            </p>
          </ServiceContent>

          <ServiceContent>
            <i class="fa-solid fa-truck-fast"></i>
            <h1>Shipping</h1>

            <p>We ship products fast and secured for affordable price</p>
          </ServiceContent>

          <ServiceContent>
            <i
              class="fa-solid fa-bone"
              style={{
                transform: "rotate(-50deg)",
              }}
            ></i>
            <h1>Online Pet Store</h1>

            <p>
              We sell pet foods, needs, utility and health care for their needs.
            </p>
          </ServiceContent>
        </motion.div>
      </ServicesSection>

      {
        feedbacks?.length > 0 && fetchFeedbacks
      }

      <OurTeamSection>
        <motion.h1 variants={childVariants} animate="animate" initial="initial">
          Meet Our Team
        </motion.h1>

        <motion.div
          className="TeamSectionContainer"
          variants={cardVariants}
          animate="animate"
          initial="initial"
        >
          <TeamContent>
            <img src="/images/defaultImage.png" />
            <h1> Staff 1 </h1>
            <label>Staff</label>
          </TeamContent>

          <TeamContent>
          <img src="/images/defaultImage.png" />
            <h1> Staff 2 </h1>
            <label>Staff</label>
          </TeamContent>

          <TeamContent>
          <img src="/images/defaultImage.png" />
            <h1> Staff 3 </h1>
            <label>Staff</label>
          </TeamContent>

          <TeamContent>
          <img src="/images/defaultImage.png" />
            <h1> Staff 4 </h1>
            <label>Staff</label>
          </TeamContent>

          <TeamContent>
          <img src="/images/defaultImage.png" />
            <h1> Staff 5 </h1>
            <label>Staff</label>
          </TeamContent>

          <TeamContent>
          <img src="/images/defaultImage.png" />
            <h1> Staff 6 </h1>
            <label>Staff</label>
          </TeamContent>
        </motion.div>
      </OurTeamSection>
    </IndexPageContainer>
  );
}

export default Index;
