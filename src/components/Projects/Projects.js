import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import devTinder from "../../Assets/Projects/1.jpg";
import youTube from "../../Assets/Projects/2.jpg";

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
              imgPath={devTinder}
              isBlog={false}
              title="Dev Tinder"
              description="DevTinder is a developer networking application where users can register, connect with other developers through profile cards, send and approve connection requests, and chat in real time after mutual acceptance."
              ghLink="https://github.com/BCYogesh/devTinder-web"
              demoLink="https://tinderfordevs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youTube}
              isBlog={false}
              title="YouTube"
              description="Built a YouTube-like video streaming application using the YouTube Live API that displays real-time video data and allows users to play videos directly within the application."
              ghLink="https://github.com/BCYogesh/Namaste_YouTube"
              demoLink="https://alphatube.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
