import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo, theme }) {
  const loadProjectImage = (path) => {
    try {
      return require(`../../assets/images/project/${path}`).default;
    } catch (e) {
      console.error("Image loading failed:", e);
      return null;
    }
  };

  const loadSvg = (path) => {
    try {
      return require(`../../assets/svgs/${path}`);
    } catch (e) {
      console.error("SVG loading failed:", e);
      return null;
    }
  };

  const logo = loadProjectImage(repo.icon);

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: theme.headerColor,
        boxShadow: `0px 2px 5px ${theme.imageHighlight}`,
      }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div>
          <div className="project-card-header">
            {logo && (
              <img
                src={logo}
                alt={repo.title}
                className="project-logo"
                style={{ backgroundColor: "transparent" }} // Or ensure transparent bg in image
              />
            )}
            <h2 className="project-title" style={{ color: theme.text }}>
              {repo.title}
            </h2>
          </div>

          {repo.metrics && (
            <div className="project-metrics">
              {repo.metrics.map((metric, index) => (
                <span
                  key={index}
                  className="metric-chip"
                  style={{
                    backgroundColor: "transparent",
                    color: theme.secondaryText,
                    border: `1px solid ${theme.secondaryText}`,
                  }}
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          <p className="project-description" style={{ color: theme.text }}>
            {repo.description}
          </p>

          <div className="project-footer">
            {repo.techStack && (
              <div className="project-tech-stack">
                {repo.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="tech-chip"
                    style={{
                      backgroundColor: theme.body,
                      color: theme.text,
                      border: `1px solid ${theme.text}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-links">
              {repo.links &&
                repo.links.map((link, index) => {
                  const icon = loadSvg(link.icon);
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      style={{
                        backgroundColor: theme.accentColor,
                        color: theme.text,
                      }}
                    >
                      {icon && (
                        <div
                          className="project-link-icon"
                          style={{
                            backgroundColor: theme.text,
                            maskImage: `url(${icon})`,
                            WebkitMaskImage: `url(${icon})`,
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            filter: "none",
                          }}
                        />
                      )}
                      {link.text}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
