
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "../ProjectCard/ProjectCard";
import colorSharp2 from "../Assets/img/color-sharp2.png"
import CardData from "../CardData/CardData";
import graphicData from "../CardData/graphicData";


const Projects = () => {
  
    const cards = CardData.map(card => {
        return <ProjectCard key={ card.id } title={ card.title }
            description={ card.description } image={card.image} {...card}  />
    })
  
  const GraphicCards = graphicData.map(card => {
        return <ProjectCard key={ card.id } title={ card.title }
            description={ card.description } image={card.image} href={card.href} {...card}  />
    })
                                     
                                 

  return (
      <section className="project" id="projects">
        
        
          <Container>
              <Row>
                  <Col>
                       <h1>Projects</h1>
                  <p>With a growth mindset and a passion for continuous learning, I constantly strive to improve my skills and produce better work each day. By staying up-to-date with the latest technologies and industry trends, I aim to create innovative and impactful projects that exceed expectations. My drive for excellence fuels my development career, ensuring that each new project reflects my dedication to continuous improvement.</p>
                      
      

                      <Row>
  <Tab.Container  id="tabs" defaultActiveKey="first">
    <Row>
      <Col>
        <Nav variant="tabs" className="mb-5 justify-content-center align-items-center " >
   
       <Nav.Item >
            <Nav.Link className="first"  eventKey="first">Front End Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link className="second"  eventKey="second">React Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link className="third" eventKey="third">Graphic Design Projects</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
    <Row>
      <Col>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Row>
           
             {cards}
           
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Lorem Ipsum</p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
             <Row>
           
             {GraphicCards}
           
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
</Row>
                     

        </Col>
        
        </Row>
          </Container>
          
          <img className="background-image-right" src={ colorSharp2 } alt="Project Back" ></img>
           
    </section>
  );
};

export default Projects;