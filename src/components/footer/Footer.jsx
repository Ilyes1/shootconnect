import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import x from '../../assets/icons/x.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-links">
                <Link to={'/'} className='footer-logo'>
                    <img src={logo} alt="ShootConnect" />
                </Link>
                <ul className='footer-navlinks'>
                    <li><Link to={'#'}>About Us</Link></li>
                    <li><Link to={'#'}>Terms & Conditions</Link></li>
                    <li><Link to={'#'}>Privacy Policy</Link></li>
                    <li><Link to={'#'}>Contact Us</Link></li>
                </ul>
                <ul className='footer-social'>
                    <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="#"><img src={x} alt="X" /></a></li>
                    <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                </ul>
            </div>

            <div className="footer-copyright">
                &copy; 2023 <Link to={'/'}>ShootConnect</Link>. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer