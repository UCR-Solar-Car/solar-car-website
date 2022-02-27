import React from 'react'
import Header from '../Helper-Components/Header'
import SolarCarRender_1 from "../../Images/SolarCarRender_1.jpg"
// import ReactArcText from 'react-arc-text'
import { Row, Col, Container } from "react-bootstrap"
import "./Team.css"
import Profile from './Profile'

import Leen from "../../Images/Profiles/Leen.jpg"
import David from "../../Images/Profiles/David.jpg"
import Sunny from "../../Images/Profiles/Sunny.jpg"
import Chris from "../../Images/Profiles/Chris.jpeg"
import Andreas from "../../Images/Profiles/Andreas.jpeg"
import Daisy from "../../Images/Profiles/Daisy.jpg"
import Hallie from "../../Images/Profiles/Hallie.jpg"
import Divyank from "../../Images/Profiles/Divyank.jpg"
import Separator from '../Helper-Components/Separator'



const Team = () => {

    const data = [
        ["Leen Eisa", "Co-Project Manager", Leen, "50% 0%"],
        ["David Wilson", "Co-Project Manager", David, "50% 0%"],
        ["Andreas August", "Mechanical Lead", Andreas, "50% 30%"],
        ["Sunny Zeng", "Electrical Lead", Sunny, "50% 0%"],
        ["Chris de La Torre", "Electrical Lead", Chris, "50% 50%"],
        ["Daisy Rojas Garcia", "Battery Lead", Daisy, "50% 0%"],
        ["Hallie Pham", "Telemetry Lead", Hallie, "50% 00%"],
        ["Divyank Shah", "Business Lead", Divyank, "50% 00%"],
    ]

    const members = [
        ["Electrical", "Sunny Zeng", "Chris De La Torre", "Daisy Rojas Garcia", "Kiana Triatan", "Kevin Ramirez"], //Electrical Team
        ["Mechanical", "Andreas August"], //Mechanical Team
        ["Battery"], //Battery Team
        ["Solar Array"], //Solar Array Team
        ["Telemetry", "Hallie Pham", "Vy Vo", "Aaron Tam", "Divyank Shah"], //Telemetry Team
        ["Driver Interface", "Aaron Tam", "Divyank Shah"], //Driver Interface
        ["Business", "Divyank Shah"] //Business Team
    ]

    return (
        <>
            <Header name="The Team" img={SolarCarRender_1} offset="50% 30%" />

            <Separator height="5vh" />
            <p className="team-title">UC Riverside Solar Car Crew</p>
            <hr className='t-line' />
            <Separator height="5vh" />

            <div className='team-wrapper'>
                <Container fluid className="profile-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row className = "leads" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {data.map(profile => (
                            <Col lg={3} md={4} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Profile name={profile[0]} position={profile[1]} img={profile[2]} offset={profile[3]} />
                            </Col>
                        )
                        )}
                    </Row>
                </Container>
            </div>

            <Separator height="5vh" />
            <hr className='t-line' />
            <Separator height="5vh" />

            <Container className = "members-container" fluid>
                <Row className="members" style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        members.map(names => (
                            <Col className='members-wrapper' lg={3} md={4} sm={6} xs={12}>
                                <p className="team-name">{names[0]}</p>
                                {names.map((name, index) => (
                                    <p className='team-members'>{names[index + 1]} </p>
                                ))
                                }
                            </Col>

                        ))
                    }
                </Row>
            </Container>

        </>
    )
}

export default Team