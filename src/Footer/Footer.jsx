import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Assets/img/LOGO.png"

import "./Footer.css"

import navIcon1 from "../Assets/img/nav-icon1.svg"
import navIcon2 from "../Assets/img/behance5.png"
import navIcon3 from "../Assets/img/nav-icon3.svg"

const Footer = () => {
  return (
      <footer className="footer">
          <Container>
              <Row className="align-item-center">
                  <Col sm={ 6 }>
                      <img className="logo" src={Logo} alt="LOGO" />
                  </Col>
                  <Col sm={ 6 }>
                      <div className="social-icon">
                          <a href="https://www.linkedin.com/in/mina-ashraf-217604226/"><img src={ navIcon1 } alt="" /></a>
                   <a href='https://www.behance.net/menaashraf?tracking_source=search_users|mena%20ashraf'><img style={{width: "50%"}} src={ navIcon2 } alt='Link' /></a>
                          <a href="https://instagram.com/minaashraf064?igshid=OGQ5ZDc2ODk2ZA=="><img src={ navIcon3 } alt="" /></a>
                      </div>
                      <p>CopyRight 2023, All Rights Reserved</p>
                  </Col>

                  
              </Row>
          </Container>
    </footer>
  )
}

export default Footer
