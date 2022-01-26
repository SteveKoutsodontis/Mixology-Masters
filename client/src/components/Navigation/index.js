import React from "react";
import Auth from "../../utils/auth";
import { Link, useHistory } from "react-router-dom";
// import {PJloGo} from "./Nav/images/pj_logo1.png"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import {Form, Button } from 'react-bootstrap';
import logo from "../images/pj_logo1.png";


export default function Navigation() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const refresh = (event) => {
        event.preventDefault();
        
    };

    function showLogout() {
        if (Auth.loggedIn()) {
            return (
                <>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Link to="/Home" className="links">
                                <img src={logo} style={{ width: 70, marginTop: -10 }} />
                            </Link>
                            <Navbar.Brand><Link to="/Home" className="links">Mixology Masters</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Link className="ml-5 links" to="/Cart" onClick={refresh} >Cart</Link>
                                    <Link className="ml-5 links styledLink" to="/" onClick={logout}>Logout</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </>
            )
        } else {
            return (
                <>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Link to="/Home" className="links">
                                <img src={logo} style={{ width: 70, marginTop: -12 }} />
                            </Link>
                            <Navbar.Brand><Link to="/Home" className="links">Mixology Masters</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Link className="ml-5 links" to="/login">Login</Link>
                                    <Link className="ml-5 links" to="/signup">Signup</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )
        }
    }

    return (
        <>

            {showLogout()}
        </>
    )
}

