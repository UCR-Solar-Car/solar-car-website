import React from 'react'
import Header from '../Helper-Components/Header'
import "./Links.css"
import { Container, Row, Col } from "react-bootstrap"

import Image from "../../Images/BackLeftTransparent.jpg"
import Separator from '../Helper-Components/Separator'
import LinkGroup from './LinkGroup'

const Links = () => {

    const apps = [
        ["Project Manager", "https://forms.gle/aAETGUzffTZWXm6t8"],
        ["Mechanical Lead", "https://forms.gle/NRLn3yNQcNXFyUss9"],
        ["Electrical Lead", "https://forms.gle/CAKDUQRqP4PRH2SH8"],
        ["Solar Array Lead", "https://forms.gle/f1P2Zc5aaT5KbARQA"],
        ["Battery Lead", "https://forms.gle/C6pzvkTXPpHkcKbF8"],
        ["Telemetry Lead", "https://forms.gle/mvUkbRcKXD8D39bz9"],
        ["Driver Interface Lead", "https://forms.gle/8BMVkhqKhhRSukVb6"],
        ["Business Lead", "https://forms.gle/iJUGcpsa63BCAr1Q9"]
    ]

    const events = [
        ["Panda Express Fundraiser", "https://community.pandaexpress.com/fundraiser/events/promotions/4aab9990-01c7-08a1-3fd5-3ed6071fed32/en/landing"],
        ["Chassis Painting Party", "https://forms.gle/Yv9iQhRWJgjSZPt96"], 
        ["Solarium Cleaning Party", "https://forms.gle/TF7wtHap1gpirXYQ9"]
    ]

    return (
        <div>
            <Header img={Image} name="Links and Resources" offset="50% 60%" />
            <Separator height="5vh" />
            <hr className='t-line' />

            <LinkGroup name= "Lead Applications" links = {apps}/>
            <LinkGroup name = "Events" links = {events}/>

        </div>
    )
}

export default Links