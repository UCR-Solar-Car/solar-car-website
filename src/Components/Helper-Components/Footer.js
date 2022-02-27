import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Sponser from '../Sponserships/Sponser'
import Separator from './Separator'
import { Facebook, Instagram, Linkedin, Discord, EnvelopeFill } from 'react-bootstrap-icons'
import "./Footer.css"


const Footer = () => {
    return (
        <div>
            <Separator height="5vh" />
            <hr className='t-line' />
            <Container fluid className="social-media">
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col md={3} xs={6}>
                        <Sponser image="https://static.wixstatic.com/media/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png/v1/fit/w_2500,h_1330,al_c/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png" alt="UCR GCAP" />
                    </Col>
                    <Col md={3} xs={6}>
                        <Sponser image="https://www.danielandrade.net/wp-content/uploads/2016/03/altium_logo.png" alt="Altium" />
                    </Col>
                </Row>
            </Container>


            <Container fluid className="social-media">
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={1} className="social-icon">
                        <a className = "social-link" href="https://www.facebook.com/UCRSolarCar" target="_blank"><Facebook /></a>
                    </Col>
                    <Col xs={1} className="social-icon">
                        <a className = "social-link" href="https://www.instagram.com/ucrsolarcar/" target="_blank"><Instagram /></a>
                    </Col>
                    <Col xs={1} className="social-icon">
                        <a className = "social-link" href="https://www.linkedin.com/company/ucr-solar-car/" target="_blank"><Linkedin /></a>
                    </Col>
                    <Col xs={1} className="social-icon">
                        <a className = "social-link" href="https://discord.gg/Gt7HefU4Np" target="_blank"><Discord /></a>
                    </Col>
                    <Col xs={1} className="social-icon">
                        <a className = "social-link" href="mailto:ucrsolarcar@gmail.com" target="_blank"><EnvelopeFill /></a>
                    </Col>
                </Row>
            </Container>

            <Separator height="4vh" />
            {/* <hr className='t-line' />
            <Separator height="5vh" /> */}
        </div>
    )
}

export default Footer