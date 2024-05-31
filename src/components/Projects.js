import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import waterImg1 from "../assets/img/water-pollution.png";
import airImg2 from "../assets/img/airpollution.png";
import landImg3 from "../assets/img/landpollution.png";
import cImg1 from "../assets/img/cleanup1.png";
import cImg2 from "../assets/img/cleanup2.png";
import cImg3 from "../assets/img/cleanup3.png";
import rImg1 from "../assets/img/Research1.png";
import rImg2 from "../assets/img/Research2.png";
import rImg3 from "../assets/img/Research3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Water Pollution",
      description: "Hazards and study on water pollution",
      imgUrl: waterImg1,
    },
    {
      title: "Air Pollution",
      description: "Pollutants and study on air pollution",
      imgUrl: airImg2,
    },
    {
      title: "Land Pollution",
      description: "Hazards and study on land pollution",
      imgUrl: landImg3,
    },
  ];
  const projects1 = [
    {
      title: "Clean up Drive",
      description: "Cleanup trek",
      imgUrl: cImg1,
    },
    {
      title: "Clean up Drive",
      description: "Plastic collection",
      imgUrl: cImg2,
    },
    {
      title: "Clean up Drive",
      description: "Neighbourhood cleanup",
      imgUrl: cImg3,
    },
  ];
  const projects2 = [
    {
      title: "Ongoing Research",
      description: "Group",
      imgUrl: rImg3,
    },
    {
      title: "New Research",
      description: "Group - [Submission of idea is madatory]",
      imgUrl: rImg2,
    },
    {
      title: "New Research Solo",
      description: "Submission of idea and Resume to prove eligibilty for funding",
      imgUrl: rImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Ecoguardian is a full-stack website designed for an organization focused on environmental conservation. It offers users the ability to participate in cleanup drives, contribute to pollution studies, and volunteer for various initiatives. Its standout feature, the Pollution Tracker, enables users to easily access real-time pollution data for their area by simply entering the location name</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Studies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Clean Up Drives</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research Contributions</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
