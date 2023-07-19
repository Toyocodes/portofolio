import React from 'react'
import './Testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// Import Swiper React components version 8.4.6
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import {Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/package.json';


const data = [
  {
    avatar: Avatar1,
    name: "Sorunke Olayiwola",
    review:
      "Toyosi is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  },
  {
    avatar: Avatar2,
    name: "Oluwafemi Samuel",
    review:
      "I had the chance to work with Toyosi on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
  {
    avatar: Avatar3,
    name: "Emmanuella Okafor",
    review:
      "Working with Toyosi has been very amazing, I look forward to working with her more on numerous projects.",
  },
  {
    avatar: Avatar4,
    name: "Alex Williams",
    review:
      "I had the chance to work with Toyosi on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
];

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client-avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials