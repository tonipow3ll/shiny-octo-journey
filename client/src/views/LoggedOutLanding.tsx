import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from 'react-bootstrap'
import Login from '../components/Login'

const LoggedOutLanding = () => { 

    return(
        <Container>
            <h1>Welcome</h1>
            <Login />
        </Container>
    )
}

export default LoggedOutLanding;