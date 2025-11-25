import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je m’appelle 
            <span className="purple"> Hamza Ouadii</span>, 
            développeur <span className="purple">Full Stack</span> basé à 
            <span className="purple"> Montréal, Québec</span>.
            <br />
            <br />
            Je conçois des applications <b className="purple">web, mobiles et intelligentes</b>,
            en combinant technologies modernes, architectures robustes et bonnes pratiques DevOps.
            J’aime créer des solutions complètes, performantes et orientées expérience utilisateur.
            <br />
            <br />
            J’ai travaillé sur plusieurs projets académiques et professionnels, incluant :
            <span className="purple"> APIs REST, systèmes intelligents, plateformes SaaS, intégrations cloud, et solutions IA</span>.
            <br />
            <br />
            En dehors du développement, je m’intéresse aussi à des activités qui nourrissent ma créativité :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéo 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles technologies 🔧
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport & découvertes 🚶‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Créer, c’est apporter une solution qui fait la différence."
          </p>
          <footer className="blockquote-footer">Hamza</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
