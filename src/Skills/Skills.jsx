import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css"

import meter1 from "../Assets/img/1.png"
import meter2 from "../Assets/img/2.png"
import meter3 from "../Assets/img/3.png"
import meter4 from "../Assets/img/4.png"
import meter5 from "../Assets/img/5.png"
import meter6 from "../Assets/img/6.png"
import meter7 from "../Assets/img/7.png"
import meter8 from "../Assets/img/8.png"

import colorSharp from "../Assets/img/color-sharp.png"


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <section className="skill" id="skills">
          <Container>
              <Row>
          <div className="skill-box">
        
                      <h2>
                          Skills
                      </h2>
                      <p>A dedicated and creative front-end developer with a strong foundation in React, TypeScript, JavaScript, HTML, CSS, and Bootstrap. Passionate about crafting elegant and intuitive user interfaces and experiences. Committed to staying up-to-date with the latest industry trends and continuously expanding skills in front-end development. Striving to deliver high-quality code and exceed client expectations. Motivated to transition into full-stack development and leverage a comprehensive skill set to build end-to-end solutions.</p>
            <Carousel responsive={ responsive } infinite={ true } className="skill-slider">
              
              <div className="item">
                              <img src={ meter1} alt="Image1" />
                            
                          </div>
                          <div className="item">
                              <img  src={ meter2 } alt="Image2" />
                             
                          </div>
                          <div className="item">
                              <img  src={ meter3} alt="Image3" />
                             
                          </div>
                          <div className="item">
                              <img  src={ meter4 } alt="Image4" />
                             
              </div>
              <div className="item">
                              <img  src={ meter5} alt="Image3" />
                            
              </div>
              <div className="item">
                              <img  src={ meter6 } alt="Image2" />
                              
              </div>
              <div className="item">
                              <img  src={ meter7 } alt="Image2" />
                              
              </div>
               <div className="item">
                              <img  src={ meter8 } alt="Image2" />
                            
              </div>
              
                      </Carousel>
                  </div>
              </Row>
          </Container>
          <img src={colorSharp} className="background-image-left" alt="" />
          
   </section>
  );
};

export default Skills;