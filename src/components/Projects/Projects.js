import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sb from "../../Assets/Projects/sb.png";
import Medicare from "../../Assets/Projects/blog.png";

const projectDetail =[
  {
    img:sb,
    title:"Scholars Bridge",
    description:"Scholars Bridge is an e-learning platform where instructors can create and sell premium courses. Students can explore, purchase, and learn from a wide range of topics offered by verified educators. The platform features secure payment integration using Razorpay and efficient video content management. It includes user authentication, role-based access control, and cloud support for media uploads. Built with a modern MERN stack, it ensures a smooth and scalable learning experience.",
    ghLink:"https://github.com/shivanshkamboj1/scholarsbridge",
    demoLink:"https://scholarsbridge.vercel.app/"
  },
  {
    img:Medicare,
    title:"Medicare",
    description:"Medicare is a full-stack web application where patients can book appointments with doctors online. Users can view doctor profiles, check availability, and schedule consultations easily. The platform integrates Razorpay for secure and seamless online payments. Both doctors and patients have dedicated dashboards to manage appointments and view details. It’s built using React.js, Node.js, Express.js, and MongoDB for a smooth and responsive experience.",
    ghLink:"https://github.com/shivanshkamboj1/Medicare",
    demoLink:"https://medicare-jmit.vercel.app/"
  },
]
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
          {
            projectDetail.map((ele, ind) => (
              <Col md={4} className="project-card" key={ind}>
                <ProjectCard
                  id={ind}
                  imgPath={ele.img}
                  isBlog={false}
                  title={ele.title}
                  description={ele.description}
                  ghLink={ele.ghLink}
                  demoLink={ele.demoLink}
                />
              </Col>
            ))
          }
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
