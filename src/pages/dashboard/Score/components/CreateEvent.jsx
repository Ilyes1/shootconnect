import React, { useState } from 'react'
import downArrow from '../../../../assets/icons/dropdown-arrow.png'
import eventTypes from '../../../../assets/arrays/event_types.json'
import users from '../../../../assets/arrays/people.json'
import deleteIcon from '../../../../assets/icons/delete-event.png'
import { useNavigate } from 'react-router-dom'

const CreateEvent = ({ isOpen, closeModal }) => {

  const navigate = useNavigate()

  const clubs = ["Club 1", "Club 2", "Club 3", "Club 4", "Club 5"]

  const [formTabs, setFormTabs] = useState(1)

  const [selectedType, setSelectedType] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  
  const [selectedClub, setSelectedClub] = useState(0)

  const submitForm = (e) => {
    e.preventDefault()
    setFormTabs(2)
  }
  

  const stations = ['Station 1', 'Station 2', 'Station 3', 'Station 4', 'Station 5']
  const [selectedUsers, setSelectedUsers] = useState([])

  const selectUser = (user) => {
    setSelectedUsers(prevUsers => [...prevUsers, {...user, station: 'Station 1'}])
  }

  const removeUser = (user) => {
    setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser.id !== user.id));
  }

  const updateStation = (userIndex, stationIndex) => {
    const newSelectedUsers = [...selectedUsers]
    newSelectedUsers[userIndex].station = stations[stationIndex]
    setSelectedUsers(newSelectedUsers)
  }

  const startEvent = e => {
    e.preventDefault()
    navigate('scoreShoot')
  }

  return (
    <div className={`create-event-container ${isOpen && 'active'}`}>
        <div className="create-event-overlay" onClick={closeModal}></div>
        <div className="create-event-box">
            <h1 className='create-event-title'>New Event</h1>
            {
              formTabs === 1 && (
                <form className="create-event-form" onSubmit={submitForm}>
                    <div className="create-event-field">
                      <label>Name</label>
                      <input type="text" placeholder='Name' className='create-event-input' required />
                    </div>
                    <div className="create-event-field">
                      <label>Discipline</label>
                      <div className="dropdown create-event-dropdown">
                        <button 
                          className='create-event-dropdown-btn'
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          {eventTypes[selectedType].type}
                          <img src={downArrow} alt="Down Arrow" />
                        </button>
                        <ul className="dropdown-menu">
                          {
                            eventTypes.map((event, index) => (
                              <li 
                                key={index} 
                                onClick={() => {
                                  setSelectedType(index)
                                  setSelectedVariant(0)
                                }}
                              >{event.type}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="create-event-field">
                      <label>Variant</label>
                      <div className="dropdown create-event-dropdown">
                        <button 
                          className='create-event-dropdown-btn'
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          {eventTypes[selectedType].variants[selectedVariant]}
                          <img src={downArrow} alt="Down Arrow" />
                        </button>
                        <ul className="dropdown-menu">
                          {
                            eventTypes[selectedType].variants.map((variant, index) => (
                              <li key={index} onClick={() => setSelectedVariant(index)}>{variant}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="create-event-field">
                      <label>Club</label>
                      <div className="dropdown create-event-dropdown">
                        <button 
                          className='create-event-dropdown-btn'
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          {clubs[selectedClub]}
                          <img src={downArrow} alt="Down Arrow" />
                        </button>
                        <ul className="dropdown-menu">
                          {
                            clubs.map((club, index) => (
                              <li 
                                key={index} 
                                onClick={() => {
                                  setSelectedClub(index)
                                }}
                              >{club}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="create-event-btns">
                      <button type="button" className='create-event-btn-cancel' onClick={closeModal}>Cancel</button>
                      <button type="submit" className='create-event-btn-confirm'>Next</button>
                    </div>
                </form>
              )
            }

            {
              formTabs === 2 && (
                <form className="create-event-form" onSubmit={startEvent}>
                    <div className="create-event-field">
                      <label>Users</label>
                      <div className="dropdown create-event-dropdown">
                        <button 
                          className='create-event-dropdown-btn'
                          data-bs-toggle="dropdown" 
                          aria-expanded="false"
                        >
                          Select Users
                          <img src={downArrow} alt="Down Arrow" />
                        </button>
                        <ul className="dropdown-menu">
                          {
                            users
                            .filter((user) => !selectedUsers.some((selectedUser) => selectedUser.id === user.id))
                            .map((user, index) => (
                              <li 
                                key={index}
                                onClick={() => selectUser(user)}
                              >{user.name}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      {
                        selectedUsers.map((user, i) => (
                          <div className="col-lg-6" key={user.id}>
                            <div className="selected-user-card">
                              <div className="selected-user-card-heading">
                                <h6>{user.name}</h6>
                                <button onClick={() => removeUser(user)}>
                                  <img src={deleteIcon} alt="Delete" />
                                </button>
                              </div>
                              <div className="dropdown create-event-dropdown selected-user-dropdown">
                                <button 
                                  className='create-event-dropdown-btn selected-user-dropdown-btn'
                                  data-bs-toggle="dropdown" 
                                  aria-expanded="false"
                                >
                                  {user.station}
                                  <img src={downArrow} alt="Down Arrow" />
                                </button>
                                <ul className="dropdown-menu">
                                  {
                                    stations.map((station, index) => (
                                      <li 
                                        key={index}
                                        onClick={() => updateStation(i, index)}
                                      >{station}</li>
                                    ))
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="create-event-btns">
                      <button type="button" className='create-event-btn-cancel' onClick={closeModal}>Cancel</button>
                      <button type="submit" className='create-event-btn-confirm'>Start</button>
                    </div>
                </form>
              )
            }
        </div>
    </div>
  )
}

export default CreateEvent