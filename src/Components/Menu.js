import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import logo from "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
import "../CSS/Menu.css";
import Separator from './separator';

function Menu() {
    return (
        <>
            <Navbar fixed = "top" collapseOnSelect expand="md" variant="dark" className = "navbar">
                <Container>
                    <Navbar.Brand href="#home" className = "navitem">
                        <img
                            alt=""
                            src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        UCR IEEE Solar Car
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features" className = "navitem">Home</Nav.Link>
                            <Nav.Link href="#pricing" className = "navitem">About Us</Nav.Link>
                            <Nav.Link href="#pricing" className = "navitem">The Team</Nav.Link>
                            <Nav.Link href="#pricing" className = "navitem">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Separator/>
        </>
    )
}

export default Menu
