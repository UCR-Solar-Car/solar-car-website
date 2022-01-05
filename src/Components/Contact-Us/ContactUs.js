import React from 'react'
import { Button } from "react-bootstrap"
import { Container, Row, Col } from 'react-bootstrap';
import { Discord, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'
import "./ContactUs.css"


const ContactUs = () => {
    return (
        <div className="contact-us">
            <h4 className='title'>Contact Us</h4>

            <div className='contact-discord-wrapper'>
                <p className='text'>
                    Contact us through email at <a className="email-link"
                    href="mailto:ucrsolarcar@gmail.com" target="_blank" rel="noreferrer">ucrsolarcar@gmail.com</a> for 
                    any questions or inquiries
                    For official announcements and updates, be sure to join our Discord server!
                </p>

                <Button className="discord-button">
                    <Discord className="discord-logo" size={36} />Discord
                </Button>
            </div>

            <p className='text'>
                Check out the cool things we have done so far on social media! Show your support for UCR
                Solar Car by following us on social media!
            </p>
            <Container className="test" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row >
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="instagram-button">
                            <Instagram className="instagram-logo" size={36} />Instagram
                        </Button>
                    </Col>
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="facebook-button">
                            <Facebook className="facebook-logo" size={36} />Facebook
                        </Button>
                    </Col>
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="linkedin-button">
                            <Linkedin className="linkedin-logo" size={36} />Linkedin
                        </Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ContactUs
