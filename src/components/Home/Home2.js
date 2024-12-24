import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import guyWithLaptop from "../../Assets/guy-with-laptop.png";
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
            🔰 I am a <b className="purple"> Programming Geek </b> having an ambition to become "<b className="superblue">the world's #`1` programmer</b>".
              <br />
              <br />With mastery in
            
                <b className="purple"> SRON, C++ and Python </b>
              
              programming languages, I specialize in developing cutting-edge and highly optimized
              
                <b className="purple">&nbsp;softwares like compilers, apps and APIs etc. &nbsp;</b> 
                
                and also in areas related to{" "}
                
                <b className="purple">
                  software development.
                </b>
              
              <br />
              <br />
              ⚡ In addition, I have pretty good knowledge for creating 
              impactful products using <b className="purple">Java, C# .NET, </b>
              
                <b className="purple">
                  {" "}
                  Dart, PHP, HTML, CSS and JavaScript.
                </b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={guyWithLaptop} className="img-fluid" alt="avatar" />
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
