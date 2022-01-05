import React from 'react'
import "./Sponser.css"

const Sponser = (props) => {
    return (
        <div className='sponser-wrapper'>
            <img className="sponser" src={props.image} alt={props.alt} />
        </div>
    )
}

export default Sponser
