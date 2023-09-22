
import "./NavBar.css"


import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/img/LOGO.png"
import navIcon1 from "../Assets/img/nav-icon1.svg"
import navIcon2 from "../Assets/img/behance5.png"
import navIcon3 from "../Assets/img/nav-icon3.svg"

function NavBar () {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    /* /////////////////////////////// */
     useEffect(() => {
    const handleScroll = () => {
      // Logic to handle scroll event
      if (window.scrollY > 90) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
     }, []);
    
    
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }
    
  return (
   
    <Navbar expand="lg" className= { scrolled ? "scrolled" : ""}  >
      <Container >
              <Navbar.Brand href="#home">
                  <img className="logo" src={logo} alt='Logo' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" >
                  <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active-navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</Nav.Link>
                      <Nav.Link href="#skills" className={ activeLink === "skills" ? "active-navbar-link" : "navbar-link" } onClick={ () => onUpdateActiveLink("skills") }>Skills</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink === "projects" ? "active-navbar-link" : "navbar-link" } onClick={ () => onUpdateActiveLink("projects") }>Projects</Nav.Link>
             <Nav.Link href="#contact" className={ activeLink === "contact" ? "active-navbar-link" : "navbar-link" } onClick={ () => onUpdateActiveLink("contact") }>Contact</Nav.Link>
{/*             <Nav.Link href="#subscribe" className={ activeLink === "subscribe" ? "active-navbar-link" : "navbar-link" } onClick={ () => onUpdateActiveLink("contact") }>Subscribe</Nav.Link> */}
                  </Nav>
                  <span className='navbar-text'>
                      <div className='social-icon'>
                          <a href='https://www.linkedin.com/in/mina-ashraf-217604226/'><img src={navIcon1 } alt='Link' /></a>
                          <a href='https://www.behance.net/menaashraf?tracking_source=search_users|mena%20ashraf'><img style={{width: "50%"}} src={ navIcon2 } alt='Link' /></a>
                          <a href='https://instagram.com/minaashraf064?igshid=OGQ5ZDc2ODk2ZA=='><img  src={ navIcon3 } alt='Link' /></a>
                          
                      </div>
                      <button className='connect' onClick={ () => console.log("connect") }><span>Lets Connect</span></button>
                  </span>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  );
}

export default NavBar;