import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Resume.css";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../components/button/Button";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
      pageCount: null,
      error: null,
    };
  }
  handleResize = () => {
    const screen_width = window.innerWidth;
    let new_width = screen_width;

    if (screen_width > 872) {
      new_width = screen_width * 0.7;
    } else {
      new_width = screen_width * 0.9;
    }
    this.setState({ pageWidth: new_width });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ pageCount: numPages });
  };

  onDocumentLoadError = (error) => {
    console.error("Error loading the PDF: " + error);
    this.setState({
      error: "Unable to load Resume!",
      pageWidth: null,
      pageCount: null,
    });
  };

  render() {
    const theme = this.props.theme;
    const { pageCount, pageWidth, error } = this.state;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <Button
              text="📃 Download Resume"
              newTab={true}
              href="/docs/Resume_SakshamJoshi.pdf"
              theme={theme}
              className="download-btn"
            />
            <div className="resume-page">
              {error ? (
                <div className="error-messge">{error}</div>
              ) : (
                <Document
                  file="/docs/Resume_SakshamJoshi.pdf"
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  onLoadError={this.onDocumentLoadError}
                  className="document-resume"
                >
                  {pageCount &&
                    pageWidth &&
                    Array.from({ length: pageCount }, (_, i) => i + 1).map(
                      (pageNum) => (
                        <Page
                          key={pageNum}
                          width={pageWidth}
                          pageNumber={pageNum}
                          className="single-page"
                        />
                      )
                    )}
                </Document>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
