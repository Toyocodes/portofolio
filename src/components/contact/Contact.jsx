import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {FaLinkedin, FaAngellist} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Show success message
    alert('Message sent successfully!');

    emailjs.sendForm('service_hoh8jqy', 'template_ey4y6lm', form.current, 'JzEautCxKF0or6rVJ')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>toyjad@gmail.com</h5>
            <a href="mailto:toyjad@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

            <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Toyosi Jadesimi</h5>
            <a href='https://www.linkedin.com/in/toyosi-jadesimi-0a9742223' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact_option'>
            <FaAngellist className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348097662998</h5>
            <a href='https://api.whatsapp.com/send?phone+2348097662998' target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact