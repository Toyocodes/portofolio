import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return ( 
    <header>
      <div className="header-container">
      <h5>Hello I'm</h5>
        <h1>Toyosi Jadesimi</h1>
        <h5 className="text-light"> Front-end Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header