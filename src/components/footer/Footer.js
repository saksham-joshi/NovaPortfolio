import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const theme = props.theme;
  const footer_text = `< Star this Portfolio on GitHub />`;
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a 
            href={greeting.portfolio_repository}
            target="_blank"
            rel="noopener noreferrer"
            className="git-repo-url"
            style={{
              color: theme.text,
            }}
          >
           {footer_text}
          </a>
        </p>
      </Fade>
    </div>
  );
}
