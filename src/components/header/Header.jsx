import React, { forwardRef } from 'react'
import './header.css';
import CTA from './CTA';
import MYSELF from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import {FiChevronsDown} from 'react-icons/fi';

const Header = forwardRef((props,ref) => {
  const { socials , name , job } = props;
  return (
    <header id='header' ref={ref}>
      <div className="container header-container">
        <h5>hello I'm </h5>
        <h1>{name} </h1>
        <h5 className='text-light'>{job}</h5>
        <CTA />
        <HeaderSocials socials = {socials}  />
        <div className="myself">
          <img src={MYSELF} alt="" />
        </div>
        <a href="#contact" className='scroll-down'>
          <FiChevronsDown />
        </a>
      </div>

    </header>
  )
});

export default Header;