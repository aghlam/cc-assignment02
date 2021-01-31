import React from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';


function Home() {


    return (
        <div>
            <Container fluid className='row-background'>

                <Row className='home-row align-items-center' >
                    <Col>
                        <h1 className='display-1' >Cafe Crusaders</h1>
                        <h4 className='display-4'>Search for your desired cup of coffee</h4>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>

        </div>
    );
}

export default Home;