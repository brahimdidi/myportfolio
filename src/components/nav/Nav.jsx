import React, { useEffect, useRef, useState } from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {TbMessageDots} from 'react-icons/tb';
const Nav = (props) => {
  const [active, setActive] = useState('#');
  const { aboutRef, experienceRef, contactRef, servicesRef, homeRef } = props;
  const tobeObserved = [aboutRef, experienceRef, contactRef, servicesRef, homeRef];

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let v = entry.target.id;
            v == 'header' ? v = '#' : v = v;
            setActive(v);
          }
        });
      });
    
      tobeObserved.forEach((element) => {
        if (element.current && element.current instanceof Element) {
          observer.observe(element.current);
        } else {
          console.error("Invalid element:", element.current);
        }
      });
    }, []);
    

  

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