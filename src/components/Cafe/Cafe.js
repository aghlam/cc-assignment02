import React, {Component} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios'


class Cafe extends Component {

    
    constructor() {
        super();
        this.state = {
            cafe_id: 'no_id',
            name: 'no cafe',
            address: 'no address',

        };
    }
    
    componentDidMount = () => {

        const { cafe_id } = this.props.match.params
        axios.get("/getcafebyid/" + cafe_id).then(response => {
            console.log(response)
            this.setState({
                name: response.name
            })
            this.setState({
                cafe_id: response.cafe_id
            })
            this.setState({
                address: response.address
            })
        });
        

    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>Cafe name: {this.state.name}</h2>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Cafe