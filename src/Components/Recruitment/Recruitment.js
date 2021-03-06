import React from 'react'
import Calender from './Calender'
import { Button } from "react-bootstrap"
import { Container, Row, Col } from 'react-bootstrap';
import "./Recruitment.css"
import { Discord, BoxArrowUpRight, Envelope } from 'react-bootstrap-icons'
import GroupPhoto from "../../Images/GroupPhoto_1.jpg"
import Header from '../Helper-Components/Header';
import TransparentDriver from "../../Images/GroupPhoto_2.jpg"
import Separator from '../Helper-Components/Separator';
import SubTeam from './SubTeam';

const Recruitment = () => {

    const data = [
        ["Electrical", "Responsible for the electrical components and full electrical system integration of the vehicle. We work closely with Battery and Solar Array teams to design and implement the main power systems of the vehicle."],
        ["Mechanical", "Responsible for the mechanical components of the vehicle which includes: chassis, suspension, breaks, stearing, wheels, and aeroshell. Utilizing CAD software, we design and simulate proposed concepts to ensure optimal and desired results. Lastly, responsible for manufacturing of aeroshell and final assembly."],
        ["Battery", "Configure the batteries to provide optimate performance both in terms of power and range. Ensure batteries remain cool and charge/discharge appropriately."],
        ["Solar Array", "Configure solar array to optimize energy recieved to send to the various boards and motors."],
        ["Telemetry", "Communicate information between the solar car, driver interface, and chase vehicles while in operation. Ensure that all components are working at appropriate levels through sensor data."],
        ["Driver Interface", "Provide the driver with a simple yet informative user interface to inform them about speeds, battery levels, temperatures and other various necessary information required while driving the car."],
        ["Business", "Manage various mediums of communciation including Instagram, official website, Discord for annoucnements, socials, fundraisers. Maintain and build coporate partnerships along with UCR IEEE."]
    ];

    return (
        <div className='recruitment-wrapper'>
            <div className='recruitment'>

                <Header img={TransparentDriver} name="Recruitment" offset="50% 72%" alt="Solar Car Render" />

                <Separator height="5vh" />
                <hr className='r-line' />
                <Separator height="5vh" />

                <Container >
                    <Row >
                        <Col lg={6} sm={12}>
                            <img className="recruitment-small-group" src={GroupPhoto} alt="Solar Car Team" />
                        </Col>
                        <Col lg={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className='calender-text'>UCR Solar Car is always on the lookout for dedicated and talented students and faculty to join us!
                                With our multidisciplinary teams, there's a spot for everyone! If interested, reach out
                                for more information! To recieve official announcements and updates, join our Discord server below! Here,
                                you can contact team leads and meet your teammates! If you have any additional questions, please contact
                                us through email below!
                            </p>
                        </Col>


                    </Row>
                </Container>

                <Separator height="3vh" />

                <Container className="test" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row >
                        <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a className="button-link" href="https://discord.gg/Gt7HefU4Nps" target="_blank" rel="noreferrer">
                                <Button className="r-discord-button">
                                    <Discord className="r-discord-logo" size={36} />Discord
                                </Button>
                            </a>
                        </Col>
                        <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a className="button-link" href="https://highlanderlink.ucr.edu/organization/ieee" target="_blank" rel="noreferrer">
                                <Button className="highlander-link-button">
                                    <BoxArrowUpRight className="highlander-link-logo" size={24} />Highlander Link
                                </Button>
                            </a>
                        </Col>
                        <Col md={4} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a className="button-link" href="mailto:ucrsolarcar@gmail.com" target="_blank" rel="noreferrer">
                                <Button className="email-button">
                                    <Envelope className="email-logo" size={24} />Questions
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Container>

                <Separator height="3vh" />

                <hr className='r-line' />
                <p className='recruitment-text'>Subteams</p>

                <Container className="test" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>

                        {data.map((subteam, index) => (
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <SubTeam name={subteam[0]} description={subteam[1]} key={index}/>
                            </Col>
                        )
                        )}
                    </Row>
                </Container>

                <hr className='r-line' />
                <p className="calender-text">
                    Below we have our schedule for meetings! Please refer to it to ensure you are able to attend the correct
                    subteam meeting. If unsure, please contact one of your team leads. Meeting places will be different for every team,
                    please refer to Discord if you are unsure.
                </p>

                <Calender />

            </div>
        </div>
    )
}

export default Recruitment
