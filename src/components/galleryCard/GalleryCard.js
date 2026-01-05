import React, { Component } from "react";
import "./GalleryCard.css";
import { Fade } from "react-reveal";

class GalleryCard extends Component {
  render() {
    const photoObject = this.props.gallery;
    const theme = this.props.theme;
    const key = this.props.key;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div key={key} className="gallery-card">
          <div className="gallery-card-content">
            <div className="gallery-card-content-overlay"></div>
            <div
              className="gallery-card-header"
              style={{ backgroundColor: photoObject.color_code }}
            >
              <img
                className="gallery-card-img"
                src={require(`../../assets/images/eduGallery/${photoObject.img_path}`)}
                alt={photoObject.alt_name}
              />
            </div>
            <div className="gallery-card-content-details fadeIn-top">
              <h3 className="gallery-card-content-title" style={{ color: theme.body }}>
                {photoObject.alt_name}
              </h3>
            </div>
          </div>
          <div className="gallery-card-body">
            <h2 className="gallery-card-body-title" style={{ color: theme.text }}>
              {photoObject.title}
            </h2>
            <h3
              className="gallery-card-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {photoObject.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default GalleryCard;
