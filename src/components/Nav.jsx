import React from 'react'
import { NavHashLink } from 'react-router-hash-link'



const Nav = () => {
  return (
    <div className='nav'>
        <div>
            <NavHashLink className='logo-name' >
                {/* <img className='logo' src='/cleaning.png' alt="cleaning logo" /> */}
                Angie's Cleaning Service
            </NavHashLink>
            <div className='links'>

            <NavHashLink className='link'>About Us</NavHashLink>
            <NavHashLink className='link'>Services</NavHashLink>
            <NavHashLink className='link'>FAQ</NavHashLink>
            <NavHashLink className='link'>Contact</NavHashLink>
            <button className='call-button'>
            <a className='button-txt' href="tel:3312057131">Call Now</a>
            </button>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
