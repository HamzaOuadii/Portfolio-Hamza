import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Hamza_Ouadii_CV.pdf";

// PDF WORKER
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ---- BOUTON HAUT ---- */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>

        {/* ---- APERÇU DU CV ---- */}
        <Row className="resume">
  <Document file={pdf} className="d-flex justify-content-center">
    <Page
      pageNumber={1}
      scale={width > 786 ? 1.7 : 0.6}
      renderTextLayer={false}
      renderAnnotationLayer={false}
    />
  </Document>
</Row>

        {/* ---- BOUTON BAS ---- */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
