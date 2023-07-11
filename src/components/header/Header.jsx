import React from 'react'
import './header.css';
import CTA from './CTA';
import MYSELF from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = (props) => {
  const { socials , name , job } = props;
  return (
    <header>
      <div className="container header__contaiener">
        <h5>hello I'm </h5>
        <h1>{name} </h1>
        <h5 className='text-light'>{job}</h5>
        <CTA />
        <HeaderSocials socials = {socials}  />
        <div className="myself">
          <img src={MYSELF} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>

    </header>
  )
}

export default Header;