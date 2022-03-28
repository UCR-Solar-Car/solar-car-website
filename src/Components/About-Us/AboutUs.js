import React from 'react'
import Header from '../Helper-Components/Header'
import Chassis from "../../Images/TransparentChassis_1.jpg"
import Separator from '../Helper-Components/Separator'
import "./AboutUs.css"
import GroupPhoto from "../../Images/GroupPhoto_2.jpg"
import { Container, Row, Col } from "react-bootstrap"
import Render from "../../Images/TransparentDriver.jpg"

const AboutUs = () => {
    return (
        <div className="about-us">
            <Header img={Chassis} name="About Us" offset="50% 50%" />
            <Separator height="5vh" />
            <hr className='t-line' />
            <Separator height="5vh" />
            <div className='about-container'>
                <div className="about-wrapper">
                    <p>The UCR Solar Car team was founded by co-founders Kyle Semelka
                        and Paven Bhogal in 2017. Having begun as a small project with
                        a few members and nothing but an idea and a dream, the team and
                        project have both developed into a large project for all members
                        and contributors to the project; involving many members who work
                        on our solar vehicle, countless hours of electrical and mechanical
                        meetings, lead meetings, and hours outside of school.<br /><br />
                        Today, the University of California Riverside Solar Car team consists
                        of many talented, undergraduate students who aim to construct a
                        full-scaled solar car to compete in the Formula Sun Grand Prix, and
                        the American Solar Challenge: a national collegiate competition which
                        requires teams and their solar-powered vehicles to finish a 2,000 mile
                        cross-country journey. Our team members are hard at work dedicating
                        countless hours designing, assembling, and testing our solar car for
                        competition. With the efforts of our team members, we hope to successfully
                        complete our first Formula Sun Grand Prix, and American Solar Challenge
                        in the following years to come.
                    </p>
                </div>
            </div>

            <div className="about-photo-wrapper">
                <img className="about-photo" src={Render} alt="Solar Car Render" />
            </div>

            <Container fluid className="pillars">
                <Row>
                    <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="about-title">Leadership</div>
                        <p className="about-text">
                            The UCR Solar Car team encourages members to be strong leaders in their
                            perspective industries and smart decision makers
                        </p>
                    </Col>

                    <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <div className="about-title">Innovation</div>
                        <p className="about-text">The leads and all other members of the team work hard everyday to make
                            creative improvements to the solar car electrically, mechanically, and design wise
                        </p>
                    </Col>

                    <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <div className="about-title">Dedication</div>
                        <p className="about-text">Countless hours are dedicated outside of school to improve and perfect our solar
                            car. Without the dedication of our team, progress and completion would not be possible
                        </p>
                    </Col>
                    <Col md={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <div className="about-title">Teamwork</div>
                        <p className="about-text">The UCR Solar Car would not be possible without all members of the team, so
                            we encourage strong collaboration, open communication, and team bonding
                        </p>
                    </Col>
                </Row >
            </Container >
            <div className="about-photo-wrapper">
                <img className="about-photo" src={GroupPhoto} alt="Solar Car Team" />
            </div>

        </div >


    )
}

export default AboutUs