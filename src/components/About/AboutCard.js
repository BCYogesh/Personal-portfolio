import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Yogesh</span> from{" "}
            <span className="purple">Madurai, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">UI Developer</span> at{" "}
            <span className="purple">Medas solutions</span>.
            <br />I hold an Integrate B.Sc. (CS) in{" "}
            <span className="purple">Computer science</span> from{" "}
            <span className="purple">Sourashtra college (MKU)</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> I enjoy writing and drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yogesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
