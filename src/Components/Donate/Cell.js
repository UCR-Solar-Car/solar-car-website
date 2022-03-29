import React from 'react'
import {Col} from "react-bootstrap"
import "./Cell.css"

const Cell = (props) => {
    return (
        <Col md={1} sm = {2} xs = {2} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{ backgroundColor: props.color }} className="cell" key={props.index}>
                <p>{props.index}</p>
            </div>
        </Col>
    )
}

export default Cell