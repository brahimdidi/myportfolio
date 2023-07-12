import React from 'react';
import './about.css';
import MYSELF from '../../assets/me.png';  
import {FiAward}  from 'react-icons/fi';
import {FiUsers}  from 'react-icons/fi';
import {VscFolderLibrary}  from 'react-icons/vsc';

const About = (props) => {
  const { clients , experience, projects, aboutBio } = props;
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={MYSELF} alt="about image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FiAward  className='about-card-icon'/>
              <h5>Experience</h5>
              <small>{experience}</small>
            </article>
            <article className="about-card">
              <FiUsers  className='about-card-icon'/>
              <h5>Clients</h5>
              <small>{clients}+</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary  className='about-card-icon'/>
              <h5>Projects</h5>
              <small>{projects}+ completed projects</small>
            </article>

          </div>
          <p>{aboutBio}</p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  )
};

export default About;