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


            {/* <div className='sponser-banner-container'>
                <img className="sponser-banner-img" src={Battery} />
                <div className="sponser-banner-tint"></div>
                <h4 className='sponser-title sponser-banner-text'>Sponsers</h4>
            </div> */}

            <Header img={Battery} name="Sponsers" />




            {/* <h4 className='sponser-title'>Sponsers</h4> */}
            {/* <p className="sponser-text">We would like to thank all of our generous sponsers. Without them much of our current progress would be impossible.</p> */}

            <Separator height="5vh" />
            {/* <p className="sponser-text">Thank you current sponsers</p> */}



            <Container>
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
                    {/* <Col sm={3} xs={6}>
                        <Sponser image="https://www.solarreviews.com/content/company/3729772f584d101fe367846ed0e5070e6992/logo/New%20Day%20Solar%20Text%20Logo%20Since%201988.png" alt="New Day Solar" />
                    </Col>
                    <Col sm={3} xs={6}>
                        <Sponser image="https://sdu-vikings.dk/wp-content/uploads/2020/07/Gigavac.png" alt="Gigavac" />
                    </Col>
                    <Col sm={3} xs={6}>
                        <Sponser image="https://sdu-vikings.dk/wp-content/uploads/2020/07/Gigavac.png" alt="Gigavac" />
                    </Col> */}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                        <p className="sponser-text" >Interested in becoming a sponser? Learn more below!</p>

                        <a href= "https://drive.google.com/file/d/1lYJ8mq1y9bDRtMmahY207laER16EXg82/view?usp=sharing" target="_blank">
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
