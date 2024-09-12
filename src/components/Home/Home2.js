import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar_logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            🔰I am a <b className="purple"> Programming Geek </b> having an ambition of becoming world's best programmer.
              <br />
              <br />I have mastery in
              {/* <i> */}
                <b className="purple"> SRON, C++ and Python </b>
              {/* </i> */}
              programming languages⭐
              <br />
              <br />
              ⚡specializes in developing innovative&nbsp;
              {/* <i> */}
                <b className="purple">compilers and interpreters&nbsp;</b> 
                {/* </i> */}
                and also in areas related to{" "}
                {/* <i> */}
                <b className="purple">
                  software development.
                </b>
              {/* </i> */}
              <br />
              <br />
               whenever possible, I also apply my passion for developing products
              with <b className="purple">Java, </b>
              {/* <i> */}
                <b className="purple">
                  {" "}
                  Python, HTML, CSS and JavaScript.
                </b>
              {/* </i> */}
              🔥
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saksham-joshi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sakshamjoshi27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sakshamjoshi27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sakshamjoshi27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
