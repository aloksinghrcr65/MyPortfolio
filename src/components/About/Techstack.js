import "./Toolstackstyle.css"
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  // DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiGithub,
  DiMysql
} from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><p className="fontp">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p className="fontp">JAVA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p className="fontp">PYTHON</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><p className="fontp">HTMLl5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><p className="fontp">CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p className="fontp">JAVASCRIPT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p className="fontp">REACT.JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><p className="fontp">NODE.JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /><p className="fontp">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><p className="fontp">GIT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub /><p className="fontp">GITHUB</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
    </Row>
  );
}

export default Techstack;
