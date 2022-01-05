import React from 'react'
import Calender from './Calender'
import { Button } from "react-bootstrap"
import { Container, Row, Col } from 'react-bootstrap';
import "./Recruitment.css"
import { Discord, BoxArrowUpRight, Envelope } from 'react-bootstrap-icons'

const Recruitment = () => {
    return (
        <div>
            <h4 className='recruitment-title'>Recruitment</h4>
            <p className='recruitment-text'>IEEE Solar Car is always on the lookout for dedicated and talented students and faculty to join our team!
                With our various multidisciplinary teams, there is a spot for everyone! If interested, reach out to us
                for more information! To recieve official announements and updates, join our Discord server below! Here,
                you can contact our team leads and meet your teammates! If you have any additional questions, please contact
                us through email below!
            </p>

            <Container className="test" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row >
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="r-discord-button">
                            <Discord className="r-discord-logo" size={36} />Discord
                        </Button>
                    </Col>
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="highlander-link-button">
                            <BoxArrowUpRight className="highlander-link-logo" size={24} />Highlander Link
                        </Button>
                    </Col>
                    <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button className="email-button">
                            <Envelope className="email-logo" size={24} />Questions
                        </Button>
                    </Col>
                </Row>
            </Container>

            <p className="calender-text">
                Below we have our schedule for meetings! Please refer to it to ensure you are able to attend the correct
                subteam meeting. If unsure, please contact one of your team leads. Meeting places will be different for every team,
                please refer to Discord if you are unsure.
            </p>

            <Calender />

        </div>
    )
}

export default Recruitment
