import React from 'react'
import './About.css'
import ME from "../../assets/me-about.jpg";
import {FaAward, FaCertificate, FaFolder} from "react-icons/fa";
import 'animate.css';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
    
    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about-content">
       <div className="about-cards">
          <article className="about-card">
            <FaAward className="about-icon" />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about-card">
            <FaCertificate className="about-icon" />
            <h5>Certificates</h5>
            <small>3+</small>
          </article>

          <article className="about-card">
            <FaFolder className="about-icon" />
            <h5>Projects</h5>
            <small>5+ projects completed</small>
          </article>
       </div>

        <p>I’m a certified full-stack developer, who enjoys building interactive interfaces with JavaScript, 
          React and Ruby On Rails.  <br /> <br />

          I'm open to Full-stack(remote/onsite) opportunities with a passion of Front-end development. If you like what you see and have a project you need coded, don’t hestiate to contact me.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About