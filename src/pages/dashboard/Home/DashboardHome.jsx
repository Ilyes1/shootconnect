import React from 'react'
import './DashboardHome.css'
import HomeWidget from './components/HomeWidget'
import VisiterTable from './components/VisiterTable'
import ScoreWidget from './components/ScoreWidget'
import UpcomingEvents from './components/UpcomingEvents'
import HomeLeaderboard from './components/HomeLeaderboard'
import HomePerformance from './components/HomePerformance'
import HomeActivities from './components/HomeActivities'
import GoalsAndProgress from './components/GoalsAndProgress'
import HomeAchievements from './components/HomeAchievements'
import EquipmentAndGear from './components/EquipmentAndGear'
import HomeFriends from './components/HomeFriends'
import HomeMembership from './components/HomeMembership'

const DashboardHome = () => {
  return (
    <div className="dashboard-component">
      <div className='row'>
          <div className="col-xl-6 m-cards">
            <div className="row">
              <div className="col-xl-6 col-md-4 dashboard-card-container">
                <HomeWidget time={'This week'} percentage={55} number={557} />
              </div>
              <div className="col-xl-6 col-md-4 dashboard-card-container">
                <HomeWidget time={'Month'} percentage={30} number={15000} />
              </div>
              <div className="col-md-4 d-xl-none dashboard-card-container">
                <HomeWidget time={'Year'} percentage={80} number={245830} />
              </div>
            </div>
            <div className="row f-height">
              <div className="col-12 dashboard-card-container">
                <VisiterTable />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-6 m-cards px-0">
                <div className="dashboard-card-container d-none d-xl-block">
                  <HomeWidget time={'Year'} percentage={80} number={245830} />
                </div>
                <div className="dashboard-card-container f-height">
                  <ScoreWidget />
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="dashboard-card-container">
                  <UpcomingEvents />
                </div>
                <div className="dashboard-card-container">
                  <HomePerformance />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 dashboard-card-container">
            <HomeLeaderboard />
          </div>
          <div className="col-lg-6 dashboard-card-container">
            <HomeActivities />
          </div>
          <div className="col-lg-6 px-0">
            <div className="dashboard-card-container">
              <GoalsAndProgress />
            </div>
            <div className="dashboard-card-container">
              <HomeAchievements />
            </div>
          </div>
          <div className="col-lg-6 m-cards px-0">
            <div className="dashboard-card-container f-height">
              <EquipmentAndGear />
            </div>
              <div className="bottom-cards">
                <div className="dashboard-card-container">
                  <HomeFriends />
                </div>
                <div className="dashboard-card-container">
                  <HomeMembership />
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardHome