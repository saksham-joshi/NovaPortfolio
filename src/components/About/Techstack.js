import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiJava,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiC,
  SiDotnet,
  SiLlvm,
  SiPhp,
  SiGnu,
  SiDart,
  SiPython
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiC/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLlvm/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGnu/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPython/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>

    </Row>
  );
}

export default Techstack;
