import React, { useState } from 'react'
import './DashboardScore.css'
import { Link } from 'react-router-dom'
import plus from '../../../assets/icons/headline-plus.png'
import CreateEvent from './components/CreateEvent'
import EditEvent from './components/EditEvent'
import EventCard from './components/EventCard'
import EditShooters from './components/EditShooters'

const DashboardScore = () => {

    const [createModalOpen, setCreateModalOpen] = useState(false)
    const closeCreateModal = () => setCreateModalOpen(false)

    const [editEventModalOpen, setEditEventModalOpen] = useState(false)
    const closeEditEventModal = () => setEditEventModalOpen(false)
    const openEditEventModal = () => setEditEventModalOpen(true)

    const [editShootersModalOpen, setEditShootersModalOpen] = useState(false)
    const closeEditShootersModal = () => setEditShootersModalOpen(false)
    const openEditShootersModal = () => setEditShootersModalOpen(true)

  return (
    <div className='dashboard-component'>

        <div className="dashboard-component-headline">
            <h1 className="dashboard-component-headline-title">Events</h1>
            <Link 
                to={'#'} 
                className="dashboard-component-headline-btn"
                onClick={() => setCreateModalOpen(true)}
            >
                <img src={plus} alt="Plus" />
                Create Event
            </Link>
        </div>

        <div className="row">
            <div className="col-lg-4 col-md-6 dashboard-card-container">
                <EventCard name="Example Event" date="2024-09-23" club="Club 1" openEditEventModal={openEditEventModal} openEditShootersModal={openEditShootersModal} />
            </div>    
            <div className="col-lg-4 col-md-6 dashboard-card-container">
                <EventCard name="Example Event" date="2024-09-23" club="Club 2" openEditEventModal={openEditEventModal} openEditShootersModal={openEditShootersModal} />
            </div>    
        </div> 

        <CreateEvent isOpen={createModalOpen} closeModal={closeCreateModal} />
        <EditEvent isOpen={editEventModalOpen} closeModal={closeEditEventModal} />
        <EditShooters isOpen={editShootersModalOpen} closeModal={closeEditShootersModal} />

    </div>
  )
}

export default DashboardScore