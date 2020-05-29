import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Signin extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("coucou 😊");

        console.log("email : ", this.state.email);
        console.log("password : ", this.state.password);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="entrez votre email"
                    />
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="entrez votre mot de passe"
                    />
                    <Button variant="primary" type="submit">Connexion</Button>
                </Form>
            </Container>
        );
    };
};

export default Signin;