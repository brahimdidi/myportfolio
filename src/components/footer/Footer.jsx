import React from 'react'
import './footer.css';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
const Footer = ({socials}) => {
  const {linkedin, github, twitter, facebook} = socials;
  return (
    <footer>
      <a href="#" className='footer-logo'>Brahim</a>
      <div className="permalinks">
         <a className='text-capitalize' href="#">home</a>
         <a className='text-capitalize' href="#about">about</a>
         <a className='text-capitalize' href="#services">services</a>
         <a className='text-capitalize' href="#portfolio">portfolio</a>
         <a className='text-capitalize' href="#testimonials">testimonials</a>
      </div>
      <div className="footer-socials">
        <a target='_blank' href={facebook}><FaFacebookF /></a>
        <a target='_blank' href={linkedin}><FaLinkedinIn /></a>
        <a target='_blank' href={twitter}><FaTwitter /></a>
        <a target='_blank' href={github}><FaGithub /></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Didify. All rights reserved, 2023.</small>
      </div>

    </footer>
  )
}

export default Footer;