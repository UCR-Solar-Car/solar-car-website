import React from 'react'
import "./Profile.css"
import { ArcText } from '@arctext/react'

const Profile = (props) => {
    return (
        <div className="profile-card">
            <img src={props.img} style={{ objectFit: "cover", objectPosition: props.offset }} />
            <p className="profile-name">{props.name}</p>
            <p className='profile-position'>{props.position}</p>
        </div>
    )
}

Profile.defaultProps = {
    offset: "50% 50%"
}

export default Profile