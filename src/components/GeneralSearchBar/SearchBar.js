import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <input type='text'></input>
                        </form>

                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchBar
