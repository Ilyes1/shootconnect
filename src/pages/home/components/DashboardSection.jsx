import React from 'react'
import dashboard from '../../../assets/images/dashboard.svg'
import rightCircle from '../../../assets/images/right-circle.svg'
import middleCircle from '../../../assets/images/dashboard-circle.svg'
import leftCircle from '../../../assets/images/dashboard-left-circle.svg'

const DashboardSection = () => {
  return (
    <section className="dashboard-section">

        <img src={rightCircle} alt="circle" className='dashboard-right-circle' />
        <img src={middleCircle} alt="circle" className='dashboard-middle-circle' />
        <img src={leftCircle} alt="circle" className='dashboard-left-circle' />

        <div className="container dashboard-content">
            <h1 className='section-headline-dark'>Your Dashboard</h1>
            <h6 className='section-sub-headline-dark'>Get a comprehensive view of your shooting stats, recent activities, and more.</h6>

            <div className="row">
              <div className="col-lg-8 mx-auto">
                <img src={dashboard} alt="Dashboard" className='dashboard-preview' />
              </div>
            </div>
        </div>
    </section>
  )
}

export default DashboardSection