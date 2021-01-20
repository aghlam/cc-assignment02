import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';


function About() {
    return (
        <div>
            <Container fluid className='about-background'>
                <Row className='about-row align-items-center'>
                    <Col md={3}/>
                    <Col sm={12} md={6}>
                        <h1 className='display-4 text-light'>Cafe Crusaders is a small time web application created by Alan Lam and 
                        Matthew Duong as a university assignment. We aim to assist all coffee lovers on their crusade
                        in finding the best coffee available in their area.</h1>
                    </Col>
                    <Col md={3}/>
                </Row>

            </Container>
        </div>
    )
}

export default About
