import { Container, Row, Col } from "react-bootstrap";

import "./banner.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../Assets/img/astronaut.png"
import { Cursor, Typewriter } from "react-simple-typewriter"









 const Banner = () => {
return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center back">
                <Col xs={ 12 } md={ 6 } xl={ 7 }>
                    <span className="tagline">Welcome to my Portofolio</span>
                    <h1>{ "Hello, This is Mina Ashraf " } <span className="wrap"><Typewriter loop typeSpeed={ 80 } deleteSpeed={ 60 } words={ ["Front End Developer", "React Developer","Graphic Designer"] } /><span><Cursor  cursorColor='white'/></span></span></h1>
                    <p>A highly skilled front-end developer with a passion for creating user-friendly and visually appealing web applications. Experienced in React, TypeScript, JavaScript, HTML, CSS, and Bootstrap. Striving to expand knowledge and skills to become a full-stack developer. Strong problem-solving abilities and dedicated to delivering high-quality code.</p>
                    <button onClick={()=>console.log("Let's Connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={ 12 } md={ 6 } xl={ 5 }>
                    <img className="header-image" src={headerImage} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;


