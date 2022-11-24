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
  Content,
} from "./indexComponents";
import CustomAxios from "../../../customer hooks/CustomAxios";
import { motion } from "framer-motion";
import FeedbackContent from "./FeedbackContent";

function Index() {
  const [pageContent, setPageContent] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [maxPage, setMaxPage] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await CustomAxios({
          METHOD: "GET",
          uri: "/api/public/getFirstThreeFeedback",
        });
        setFeedbacks(res);
        setMaxPage(Math.ceil(res.length / 3));
      } catch (error) {
        console.error("error here", error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await CustomAxios({
          METHOD: "GET",
          uri: "/api/public/getPinnedEmployee",
        });
        setEmployees(res);
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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchFeedbacks = (
    <FeedbackSection>
      <motion.h1 variants={childVariants} animate="animate" initial="initial">
        Our Feedbacks
      </motion.h1>
      <motion.div
        className="ServiceContentContainer feedbackContentContainer"
        variants={cardVariants}
        animate="animate"
        initial="initial"
      >
        {feedbacks?.slice(3 * currentPage, 3 * currentPage + 3).map((data) => (
          <FeedbackContent data={data} />
        ))}
      </motion.div>

      {maxPage > 0 && (
        <div className="pagination">
          {" "}
          <i
            class="fa-solid fa-chevron-left"
            onClick={() =>
              setCurrentPage((prev) => (prev !== 0 ? prev - 1 : prev))
            }
          ></i>{" "}
          {currentPage + 1}{" "}
          <i
            class="fa-solid fa-chevron-right"
            onClick={() =>
              setCurrentPage((prev) => (prev + 1 < maxPage ? prev + 1 : prev))
            }
          ></i>{" "}
        </div>
      )}
    </FeedbackSection>
  );
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
                Your pet deserves to be treated as if it were a member of your
                family. As a member of your family, we make sure that your pet
                receives the respect and care they merit.
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
                We always work to give your pet the ideal groom and ensure that
                they are feeling their best during the whole experience.
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

      {employees.length > 0 && (
        <OurTeamSection>
          <motion.h1
            variants={childVariants}
            animate="animate"
            initial="initial"
          >
            {/* Employee of the month */}
          </motion.h1>

          <motion.div
            className="TeamSectionContainer"
            variants={cardVariants}
            animate="animate"
            initial="initial"
          >
            <TeamContent>
              {employees?.map((employee) => (
                <div>
                  <img src={employee?.profile_image_url} />
                  <h1>
                    {" "}
                    {employee?.firstname} {employee?.lastname}{" "}
                  </h1>
                  <label>Employee</label>
                </div>
              ))}
            </TeamContent>
            <Content>
              <h1>
                Employees of the month <i class="fa-solid fa-award"></i> ({labels[new Date().getMonth()]}{" "}
                {new Date().getFullYear()}) 
              </h1>
              <p>
                Top-Notch Dog Grooming Malolos honors him/her as the most
                excellent employee of the month for his/her outstanding work and
                customer service. We appreciate your dedication and consider it
                a privilege to have you on our team. Congratulations!
              </p>
              {/* <label htmlFor="">Total Groom of this month {employee?.appointmentCounts}</label> */}
            </Content>
          </motion.div>
        </OurTeamSection>
      )}

      {feedbacks?.length > 0 && fetchFeedbacks}
    </IndexPageContainer>
  );
}

export default Index;
