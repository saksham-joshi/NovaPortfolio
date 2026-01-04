import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

import FullStackImg from "../../illustrations/FullStackImg";
import LowLevelProgImg from "../../illustrations/LowLevelProgImg";
import PythonProgImg from "../../illustrations/PythonProgImg";
import ExtraTechImg from "../../illustrations/ExtraTechImg";

function GetSkillSvg(props) {
  
  if (props.fileName === "FullStackImg") return <FullStackImg theme={props.theme} />;
  
  else if (props.fileName === "LowLevelProgImg") return <LowLevelProgImg theme={props.theme} />;

  else if (props.fileName === "PythonProgImg") return <PythonProgImg theme={props.theme} />;

  else if (props.fileName === "ExtraTechImg") return <ExtraTechImg theme={props.theme} />;

  return <ExtraTechImg theme={props.theme} />;

}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
