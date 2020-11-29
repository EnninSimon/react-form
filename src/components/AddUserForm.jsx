import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {addUser} from '../actions/userActions';
import {connect} from 'react-redux';
class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            email: "",
            gen: "",
            id:""
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                        name="name" onChange={this.handleChange}
                        value={this.state.name} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        name="email" onChange={this.handleChange}
                        value={this.state.email} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" placeholder="Enter Gen"
                        name="gen" onChange={this.handleChange}
                        value={this.state.gen} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

 const mapDispatchToProps ={
     addUser: addUser
 }

export default connect(null, mapDispatchToProps) (AddUserForm);
