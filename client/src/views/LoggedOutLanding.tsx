import React from "react";
import { Container } from 'react-bootstrap';
import Login from '../components/Login';

const LoggedOutLanding = () => {

    return (
        <Container>
            <h1>Welcome to Tides</h1>
            <Login />
        </Container>
    )
}

export default LoggedOutLanding;