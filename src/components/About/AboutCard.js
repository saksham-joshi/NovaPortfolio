import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saksham Joshi </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br />
            I am currently pursuing Bachelor's of Computer Application from Graphic Era Hill University, Bhimtal
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
              💻 Content Writing
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
