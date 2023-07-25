import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import hms from "../../Assets/Projects/hms.png";
import wta from "../../Assets/Projects/wta.png";
import ymf from "../../Assets/Projects/ymf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import suicide from "../../Assets/Projects/suicide.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={<u className="highlight">Drowsiness Detection System</u>}
              description="A Drowsiness Detection System is a project that aims to detect and alert individuals when they exhibit signs of drowsiness or fatigue, particularly in scenarios where attention and alertness are crucial, such as driving or operating heavy machinery. The system typically utilizes computer vision techniques and machine learning algorithms to analyze facial and behavioral patterns to determine the drowsiness level of an individual."
              ghLink="https://github.com/aloksinghrcr65/Driver_Drowsiness_Detection"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={<u className="highlight">CPU Process Scheduling</u>}
              description="CPU process scheduling is a crucial aspect of operating system design that involves the allocation of the CPU (Central Processing Unit) to different processes or tasks in a computer system. The primary objective of process scheduling is to maximize CPU utilization, enhance system performance, and ensure fairness in resource allocation among competing processes."
              ghLink="https://github.com/aloksinghrcr65/CPU-Scheduling-Simulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title={<u className="highlight">Hospital Management System</u>}
              description="The primary goal of a hospital management system is to improve the efficiency and effectiveness of healthcare services, enhance patient care and safety, and optimize resource utilization. By digitizing and automating various tasks, an HMS reduces paperwork, minimizes errors, and enables quick access to critical information, thereby enhancing overall productivity and decision-making."
              ghLink="https://github.com/aloksinghrcr65/Hospital_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wta}
              isBlog={false}
              title={<u className="highlight">World Travel Agency</u>}
              description="The World Travel Agency project aims to provide exceptional travel experiences to clients worldwide. With a comprehensive range of services, our agency strives to fulfill diverse travel preferences and create memorable journeys. Our purpose is to deliver seamless planning, personalized itineraries, and unparalleled customer satisfaction, making travel dreams a reality."
              ghLink="https://github.com/aloksinghrcr65/World-Travel-Agency"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ymf}
              isBlog={false}
              title={<u className="highlight">It's Yummy Food</u>}
              description="It's Yummy Food project is dedicated to bringing delicious and satisfying culinary experiences to food enthusiasts. Our purpose is to explore diverse cuisines, create innovative recipes, and share culinary knowledge through various mediums. We aim to inspire individuals to appreciate and indulge in the joy of good food, ultimately enhancing their overall dining experiences."
              ghLink="https://github.com/aloksinghrcr65/Yummy-Food"
            />
          </Col>
          
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Airline Reservation System"
              description="The airline reservation system is a software application that allows customers to book flights, manage reservations, and handle various other tasks related to airline travel. It is designed to simplify the process of reserving seats on flights, providing a convenient and efficient experience for both customers and airline staff."
              ghLink="https://github.com/piyushsinghgaur/Airlines_Reservation_System.git"
            />
          </Col> */}


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
