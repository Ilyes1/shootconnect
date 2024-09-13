import React from 'react'

const HomePerformance = () => {
  return (
    <div className='dashboard-card'>
        <div className="dashboard-card-top">
            <h3>Performance Overview</h3>
        </div>

        <div className="performance-container">
            <div className="performance-block">
                <h5 className="performance-block-title">Lorem</h5>
                <div className="performance-block-items">
                    <div className="performance-block-item orange-block">
                        <div className="block-value">50</div>
                        <div className="block-bar" style={{ height: '100px' }}></div>
                        <h6 className='block-label'>Performance</h6>
                    </div>
                    <div className="performance-block-item brown-block">
                        <div className="block-value">15 Min</div>
                        <div className="block-bar" style={{ height: '70px' }}></div>
                        <h6 className='block-label'>Time</h6>
                    </div>
                </div>
            </div>

            <div className="performance-divider"></div>

            <div className="performance-block">
                <h5 className="performance-block-title">Lorem</h5>
                <div className="performance-block-items">
                    <div className="performance-block-item green-block">
                        <div className="block-value">25</div>
                        <div className="block-bar" style={{ height: '70px' }}></div>
                        <h6 className='block-label'>Performance</h6>
                    </div>
                    <div className="performance-block-item brown-block">
                        <div className="block-value">10 Min</div>
                        <div className="block-bar" style={{ height: '30px' }}></div>
                        <h6 className='block-label'>Time</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePerformance