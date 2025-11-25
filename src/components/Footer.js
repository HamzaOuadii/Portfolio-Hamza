import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        {/* Ton nom ici */}
        <Col md="4" className="footer-copywright">
          <h3>Conçu et développé par Hamza Ouadii</h3>
        </Col>

        {/* Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HO</h3>
        </Col>

        {/* Réseaux sociaux */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://github.com/HamzaOuadii"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://x.com/Hamza961695"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hamza-ouadii-86b060330/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/hamza_ouadii/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
