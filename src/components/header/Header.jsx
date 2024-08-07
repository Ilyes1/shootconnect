import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import user from '../../assets/icons/user.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  const [menu, setMenu] = useState(false)

  return (
    <header className="header">
      <nav className="container header-navbar">
        <Link to={'/'} className='header-logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className={`header-right ${menu && 'active'}`}>
          <ul className='header-navlinks'>
            <li><NavLink to={'/'} activeClassName="active">Home</NavLink></li>
            <li><NavLink to={'/about'} activeClassName="active">About</NavLink></li>
            <li><NavLink to={'/features'} activeClassName="active">Features</NavLink></li>
            <li><NavLink to={'/news'} activeClassName="active">News</NavLink></li>
            <li><NavLink to={'/clubs'} activeClassName="active">Clubs</NavLink></li>
          </ul>
        
          <div className="header-ctas">
            <Link to={'/contact'} className='default-btn'>Contact Us</Link>
            <Link to={'/login'} className='header-login-link'>
              <img src={user} alt="login" />
              Login
            </Link>
          </div>
        </div>
        <div 
          id="menu-icon" 
          className={menu === true ? 'open' : ''}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

    </header>
  )
}

export default Header