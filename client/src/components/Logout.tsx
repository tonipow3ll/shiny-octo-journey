import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';



const LogoutButton: React.FC = (): JSX.Element => {

  const { logout } = useAuth0();
  return (
    <Button
      variant="outline-info"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default withRouter(LogoutButton);