import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div className='banner-container'>
        <img className="banner-img" src={props.img} style = {{objectPosition: props.offset}} alt="Header"/>
        <div className="banner-tint"></div>
        <h4 className='banner-text'>{props.name}</h4>
    </div>

  )
}

Header.defaultProps = {
    offset: "50% 50%"
};

export default Header