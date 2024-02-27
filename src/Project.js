import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

function Project() {
  return (
    <Container fluid className="project-section">
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
              imgPath="missing.jpg"
              title="Missing Person Detection Using Ai"
              description="Detecting missing persons using AI involves leveraging various technologies such as computer vision, natural language processing, and data analytics."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="arvr.jpg"
              title="Augmented Reality"
              description="Designed and implemented an Augmented Reality (AR) application using Unity and Vuforia for virtual interior design experiences."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="mente.jpg"
              title="Mentor Management System"
              description="Developed and designed the front-end for a Mentor Management System to streamline mentorship programs. 
              The system aimed to facilitate efficient mentor-mentee matching and communication."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
