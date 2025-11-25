import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis un développeur <b className="purple">Full Stack</b> passionné 
              par la création d’applications web, mobiles et intelligentes. 
              J’aime transformer des idées en solutions fiables, modernes 
              et orientées performance.
              <br />
              <br />
              Tout au long de mon parcours, j’ai travaillé avec plusieurs
              technologies front-end et back-end, ce qui m’a permis de développer 
              une solide polyvalence dans la conception de systèmes complets.
              <br />
              <br />
              Je maîtrise notamment :
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, C#, PHP, SQL, React, Node.js, ASP.NET, Java
                </b>
              </i>{" "}
              ainsi que différentes architectures API et outils DevOps.
              <br />
              <br />
              Mes principaux centres d’intérêt incluent le développement de :
              <i>
                <b className="purple">
                  {" "}
                  applications web modernes, solutions mobiles, systèmes intelligents 
                  et projets intégrant de l’intelligence artificielle.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j’aime concevoir des projets complets en
              <b className="purple"> React.js </b>,
              <b className="purple"> Node.js </b> ou{" "}
              <b className="purple">ASP.NET</b>, tout en intégrant de bonnes
              pratiques DevOps pour assurer un déploiement fluide et professionnel.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
