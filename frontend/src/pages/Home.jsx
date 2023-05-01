import React from "react";
import "../styles/home.css";

import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";

const Home = () => {
  return (
    <>
      {/*==========hero-section start==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highLight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  accusamus adipisci aperiam consequatur corporis culpa delectus
                  deleniti dolore doloremque dolores exercitationem expedita
                  fugiat id iste iusto laudantium necessitatibus nobis nostrum
                  obcaecati, officiis perspiciatis provident, quae quam qui,
                  quia quis rem reprehenderit rerum saepe sint sunt suscipit
                  veniam veritatis vero voluptas.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-2">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/*==========hero-section end==========*/}
    </>
  );
};

export default Home;