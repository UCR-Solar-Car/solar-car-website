import React from 'react'
import Sponser from './Sponser'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from "react-bootstrap"
import Separator from "../Navigation/Separator"
import "./Sponserships.css"

const Sponserships = () => {
    return (
        <div className='sponserships'>
            <h4 className='sponser-title'>Sponsers</h4>
            <p className="sponser-text">We would like to thank all of our generous sponsers. Without them much of our current progress would be impossible.</p>
            <Button className="sponser-button">
                Sponser Packet
            </Button>
            <Separator height="5vh" />
            <p className="sponser-text">Thank you current sponsers</p>
            <Container>
                <Row>
                    <Col className="platinum-title" xl={12}>Platinum</Col>
                    <Col xs={6}>
                        <Sponser image="https://static.wixstatic.com/media/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png/v1/fit/w_2500,h_1330,al_c/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png" alt="UCR GCAP" />
                    </Col>
                    <Col xs={6}>
                        <Sponser image="https://www.danielandrade.net/wp-content/uploads/2016/03/altium_logo.png" alt="Altium" />
                    </Col>
                </Row>
                <Row>
                    <Col className="gold-title" xl={12}>Gold</Col>
                    <Col sm={4} xs={6}>
                        <Sponser image="https://yt3.ggpht.com/ytc/AKedOLRi4SX-wn3z9HxDyU_beTfAmZCNLNgXEvMJwDI5=s900-c-k-c0x00ffffff-no-rj" alt="Triad Magnetics" />
                    </Col>
                    <Col sm={4} xs={6}>
                        <Sponser image="https://logos-download.com/wp-content/uploads/2016/11/ESRI_logo_logotype.png" alt="ESRI" />
                    </Col>
                    <Col sm={{ span: 4, offset: 0 }} xs={{ span: 6, offset: 3 }}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/e/e5/ANSYS_logo.png" alt="ANSYS" />
                    </Col>
                </Row>
                <Row>
                    <Col className="silver-title" xl={12}>Silver</Col>
                    <Col md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
                        <Sponser image="https://pbs.twimg.com/profile_images/963152650115072000/7fX4teaZ_400x400.jpg" alt="IEEE" />
                    </Col>
                </Row>
                <Row>
                    <Col className="bronze-title" xl={12}>Bronze</Col>
                    <Col sm={4} xs={6}>
                        <Sponser image="https://www.solarreviews.com/content/company/3729772f584d101fe367846ed0e5070e6992/logo/New%20Day%20Solar%20Text%20Logo%20Since%201988.png" alt="New Day Solar" />
                    </Col>
                    <Col sm={4} xs={6}>
                        <Sponser image="https://sdu-vikings.dk/wp-content/uploads/2020/07/Gigavac.png" alt="Gigavac" />
                    </Col>
                    <Col sm={{ span: 4, offset: 0 }} xs={{ span: 6, offset: 3 }}>
                        <Sponser image="https://sdu-vikings.dk/wp-content/uploads/2020/07/Gigavac.png" alt="Gigavac" />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Sponserships
