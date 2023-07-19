import React from 'react'
import './Footer.css'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const footer = () => {
  return (
    <section id='footer'>
     <footer>
      <a href="#" className='footer_logo'>Toyocodes</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/toyosi-jadesimi-0a9742223"><FaLinkedin /></a>
        <a href="https://twitter.com/somdotta_sarkar"><FaTwitter /></a>
        <a href="https://github.com/Toyocodes"><FaGithub /></a>        
      </div>
      <div className="footer_copyright">
        <small>&copy; Toyocodes Portfolio. All rights reserved.</small>
      </div>
    </footer>
    </section>
  )
}

export default footer