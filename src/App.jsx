import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
// import texture from '../src/assets/bg-texture.png'
function App() {
  return (
    <>
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
