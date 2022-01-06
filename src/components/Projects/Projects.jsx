import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import frontend from "../../Assets/Projects/frontendmasters.gif";
import pharmeasy from "../../Assets/Projects/pharmeasy.gif";
import healthkart from "../../Assets/Projects/healthkart.gif";

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
              imgPath={frontend}
              isBlog={false}
              title="Frontend Masters"
              description="This project is a clone of Frontend-Masters,an edu-tech company offering various courses for web Development,frontend offers abundant courses like javascript, vue, react with different tutors. Frontend Masters is an Edtech Website that lets users take courses related to frontend technologies like CSS, React, Angular, Vue, and many more. It has the ability to combining a simple user experience and interface with enough depth for power users."
              link="https://github.com/Dhruvkagrawal/FrontendMasters-Clone"
              live="https://anikett23.github.io/Fronend-Masters/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmeasy}
              isBlog={false}
              title="PharmEasy"
              description="PharmEasy is a healthcare selling website that provides its users with stuff related to health like medicines, diagnostic tests, lab tests, and many more.whole clone of the website is created by me where i am dealing with HTML, CSS, javascript. so I started my journey by dividing the project into parts. I decided to clone the pages which are involved in the flow of a user who visits the website for buying medicine."
              link="https://github.com/Dhruvkagrawal/PharmEasy-Clone"
              live="https://pharmeasyclone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthkart}
              isBlog={false}
              title="HealthKart"
              description="This project is a clone of (HealthKart.com) which is India’s largest online health & fitness store for men and women. Shop online from the latest collections of health, fitness and similar products featuring the best brands."
              link="https://github.com/Dhruvkagrawal/HealtKart.com-Clone"
              live="https://hemantjayas.github.io/HealthKart/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
