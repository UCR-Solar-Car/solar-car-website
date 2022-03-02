import React from 'react'
import "./SubTeam.css"

const SubTeam = (props) => {
    return (

        <div className="subteam">
            <p className='subteam-title'>{props.name}</p>
            <p className='subteam-description'>{props.description}</p>
        </div>
    )
}

export default SubTeam