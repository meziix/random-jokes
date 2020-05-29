import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button    from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container>
            <Button variant="success" type="submit" as={Link} to="/newjokes" block>
                Déposer une blague
            </Button>
            <Button variant="success" as={Link} to="/jokes" block>
                Récupérer une blague
            </Button>
        </Container>
    );
};

export default Home;