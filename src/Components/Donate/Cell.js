import React from 'react'
import {Col} from "react-bootstrap"
import "./Cell.css"

const Cell = (props) => {
    return (
        <Col xs={1}>
            <div style={{ backgroundColor: props.color }} className="cell" key={props.index}>
                <p>{props.index}</p>
            </div>
        </Col>
    )
}

export default Cell