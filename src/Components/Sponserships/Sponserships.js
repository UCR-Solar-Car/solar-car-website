import React from 'react'
import Sponser from './Sponser'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from "react-bootstrap"
import Separator from "../Helper-Components/Separator"
import "./Sponserships.css"
import Battery from "../../Images/Battery.jpg"
import Header from '../Helper-Components/Header'

import ElCon from "../../Images/Sponsers/ElconLogo.png"
import Altium from "../../Images/Sponsers/Altium.png"
import GCAP from "../../Images/Sponsers/GCAP.png"
import Ansys from "../../Images/Sponsers/Ansys.png"
import Esri from "../../Images/Sponsers/Esri.png"
import Gigavac from "../../Images/Sponsers/Gigavac.jpg"
import IEEE from "../../Images/Sponsers/IEEE.png"
import Newday from "../../Images/Sponsers/Newday.png"
import Triad from "../../Images/Sponsers/Triad.png"


const Sponserships = () => {
    return (
        <div className='sponserships'>

            <Header img={Battery} name="Sponsers" alt="Battery"/>

            <Separator height="5vh" />

            <Container fluid className = "sponsor-container">
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col className="platinum-title" xl={12}><hr className="sponser-title-line" />Platinum<hr className="sponser-title-line" /></Col>

                    <Col sm={6} xs={12}>
                        <Sponser image={GCAP} alt="UCR GCAP" />
                    </Col>
                    <Col sm={6} xs={12}>
                        <Sponser image={Altium} alt="Altium" />
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col className="gold-title" xl={12}><hr className="sponser-title-line" />Gold<hr className="sponser-title-line" /></Col>
                    <Col sm={4} xs={6}>
                        <Sponser image={Triad} alt="Triad Magnetics" />
                    </Col>
                    <Col sm={4} xs={6}>
                        <Sponser image={Esri} alt="ESRI" />
                    </Col>
                    <Col sm={4} xs={6}>
                        <Sponser image={Ansys} alt="ANSYS" />
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col className="silver-title" xl={12}><hr className="sponser-title-line" />Silver<hr className="sponser-title-line" /></Col>
                    <Col sm={4} xs={{ span: 6 }}>
                        <Sponser image={IEEE} alt="IEEE" />
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col className="bronze-title" xl={12}><hr className="sponser-title-line" />Bronze<hr className="sponser-title-line" /></Col>
                    <Col sm={3} xs={6}>
                        <Sponser image={Newday} alt="New Day Solar" />
                    </Col>
                    <Col sm={3} xs={6}>
                        <Sponser image={Gigavac} alt="Gigavac" />
                    </Col>
                    <Col sm={3} xs={6}>
                        <Sponser image={ElCon} alt="El Con Chargers" />
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col className="bronze-title" xl={12}><hr className="sponser-title-line" />Friend<hr className="sponser-title-line" /></Col>
         
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                        <p className="sponser-text" >Interested in becoming a sponser? Learn more below!</p>

                        <a href= "https://drive.google.com/file/d/1lYJ8mq1y9bDRtMmahY207laER16EXg82/view?usp=sharing" target="_blank" rel="noreferrer">
                            <Button className="sponser-button"> 
                                Become a Sponser
                            </Button>
                        </a>
                    </Col>

                </Row>
            </Container>


        </div>
    )
}

export default Sponserships
