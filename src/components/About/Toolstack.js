import React from "react";
import { Col, Row } from "react-bootstrap";

import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import VisualStudio from "../../Assets/TechIcons/VisualStudio.svg";
import PyCharm from "../../Assets/TechIcons/PyCharm.svg";
import DBeaver from "../../Assets/TechIcons/DBeaver.svg";
import GitLab from "../../Assets/TechIcons/GitLab.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";
import Selenium from "../../Assets/TechIcons/Selenium.svg";
import Swagger from "../../Assets/TechIcons/Swagger.svg";
import Github from "../../Assets/TechIcons/Github.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac OS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={VisualStudio} alt="Visual Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PyCharm} alt="PyCharm" className="tech-icon-images" />
        <div className="tech-icons-text">PyCharm</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} alt="Github" className="tech-icon-images" />
        <div className="tech-icons-text">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GitLab} alt="GitLab" className="tech-icon-images" />
        <div className="tech-icons-text">GitLab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={DBeaver} alt="DBeaver" className="tech-icon-images" />
        <div className="tech-icons-text">DBeaver</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Swagger} alt="Swagger UI" className="tech-icon-images" />
        <div className="tech-icons-text">Swagger UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Selenium} alt="Selenium" className="tech-icon-images" />
        <div className="tech-icons-text">Selenium</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
