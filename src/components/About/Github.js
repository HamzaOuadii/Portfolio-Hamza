import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="project-heading">
        Retrouvez-moi sur <strong className="purple">GitHub</strong>
      </h1>

      <p style={{ maxWidth: "600px" }}>
        Je partage plusieurs projets personnels et académiques sur mon GitHub. 
        N’hésitez pas à consulter mes travaux et suivre mes nouvelles réalisations.
      </p>

      <a
        href="https://github.com/HamzaOuadii"
        className="purple"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
      >
        github.com/HamzaOuadii
      </a>
    </Row>
  );
}

export default Github;
