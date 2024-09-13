import React from 'react'
import './HelpWidget.css'
import help from '../../assets/images/sidebar-help.png'
import helpIcon from '../../assets/icons/sidebar-help.svg'
import { Link } from 'react-router-dom'

const HelpWidget = ({ opened }) => {
  return (
    <div className={`sidebar-help ${opened && 'active'}`}>
        <div className="sidebar-help-container">
            <img src={help} className='sidebar-help-img' alt="Help" />
            <Link to={'/help'} className='sidebar-help-link'>
                <img src={helpIcon} alt="Help" />
                Help
            </Link>
        </div>
    </div>
  )
}

export default HelpWidget