import React from 'react'
import './footer.css';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
const Footer = ({socials}) => {
  const {linkedin, github, twitter, facebook} = socials;
  return (
    <footer>
      <a href="#" className='footer-logo'>Brahim</a>
      <ul className="permalinks">
        <li> <a className='text-capitalize' href="#">home</a></li>
        <li> <a className='text-capitalize' href="#about">about</a></li>
        <li> <a className='text-capitalize' href="#services">services</a></li>
        <li> <a className='text-capitalize' href="#portfolioi">portfolio</a></li>
        <li> <a className='text-capitalize' href="#testimonials">testimonials</a></li>
      </ul>
      <div className="footer-socials">
        <a href={facebook}> <FaFacebookF /> </a>
        <a href={linkedin}> <FaLinkedinIn /> </a>
        <a href={twitter}> <FaTwitter /> </a>
        <a href={github}> <FaGithub /> </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Didify. All rights reserved, 2023.</small>
      </div>

    </footer>
  )
}

export default Footer;