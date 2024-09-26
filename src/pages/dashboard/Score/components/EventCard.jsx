import React from 'react'
import { Link } from 'react-router-dom'
import editIcon from '../../../../assets/icons/edit-event.png'
import deleteIcon from '../../../../assets/icons/delete-event.png'
import scoreIcon from '../../../../assets/icons/score-shoot.png'
import editShootersIcon from '../../../../assets/icons/edit-shooters.png'

const EventCard = ({ name, date, club, openEditEventModal, openEditShootersModal }) => {
  return (
    <div className='dashboard-card event-card'>
        <div className="event-card-left">
            <h6 className='event-date'>{date}</h6>
            <h2 className='event-name'>{name}</h2>
            <h4 className='event-club'>{club}</h4>
        </div>
        <div className="event-card-buttons">
            <Link to={'#'} className="edit-event-btn" onClick={openEditEventModal}>
                <img src={editIcon} alt="Edit" />
                Edit Event
            </Link>
            <Link to={'#'} className="edit-shooters-btn" onClick={openEditShootersModal}>
                <img src={editShootersIcon} alt="Edit" />
                Edit Shooters
            </Link>
            <Link to={'#'} className="delete-event-btn">
                <img src={deleteIcon} alt="Delete" />
                Delete
            </Link>
            <Link to={'scoreShoot'} className="score-shoot-btn">
                <img src={scoreIcon} alt="Schore Shoot" />
                Score Shoot
            </Link>
        </div>
    </div>
  )
}

export default EventCard