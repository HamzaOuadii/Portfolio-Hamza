import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>

          {/* Section Titre + Carte À propos */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Apprenez à <strong className="purple">me connaître</strong>
              </h1>
              <Aboutcard />
            </Col>

            {/* Image à droite */}
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* Compétences techniques */}
          <h1 className="project-heading">
            <strong className="purple">Compétences techniques</strong>
          </h1>
          <Techstack />

          {/* Outils */}
          <h1 className="project-heading">
            <strong className="purple">Outils</strong> que j’utilise
          </h1>
          <Toolstack />

          {/* GitHub stats */}
          <Github />

        </Container>
      </Container>
    </>
  );
}

export default About;
