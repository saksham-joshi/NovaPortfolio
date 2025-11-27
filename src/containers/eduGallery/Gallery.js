import React, { Component } from "react";
import "./Gallery.css";
import { Fade } from "react-reveal";
import { educationGallery } from "../../portfolio";
import GalleryCard from "../../components/galleryCard/GalleryCard";

class EduGallery extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="gallery-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="gallery-header" style={{ color: theme.text }}>
              Gallery
            </h1>
          </Fade>
        </div>
        <div className="gallery-body-div">
          {educationGallery.gallery.map((photoObject) => {
            return <GalleryCard gallery={photoObject} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default EduGallery;
