import React from 'react'
import { NavHashLink } from 'react-router-hash-link'



const Nav = () => {
  return (
    <div>
        <div>
            <NavHashLink >
                <img className='logo' src='/cleaning.png' alt="cleaning logo" />
                Angie's Cleaning Service
            </NavHashLink>
            <NavHashLink>About Us</NavHashLink>
            <NavHashLink >Services</NavHashLink>
            <NavHashLink>FAQ</NavHashLink>
            <NavHashLink >Contact</NavHashLink>
            <NavHashLink>CAll NOW</NavHashLink>
        </div>
      
    </div>
  )
}

export default Nav
