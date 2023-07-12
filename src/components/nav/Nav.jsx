import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {TbMessageDots} from 'react-icons/tb';
const Nav = () => {
  const [active, setActive] = useState('#');

  for (const a of document.querySelectorAll("a")) {
    if (a.textContent.includes("ontact")) {
      a.addEventListener('click', () => setActive('contact'));
    }
  }
  

  return (
    <nav className='navbar'>
      <a href="#"
      onClick={() => setActive('#')} 
      className={active === '#' ? 'active' : ''}
      > <AiOutlineHome />  </a>
      <a href="#about"
      onClick={() => setActive('about')} 
      className={active === 'about' ? 'active' : ''}
      > <AiOutlineUser /> </a>
      <a href="#experience"
      onClick={() => setActive('experience')} 
      className={active === 'experience' ? 'active' : ''}
      > <BiBook /> </a>
      <a href="#services"
      onClick={() => setActive('services')} 
      className={active === 'services' ? 'active' : ''}
      > <RiServiceLine /> </a>
      <a href="#contact"
      onClick={() => setActive('contact')} 
      className={active === 'contact' ? 'active' : ''}
      > <TbMessageDots /> </a>
    </nav>
  )
}

export default Nav;