import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import home from '../../assets/icons/sidebar-home.svg'
import clubs from '../../assets/icons/sidebar-clubs.svg'
import score from '../../assets/icons/sidebar-score.svg'
import recent from '../../assets/icons/sidebar-recent.svg'
import achievements from '../../assets/icons/sidebar-achievements.svg'
import download from '../../assets/icons/sidebar-download.svg'
import setting from '../../assets/icons/sidebar-setting.svg'

const Sidebar = ({ toggleSidebar, opened }) => {

    const sidebarItems = [
        { title: 'Home', icon: home, path: 'home' },
        { title: 'Clubs', icon: clubs, path: 'clubs' },
        { title: 'Score', icon: score, path: 'score' },
        { title: 'Recent Clubs Visited', icon: recent, path: 'recentClubsVisited' },
        { title: 'Achievements', icon: achievements, path: 'achievements' },
        { title: 'Download', icon: download, path: 'download' },
        { title: 'Setting', icon: setting, path: 'setting' }
    ]

  return (
    <>
        <div className={`sidebar-container ${opened && 'active'}`}>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="sidebar-divider"></div>
                <ul className='sidebar-links'>
                    {
                        sidebarItems.map((item, i) => (
                            <li key={i}>
                                <NavLink to={item.path} activeClassName='active'>
                                    <div className="sidebar-link-icon">
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
        <div className={`sidebar-overlay ${opened && 'active'}`} onClick={toggleSidebar}></div>
    </>
  )
}

export default Sidebar