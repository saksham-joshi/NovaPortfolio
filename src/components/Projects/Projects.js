import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatgpt_desktop from "../../Assets/Projects/chatgpt_desktop.png";
import sron_project from "../../Assets/Projects/sron_project_img.png";
import sentiment_analyzer from "../../Assets/Projects/sentiment_analyzer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sron_project}
              isBlog={false}
              title="SRON"
              description="An Open-sourced, blazingly fast, dynamically typed, single threaded, functional, lightweight and compiled + interpreted programming language. The compiler converts source code into bytecode, which is then saved to a '.srb' file. Subsequently, the SRON interpreter executes the bytecode file efficiently, offering high speed, reduced memory usage, and lower power consumption."
              ghLink="https://github.com/saksham-joshi/SRON"
              demoLink="https://sron.gitbook.io/docs/sample-codes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment_analyzer}
              isBlog={false}
              title="Sentiment Analyzer API"
              description="A free and open-sourced API to analyze the sentiment of a text stored in a string or file and understand the reason why your blogs and posts are not ranking up. Developed using Python in 'Flask', 'pandas' and 'json'."
              ghLink="https://github.com/saksham-joshi/Sentiment_Analyzer"
              demoLink="https://sentiment-logic.netlify.app/front-end/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgpt_desktop}
              isBlog={false}
              title="ChatGPT Desktop"
              description="A desktop application developed in Python using PyQT5 and OpenAi's API to use full potential of ChatGPT without signing-in everytime. Adjust temperature, no. of tokens, change Engines etc. to get precise result of your prompts everytime."
              ghLink="https://github.com/saksham-joshi/chatgpt_desktop"             
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
