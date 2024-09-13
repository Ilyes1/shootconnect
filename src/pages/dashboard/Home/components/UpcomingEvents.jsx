import React, { useState } from 'react'
import dots from '../../../../assets/icons/event-dots.svg'
import countdown from '../../../../assets/icons/event-countdown.svg'
import edit from '../../../../assets/icons/event-edit.svg'
import user1 from '../../../../assets/images/event-user1.jpg'
import user2 from '../../../../assets/images/event-user2.jpg'
import Countdown from 'react-countdown'


const padWithZero = (number) => (number < 10 ? `0${number}` : number);

const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <h5 className="event-countdown" >
        {padWithZero(hours)}:{padWithZero(minutes)}:{padWithZero(seconds)}
      </h5>
    );
  };

const UpcomingEvents = () => {

    const [toggle, setToggle] = useState("Week")
    const [selected, setSelected] = useState(3)

    const data = {
        "Week": [
            { number: '08', text: 'M' },
            { number: '09', text: 'T' },
            { number: '10', text: 'W' },
            { number: '11', text: 'T' },
            { number: '12', text: 'F' },
            { number: '13', text: 'S' },
            { number: '14', text: 'S' }
        ],
        "Day": [
            { number: '08', text: 'AM' },
            { number: '09', text: 'AM' },
            { number: '10', text: 'AM' },
            { number: '11', text: 'AM' },
            { number: '12', text: 'AM' },
            { number: '01', text: 'PM' },
            { number: '02', text: 'PM' }
        ]
    }

  return (
    <div className='dashboard-card'>
        <div className="dashboard-card-top">
            <h3>Upcoming Events</h3>
            <div className="dashboard-toggle">
                <button className={toggle === 'Week' && 'active'} onClick={() => setToggle('Week')}>Week</button>
                <div className="dashboard-toggle-divider"></div>
                <button className={toggle === 'Day' && 'active'} onClick={() => setToggle('Day')}>Day</button>
            </div>
        </div>

        <div className="events-calendar">
            {
                data[toggle].map((item, i) => (
                    <div 
                        className={`events-calendar-item ${i === selected && 'active'}`} 
                        key={i}
                        onClick={() => setSelected(i)}
                    >
                        <h5>{item.number}</h5>
                        <h6>{item.text}</h6>
                    </div>
                ))
            }
        </div>

        <div className="event-container">
            <div className="event-container-left">
                <h5>7:30 pm</h5>
                <h6>Aug <span>11th</span></h6>
            </div>
            <div className="event-container-right">
                <div className="event-card-top">
                    <div className="event-card-top-left">
                        <h5>Lorem ipsum</h5>
                        <h6>7:30 pm - 9:00 pm</h6>
                    </div>
                    <div className="event-card-top-right">
                        <button className='event-options-btn'>
                            <img src={dots} alt="Dots" />
                        </button>
                    </div>
                </div>

                <div className="event-users">
                    <img src={user1} className='event-user-img' alt="User 1" />
                    <img src={user2} className='event-user-img' alt="User 2" />
                    <div className="event-users-remaining">13</div>
                    <h6 className='event-users-going'>15 Going</h6>
                </div>
            </div>

        </div>

        <div className="event-countdown-container">
            <div className="event-countdown-top">
                <div className="event-countdown-top-left">
                    <img src={countdown} alt="Countdown" />
                    <h6>Next event</h6>
                </div>
                <button className="event-countdown-top-right">
                    <img src={edit} alt="Edit" />
                </button>
            </div>

            <Countdown 
                date={Date.now() + 18 * 60 * 60 * 1000} 
                renderer={renderer}
            />
        </div>
    </div>
  )
}

export default UpcomingEvents