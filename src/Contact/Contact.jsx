import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assets/img/contact-img.svg"

import "./Contact.css"

const Contact = () => {
    const form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message : "",
    }
    const [formDetails, setFormDetails] = useState(form)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})
    

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");

  try {
    const response = await fetch("http://localhost:5000/api/email/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    const result = await response.json();

    if (response.ok) {
      setStatus({ success: true, message: "Message Sent Successfully" });
    } else {
      setStatus({ success: false, message: "Message was not sent successfully" });
    }
  } catch (error) {
    console.log(error);
    setStatus({ success: false, message: "Error sending message" });
  }
};
    
  return (
      <section className="contact" id="contact">
          <Container>
              <Row className="align-items-center">
                 
                  <Col md={6}>
                      <h2>Get in Touch</h2>
            <form onSubmit={ handleSubmit }>
              <div className="contain">
                          <Row>
                              <Col sm={ 6 } className="px-1" >
                                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                              </Col>
                              <Col sm={ 6 } className="px-1" >
                                   <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                              </Col>
                              <Col sm={ 6 } className="px-1" >
                                   <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)}/>
                              </Col>
                              <Col sm={ 6 } className="px-1" >
                                   <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                              </Col>
                              <Col lg={12}>
                                   <textarea rows="6"  value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}>
                                  </textarea>
                                  <button type="submit"><span>{buttonText }</span></button>
                              </Col> 
                              <Col>
                                  {
                                      status.message && 
                                      <Col>
                                              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                      </Col>
                                  }
                              </Col>
                          </Row>
                      </div>
                      </form>
                  </Col>
        </Row>
         <Col lg={12}>
                     <img src={contactImg} alt="Contact Us"/>
                  </Col>
         
          </Container>
          
    </section>
  )
}

export default Contact
