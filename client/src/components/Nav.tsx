import React from 'react';
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import Login from './Login';
import Logout from './Logout';
import { useAuth0 } from '@auth0/auth0-react';


const Navigation = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">The Tides</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            {isAuthenticated ? <Logout /> : <Login />}
            
            </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
