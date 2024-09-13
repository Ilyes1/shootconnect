import React from 'react'
import goalBg from '../../../../assets/images/goal-bg.svg'
import achievementsBg from '../../../../assets/images/achievements-bg.svg'

const HomeAchievements = () => {
  return (
    <div className='dashboard-card'>
        <div className="dashboard-card-top">
            <h3>Achievements</h3>
            <div className="achievements-legend">
                <div className="achievements-legend-item">
                    <div className="achievements-legend-color orange"></div>Achievements
                </div>
                <div className="achievements-legend-item">
                    <div className="achievements-legend-color green"></div>Goal
                </div>
            </div>
        </div>

        <div className="achievements-container">
            <div className="achievements-item">
                <div className="achievements-background">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="achievements-content orange">
                    <div className="achievements-tooltip">
                        <h5>1000</h5>
                        <h6>Points</h6>
                    </div>
                    <div className="achievements-line" style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="achievements-item">
                <div className="achievements-background">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="achievements-content green">
                    <div className="achievements-tooltip">
                        <h5>1200</h5>
                        <h6>Points</h6>
                    </div>
                    <div className="achievements-line" style={{ height: '45px' }}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAchievements