import React from 'react'
import './DashboardHeader.css'
import search from '../../assets/icons/dashboard-header-search.svg'
import settings from '../../assets/icons/dashboard-header-settings.svg'
import notification from '../../assets/icons/dashboard-header-notification.svg'
import profile from '../../assets/images/dashboard-header-profile.jpg'
import { Link } from 'react-router-dom'

const DashboardHeader = ({ toggleSidebar, opened }) => {

  return (
    <div className='dashboard-header'>
        <div className="dashboard-header-left">
            <h2>Good Morning, <span>Dianne</span></h2>
        </div>
        <div className="dashboard-header-right">
            <div className="dashboard-header-search">
                <div className="dashboard-header-search-icon">
                    <img src={search} alt="Search" />
                </div>
                <input type="text" placeholder='Type here...' />
            </div>
            <Link to={'#'} className="dashboard-header-icon">
                <img src={settings} alt="Settings" />
            </Link>
            <Link to={'#'} className="dashboard-header-icon">
                <img src={notification} alt="Notifications" />
            </Link>
            <Link to={'#'} className="dashboard-header-profile">
                <img src={profile} alt="Profile" />
            </Link>
            <div 
                className={`sidebar-toggler ${opened && 'active'}`}
                onClick={toggleSidebar}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader