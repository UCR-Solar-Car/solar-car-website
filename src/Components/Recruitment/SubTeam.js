import React from 'react'
import "./SubTeam.css"

const SubTeam = (props) => {
    return (

        <div className="subteam" 
        // style={{ background: `url(${props.img})`, backgroundSize: 'cover', backgroundColor: "rgba(0, 0, 0, .5)", backgroundBlendMode: "multiply" }}
        >
            {/* <div className="subteam-tint"></div> */}
            <p className='subteam-title'>{props.name}</p>
            <p className='subteam-description'>{props.description}</p>
        </div>
    )
}

export default SubTeam