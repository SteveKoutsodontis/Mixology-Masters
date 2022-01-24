import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import {PJloGo} from "./Nav/images/pj_logo1.png"
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
    function showLogout() {
        if (Auth.loggedIn()) {
            return (
                <>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/Home">Mixology Masters</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/cart">Cart</Link>
                                    <Link className="styledLink" to="/logout">Logout</Link>
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
                            <Navbar.Brand href="/Home">Mixology Masters</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/login">Login</Link>
                                    <Link to="/signup">Signup</Link>
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
        <h1>NAVI</h1>
       
        {showLogout()}
        </>
    )
}

