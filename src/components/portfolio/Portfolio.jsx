import React from 'react'
import './portfolio.css';

const Portfolio = (props) => {
  const { portfolios } = props;
  const portfolioItem = (i, index) => {
    return (
      <article key={index} className='portfolio-item'>
        <div className="portfolio-item-image">
          <img src={i.image} alt={"Image of "+i.title} />
        </div>
        <h3 className='text-capitalize'>{i.title}</h3>
        <div className="portfolio-item-cta">
          <a href={i.githubLink} target='_blank' className='btn '>Github</a>
          <a href={i.githubLink} target='_blank' className='btn btn-primary'>Live demo</a>
        </div>
      </article>
    )
  }
  return (
    <section id='portfolio'> 
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {portfolios.map((item, index) => portfolioItem(item, index))}
      </div>
    </section>
  )
}

export default Portfolio