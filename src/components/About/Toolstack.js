import "./Toolstackstyle.css"
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // SiPostman,
  // SiSlack,
  // SiVercel,
  // SiMacos,
  SiWindows11,
  SiApachenetbeanside,
  SiIntellijidea,
  SiNetlify,
  SiSpotify,
  SiPhpmyadmin,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 /><p className="fontp">WINDOWS 10</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p className="fontp">VSCODE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside /><p className="fontp">NETBEANS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /><p className="fontp">INTELLI J</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /><p className="fontp">NETLIFY</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpotify /><p className="fontp">SPOTIFY</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin /><p className="fontp">PHPMYADMIN</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
