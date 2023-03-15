import React from 'react'
import logo from '../../assets/logo_2.png'
import Nav from '../nav/Nav'
import './_header.scss'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="logo hadrien borie" />
          </div>
        </a>
        <Nav />
      </div>
    </header>
  )
}

export default Header
