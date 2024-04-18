import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <div>
            <NavLink>About Us</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>FAQ</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>CAll NOW</NavLink>
        </div>
      
    </div>
  )
}

export default Nav
