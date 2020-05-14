import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="navigation-color-strip">
            <Navbar.Brand href="/">Cycling Championship</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/locations">Locations</Nav.Link>
                    <Nav.Link href="/riders">Riders</Nav.Link>
                    <Nav.Link href="/contest">Contest</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;