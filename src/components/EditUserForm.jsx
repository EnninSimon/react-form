import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editUser} from '../actions/userActions';
import { Form, Button } from 'react-bootstrap';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
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
        this.props.updateUser(this.state)
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
        this.props.closeModal();
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
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = {
    updateUser: editUser
}

export default connect(null, mapDispatchToProps) (EditUserForm);
