import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { TideData } from '../components/TideData';
// import { TideLocations } from '../components/TideLocations';

const LoggedInLanding = () => {
  const user: any = useAuth0();

  console.log(user.user)
  return (
    <>
      <Container>

        <h1>Welcome {user.user.nickname}</h1>
        <p>Select a location from below to see today's tide height predictions.</p>
        {/* <TideLocations /> */}
        <TideData />
      </Container>
    </>
  )
}

export default LoggedInLanding;