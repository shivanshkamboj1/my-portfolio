import React from "react";
import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  let date = new Date();
  let year = date.getFullYear();
  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const res = await fetch("https://visitorapis.vercel.app/api/visitor-count");
        const data = await res.json();
        setVisitorCount(data.visitorCount || 0);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    }
    fetchVisitorCount();
  }, []);
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Total Visits: {visitorCount}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shivanshkamboj1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shivanshkamboj/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
