import React from 'react'
import './Home.css'
import background from '../../background/home-background.jpeg'
import { Container, Row, Col } from 'react-bootstrap';


function Home() {


    return (
        <div>
        <Container fluid>
            <Row className='my-row row-background' >
                <Col>
                    column 1
                </Col>
                <Col>
                    column 2
                </Col>
                <Col>
                    column 3
                </Col>
            </Row>
        </Container>
            {/* <div style={{backgroundImage: `url(${background})`}}>

            <h2>Main Page</h2>
            </div> */}

        </div>
    );
}

export default Home;