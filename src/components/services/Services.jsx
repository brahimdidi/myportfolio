import React from 'react'
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = (props) => {
  const { services } = props;

  const serviceItem = (i, index) => {
    return (
      <article key={index} className='service'>
        <div className="service-head">
          <h3>{i.title}</h3>
        </div>
        <ul className='service-list'>
          {
            i.list.map((item,index) => {
              return (
                <li key={index}>
                  <BiCheck className='service-icon' />
                  <p>{item}</p>
                </li>
              )
            })
          }
        </ul>
      </article>
    )
  }
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
          {services.map((item, index) => serviceItem(item, index))}
      </div>
    </section>
  )
}

export default Services;