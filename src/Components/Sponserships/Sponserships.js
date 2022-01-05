import React from 'react'
import Sponser from './Sponser'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from "react-bootstrap"
import Separator from "../Navigation/Separator"

const Sponserships = () => {
    return (
        <div className='sponserships'>
            <h4 className='sponser-title'>Sponsers</h4>
            <p className="sponser-text">We would like to thank all of our generous sponsers. Without them much of our current progress would be impossible.</p>
            <Button className="sponser-button">
                Sponser Packet
            </Button>
            <Separator height="5vh"/>
            <p className="sponser-text">Thank you current sponsers</p>
            <Container>
                <Row>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="amazon"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1024px-Meta_Platforms_Inc._logo.svg.png" alt="meta"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="microsoft"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png" alt="asus"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="samsung"/>
                    </Col>
                    <Col md={3} sm={4} xs={6}>
                        <Sponser image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png" alt="dell"/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Sponserships
