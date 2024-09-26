import React, { useState } from 'react'
import downArrow from '../../../../assets/icons/dropdown-arrow.png'
import eventTypes from '../../../../assets/arrays/event_types.json'

const EditEvent = ({ isOpen, closeModal }) => {

  const clubs = ["Club 1", "Club 2", "Club 3", "Club 4", "Club 5"]

  const [selectedType, setSelectedType] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)

  const [selectedClub, setSelectedClub] = useState(0)

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className={`create-event-container ${isOpen && 'active'}`}>
        <div className="create-event-overlay" onClick={closeModal}></div>
        <div className="create-event-box">
            <h1 className='create-event-title'>Example Event</h1>
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
                    <button type="submit" className='create-event-btn-confirm'>Save</button>
                  </div>
              </form>
        </div>
    </div>
  )
}

export default EditEvent