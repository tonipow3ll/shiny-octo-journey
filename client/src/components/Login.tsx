import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

const LoginButton: React.FC = (): JSX.Element => {


  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="outline-info"
      onClick={() => loginWithRedirect()}
    >
      Log In / Sign Up
    </Button>
  );
};

export default LoginButton;