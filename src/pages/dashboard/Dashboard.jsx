import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HelpWidget from '../../components/helpWidget/HelpWidget'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardHome from './Home/DashboardHome'
import DashboardScore from './Score/DashboardScore'
import DashboardFooter from '../../components/dashboardFooter/DashboardFooter'
import ScoreShoot from './Score/ScoreShoot'

const Dashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className='dashboard-page'>

        <Sidebar toggleSidebar={toggleSidebar} opened={sidebarOpen} />

        <div className="dashboard-page-content">

            <DashboardHeader toggleSidebar={toggleSidebar} opened={sidebarOpen} />

            <Routes>
                <Route path='home' element={<DashboardHome />} />
                <Route path='score' element={<DashboardScore />} />
                <Route path='score/scoreShoot' element={<ScoreShoot />} />
            </Routes>

            <DashboardFooter />
            
        </div>

        <HelpWidget opened={sidebarOpen} />

    </div>
  )
}

export default Dashboard