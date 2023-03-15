import React, { useState } from 'react'
import './_nav.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessageDots } from 'react-icons/tb'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="main_nav">
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span>Accueil</span>
        <AiOutlineHome className="icon" />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <span>Services</span>
        <RiServiceLine className="icon" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <span>Expériences</span>
        <BiBook className="icon" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <span>A propos</span>
        <AiOutlineUser className="icon" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span>Contact</span>
        <TbMessageDots className="icon" />
      </a>
    </nav>
  )
}

export default Nav
