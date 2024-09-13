import React from 'react'
import user from '../../../../assets/images/friends-user.jpg'
import vector from '../../../../assets/images/friends-vector.svg'
import { Link } from 'react-router-dom'

const HomeFriends = () => {
  return (
    <div className='friends-card'>
        <div className="friends-content">
            <h3 className="friends-title">Friends & Social</h3>
            <div className="friends-info">
                <img src={user} alt="User" className='friends-info-img' />
                <div className="friends-info-text">
                    <h6>Frank C. Kelley</h6>
                    <h5>1000 Points</h5>
                    <Link to={'#'} className='friends-info-link'>Join club</Link>
                </div>
            </div>
        </div>
        <img src={vector} alt="Friends & Social" className='friends-right-img' />
    </div>
  )
}

export default HomeFriends