import "./NewsLetter.css";
import { Col, Row } from "react-bootstrap";
import React from 'react'

const NewsLetter = () => {
return (
    <Col id="subscribe" className="margin" lg={12} >
        <div className="newsletter">
            <Row className="center">
                <Col sm={ 6 }>
                    <div className="text">
                    <h3 >Subscribe to our News Letter & Never Miss Latest updates</h3>
                    </div>
                </Col>
                <Col sm={ 6 }>
                <form>
                <div className="holder">
                    <input type="email" placeholder="Email Address" className="email" />
                    <button className="btn" type="submit">Subscribe</button>
                </div>
                </form>
                </Col>
            </Row>
        </div>
    </Col>
)
}

export default NewsLetter
