import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Resume_SakshamJoshi.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../components/button/Button";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;
    const width = this.props.screenWidth;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <Button
                text="📃 Download Resume"
                newTab={true}
                href={myResumePdf}
                theme={theme}
                className="download-btn"
              />
            <div className="resume-page">
              <Document file={myResumePdf}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.58} />
              </Document>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
