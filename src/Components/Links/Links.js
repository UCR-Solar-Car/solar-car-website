import React from 'react'
import Header from '../Helper-Components/Header'
import "./Links.css"
import { Container, Row, Col } from "react-bootstrap"

import Image from "../../Images/BackLeftTransparent.jpg"
import Separator from '../Helper-Components/Separator'

const Links = () => {

    const links = [
        ["Project Manager", "https://forms.gle/aAETGUzffTZWXm6t8"],
        ["Mechanical Lead", "https://forms.gle/NRLn3yNQcNXFyUss9"],
        ["Electrical Lead", "https://forms.gle/CAKDUQRqP4PRH2SH8"],
        ["Solar Array Lead", "https://forms.gle/f1P2Zc5aaT5KbARQA"],
        ["Battery Lead", "https://forms.gle/C6pzvkTXPpHkcKbF8"],
        ["Telemetry Lead", "https://forms.gle/mvUkbRcKXD8D39bz9"],
        ["Driver Interface Lead", "https://forms.gle/8BMVkhqKhhRSukVb6"],
        ["Business Lead", "https://forms.gle/iJUGcpsa63BCAr1Q9"]
    ]

    return (
        <div>
            <Header img={Image} name="Links and Resources" offset="50% 60%" />
            <Separator height="5vh" />
            <hr className='t-line' />
            <Separator height="5vh" />
            <p className="link-headers">Lead Application Links</p>
            <Container fluid className = "links-container">
                <Row>
                    {
                        links.map(link => (
                            <Col lg={3} sm = {6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <a className="link" href={link[1]} target="_blank">
                                    {link[0]}
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Links