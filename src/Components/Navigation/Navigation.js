import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import "./Navigation.css"
import {
    Link
} from 'react-router-dom';
import Separator from '../Helper-Components/Separator';
import Logo from "../../Images/logo2.png"


const Navigation = () => {
    return (
        <>
            <Separator height="8vh" />
            <Navbar fixed="top" collapseOnSelect expand="md" className='navbar'>
                <Container fluid className = "navbar-container">
                    <Navbar.Brand href="/" className="navbrand"><img className = "logo" src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link as={Link} to="/" className="navitem">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about-us" className="navitem">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/team" className="navitem">Team</Nav.Link>
                            <Nav.Link as={Link} to="/sponsers" className="navitem">Sponsers</Nav.Link>
                            <Nav.Link as={Link} to="/recruitment" className="navitem">Recruitment</Nav.Link>
                            {/* <Nav.Link as={Link} to="/contact-us" className="navitem" >Contact Us</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
