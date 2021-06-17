import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { TideData } from '../components/TideData'

const LoggedInLanding = () => { 
    const user: any = useAuth0();

    return(
        <>
        <Container>

        <p>Welcome {user.user.nickname}</p>
        <TideData />
        {/* <p>Tide Data appears here </p> */}
        </Container>
        </>
    )
}

export default LoggedInLanding;