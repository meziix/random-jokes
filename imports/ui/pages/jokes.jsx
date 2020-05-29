import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Jokes extends Component {
    state = {
        text: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
    
        if (this.state.text === "") {
            toast.error("J'ai vu un hibou se casser une patte, maintenant hibouette");
            return;
        }

        Meteor.loginWithPassword(this.state.text, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                this.props.history.push('/room');
            }
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    
                    <Button variant="info" type="submit">Je récupère une blague </Button>

                </Form>
            </Container>
        );
    };
};

export default Jokes;