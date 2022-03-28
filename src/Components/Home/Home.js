import React from 'react'
import "./Home.css"
import Car from "../../Images/FrontLeftRender.jpg"
import Separator from '../Helper-Components/Separator'
import ProjectManager_1 from "../../Images/Profiles/Leen.jpg"
import ProjectManager_2 from "../../Images/Profiles/David.jpg"
import { Row, Col } from "react-bootstrap"

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <img className="home-img" src={Car} style={{ objectPosition: "50% 50%" }} alt="Solar Car Render"/>
                <div className="home-tint"></div>
                <h4 className='home-text'>UC Riverside Solar Car</h4>
            </div>

            <Separator height="5vh" />
            <hr className='t-line' />
            <Separator height="5vh" />


            <div className='student-info'>
                <Row className = "student-info-row">
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                        <p>Since 2017, UC Riverside Solar Car has been developing, innovating, and improving Solar Cars that push what we have ever seen before!</p>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                        <p>30+ Students</p>
                        <p>8+ Majors</p>
                    </Col>
                </Row>
            </div>

            <Separator height="5vh" />
            <hr className='t-line' />
            <Separator height="5vh" />

            <div className='managers-wrapper'>
                <p className = "managers-title">Co-Project Managers</p>
                <div className='project-managers'>
                    <Row>
                        <Col lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ProjectManager_1} alt="Project Manager"/>
                        </Col>
                        <Col lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>

                            <div className='manager-bio'>
                                <p className="manager-name">Leen Eisa</p>
                                <p>
                                    <div className = "questions">What made you join UCR Solar Car ☀️?</div>
                                    I joined Solar Car to apply the knowledge I learned in different classes in a real-life scenario and become more involved on campus!
                                    <br /><br />
                                    <div className = "questions">What is your favorite thing about Solar Car 🚗?</div>
                                    I love working together with the team and making sure that everything is going according to plan. I love seeing the project come together!
                                    <br /><br />
                                    <div className = "questions">What are your goals for the future?</div>
                                    Travel &#128745; and explore new areas. Graduate 🎓with a strong GPA 🧠
                                    <br /><br />
                                    <div className = "questions">What do you like to do in your free time?</div>
                                    Explore, watch and improve on video-editing skills 🎥
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                            <div className='manager-bio'>
                                <p className="manager-name">David Wilson</p>
                                <p>
                                <div className = "questions">What made you join UCR Solar Car ☀️?</div>
                                    I wanted a way I could test out what we learn in class and continue to grow as an electrical 🔌engineer. In addition, I wanted to take on a project 🛠 with great networking potential!
                                    <br /><br />
                                    <div className = "questions">What is your favorite thing about Solar Car 🚗?</div>
                                    Seeing growth within the team. There is something special about learning📓& working together to accomplish a common goal
                                    <br /><br />
                                    <div className = "questions">What are your goals for the future?</div>
                                    Continue accumulating knowledge 🧠 that I can eventually bring into the field of engineering ⚙️
                                    <br /><br />
                                    <div className = "questions">What do you like to do in your free time?</div>
                                    I spend my free time playing 🎲 Magic: The Gathering with my friends online 🖥 and spending time with family.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ProjectManager_2} alt="Project Manager"/>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default Home
