import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Medicare"
              description="Medicare is a full-stack web application where patients can book appointments with doctors online. Users can view doctor profiles, check availability, and schedule consultations easily. The platform integrates Razorpay for secure and seamless online payments. Both doctors and patients have dedicated dashboards to manage appointments and view details. It’s built using React.js, Node.js, Express.js, and MongoDB for a smooth and responsive experience."
              ghLink="https://github.com/shivanshkamboj1/Medicare"
              demoLink="https://medicare-jmit.vercel.app//"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
