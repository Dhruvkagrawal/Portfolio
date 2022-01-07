import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCards from "./BlogsCards";
import Particle from "../Particle";
import frontend from "../../Assets/Projects/frontendmasters.gif";
import pharmeasy from "../../Assets/Projects/pharmeasy.gif";
// import healthkart from "../../Assets/Projects/healthkart.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Blogs Which I've Written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={frontend}
              isBlog={true}
              title="My very First Project In Software Domain"
              link="https://medium.com/@Dhruvkagrawal/cloning-of-frontend-masters-using-html-css-javascript-my-very-first-project-experience-91c82ff76958"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={frontend}
              isBlog={true}
              title="Intregate Backend Using Node,Express & mongoDB on my Existing Project"
              link="https://medium.com/@Dhruvkagrawal/we-created-the-frontendmasters-com-backend-in-6-days-eaf5ac1686f"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={pharmeasy}
              isBlog={true}
              title="Clone of Website Using Html,Css,Javascript"
              link="https://medium.com/@Dhruvkagrawal/cloning-of-pharmeasy-using-html-css-javascript-b81412ae77df"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
