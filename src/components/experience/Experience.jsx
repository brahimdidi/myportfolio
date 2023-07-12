import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = (props) => {
  const {frontend, backend} = props;

  const experienceItem = (i) => {
    return (
      <article className='experience-details' key={i.field}>
        <BsPatchCheckFill className='experience-details-icon' />
        <div>
          <h4>{i.field}</h4>
          <small className='text-light'>
            {i.level}
          </small>
        </div>
      </article>
    )
  }

  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-f">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontend.map(item => experienceItem(item))}
          </div>
        </div>
        <div className="experience-b">
          <h3>Backend Development</h3>
          <div className="experience-content">
          {backend.map(item => experienceItem(item))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;