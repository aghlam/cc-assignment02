import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


class SearchBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = { search: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    

    handleChange = e => {
        this.setState({ search: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.search)

    }

    render() {
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={this.handleSubmit}>
                                <input placeholder='Search cafe..' value={this.state.search} onChange={this.handleChange}/>
                                <input type='submit' value='Search'/>
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
}

export default SearchBar
