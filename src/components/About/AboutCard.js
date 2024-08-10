import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi ✋🏻, I am <span className="purple">Saksham Joshi </span>
            from  Uttarakhand, India.
            <br />
            <br />
            I hold a Bachelor’s degree🎓 in Computer Application from Graphic Era Hill University, Bhimtal.
            <br />
            <br />
            As a passionate self-taught <span className="purple">Compiler Engineer</span>💻, I believe in diving deep into every concept to unlock true mastery.
            <br/>
            <br />
            Currently, I’m expanding my knowledge by learning LLVM, IR, and MLIR. 🚀
            <br />
            <br />
            Apart from programming, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              🤍 Meditation
            </li>
            <li className="about-activity">
              🧘🏻‍♂️ Yoga
            </li>
            <li className="about-activity">
              💻 Blog Writing
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <br/>
            "Every Human has infinite potential, they just need to awaken."{" "}
          </p>
          <footer className="blockquote-footer">Saksham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
