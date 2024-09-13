import React from 'react'
import { Link } from 'react-router-dom'
import membership from '../../../../assets/images/membership-badge.svg'

const HomeMembership = () => {
  return (
    <div className='membership-card'>
        <div className="membership-left">
            <h3 className='membership-card-title'>Club Memberships</h3>
            <div className="f-height"></div>
            <Link to={'#'} className='membership-renew-link'>Renew membership</Link>
            <Link to={'#'} className='membership-view-link'>View club details</Link>
        </div>
        <img src={membership} className='membership-right-img' alt="Membership" />
    </div>
  )
}

export default HomeMembership