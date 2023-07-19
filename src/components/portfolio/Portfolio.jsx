import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [{
  id: 1,
  image: IMG1,
  title: 'Desdistrict',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
},
 {
  id: 2,
  image: IMG2,
  title: 'Food Maniac',
  github: 'https://github.com/Somdotta07/js-capstone',
  demo:'https://mwanawabangona.github.io/js-capstone/'
  }, 
 {
  id: 3,
  image: IMG3,
  title: 'Starkid Website',
  github: 'https://github.com/Somdotta07/react-redux-capstone',
   demo: 'https://determined-aryabhata-b6bc71.netlify.app/'
  },
 {
  id: 4,
  image: IMG4,
  title: 'Food Menu Display',
  github: 'https://github.com/Somdotta07/recipe-blog-1',
  demo:'https://gentle-hollows-44027.herokuapp.com/users/sign_in'
  },
 {
  id: 5,
  image: IMG5,
  title: 'Travelle',
  github: 'https://github.com/Somdotta07/space-travelers-hub',
  demo:'https://cranky-cray-0feacf.netlify.app/'
  },
 {
  id: 6,
  image: IMG6,
  title: 'Furniture product display',
  github: 'https://github.com/Somdotta07/Awesome_Books',
  demo:'https://somdotta07.github.io/Awesome_Books/'
},
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                    <a href={github} className='btn' 
                    target='_blank'>Github</a> 
                    <a href={demo} 
                    className='btn btn-primary' target='_blank'>Live Demo</a> 
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portfolio