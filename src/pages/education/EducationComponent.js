import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import { educationGallery } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import EduGallery from "../../containers/eduGallery/Gallery";
import MortarBoard from "../../illustrations/MortarBoard";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <MortarBoard theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Educational
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Q U A L I F I C A T I O N S
                </h3>
                <CompetitiveSites logos={competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {educationGallery.gallery.length > 0 ? (
            <EduGallery theme={this.props.theme} />
          ) : null }
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
