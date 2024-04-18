import React from 'react'
import { NavHashLink } from 'react-router-hash-link'



const Nav = () => {
  return (
    <div>
        <div>
            <NavHashLink to='#home'>
                <img src='/public/cleaning.png' alt="cleaning logo" />
            </NavHashLink>
            <NavHashLink to='#about'>About Us</NavHashLink>
            <NavHashLink to='#services'>Services</NavHashLink>
            <NavHashLink to='#faq'>FAQ</NavHashLink>
            <NavHashLink to='#contact'>Contact</NavHashLink>
            <NavHashLink >CAll NOW</NavHashLink>
        </div>
      
    </div>
  )
}

export default Nav
