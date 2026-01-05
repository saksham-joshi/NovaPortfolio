import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { currentCourses, degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Currently Pursuing
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {currentCourses.course.map((course, index) => {
            return <DegreeCard degree={course} theme={theme} key={index} />;
          })}
        </div>
      </div>

      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard degree={degree} theme={theme} key={index} />;
          })}
        </div>
      </div>
      </>
    );
  }
}

export default Educations;
