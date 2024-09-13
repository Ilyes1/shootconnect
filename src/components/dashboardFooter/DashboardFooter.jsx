import React from 'react'
import './DashboardFooter.css'
import { Link } from 'react-router-dom'

const DashboardFooter = () => {
  return (
    <footer className='dashboard-footer'>
        <ul className="dashboard-footer-left">
            <li><Link to={'#'} className='dashboard-footer-link'>About us</Link></li>
            <li><Link to={'#'} className='dashboard-footer-link'>Terms & Condition</Link></li>
            <li><Link to={'#'} className='dashboard-footer-link'>Shooting Guide</Link></li>
            <li><Link to={'#'} className='dashboard-footer-link'>Contact us</Link></li>
        </ul>
        <h6 className="dashboard-footer-right">
            &copy;2024 ShootConnect. All right reserved.
        </h6>
    </footer>
  )
}

export default DashboardFooter