import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alok Kumar Singh </span>
            from <span className="purple"> Kanpur, Uttar Pradesh, India.</span>
            <br /> I am a final year student pursuing MCA(2021-23) from AKTU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing, Drawing and Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Alok</footer>
          <p style={{ color: "rgb(155 126 172)" }}>
            "As a coder, I use logic and syntax to shape the digital world through the art of coding!"{" "}
          </p>
          <footer className="blockquote-footer">Alok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
