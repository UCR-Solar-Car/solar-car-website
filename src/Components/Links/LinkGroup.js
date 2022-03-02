import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Separator from '../Helper-Components/Separator'
import "./LinkGroup.css"

const LinkGroup = ({ links, name }) => {
    return (
        <div>
            <Separator height = "5vh"/>
            <p className="link-headers">{name}</p>
            <Container fluid className = "links-container">
                <Row style={{ display: 'flex', justifyContent: 'center'}}>
                    {
                        links.map(link => (
                            <Col lg={3} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
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

LinkGroup.defaultProps = {
    links: [
        []
    ]
}

export default LinkGroup