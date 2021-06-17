import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom"
import { Button } from 'react-bootstrap'

const LoginButton: React.FC = (): JSX.Element => {
 

  const { loginWithRedirect } = useAuth0();
  return (
    <Button 
      onClick={() => loginWithRedirect()}
    >
        Log In / Sign Up
    </Button>
  );
};

export default LoginButton;