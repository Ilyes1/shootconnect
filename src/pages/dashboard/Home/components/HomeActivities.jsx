import React from 'react'
import location from '../../../../assets/icons/location.svg'

const HomeActivities = () => {

    const activitiesData = [
        {
            name: 'Justin Lipshutz',
            joiningClub: '25/09/2023',
            location: 'Lorem',
            date: '03/09/2024',
            score: 7
        },
        {
            name: 'Marcus Culhane',
            joiningClub: '25/09/2023',
            location: 'Lorem',
            date: '03/09/2024',
            score: 5
        },
        {
            name: 'Leo Stanton',
            joiningClub: '25/09/2023',
            location: 'Lorem',
            date: '03/09/2024',
            score: 8
        },
        {
            name: 'Justin Lipshutz',
            joiningClub: '25/09/2023',
            location: 'Lorem',
            date: '03/09/2024',
            score: 4
        },
        {
            name: 'Marcus Culhane',
            joiningClub: '25/09/2023',
            location: 'Lorem',
            date: '03/09/2024',
            score: 5
        },
    ]

  return (
    <div className='dashboard-card h-100'>
        <div className="visiter-table-top">
            <h3>Recent Activities</h3>
        </div>

        <div className="table-container">
          <table className='dashboard-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Joining Club</th>
                <th>Location</th>
                <th>Date</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {
                activitiesData.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <p className="table-text">{item.name}</p>
                    </td>
                    <td>
                      <p className="table-text">{item.joiningClub}</p>
                    </td>
                    <td>
                        <div className="activity-location">
                            <img src={location} alt="Location" />
                            <p className="table-text">{item.location}</p>
                        </div>
                    </td>
                    <td>
                      <p className="table-text">{item.date}</p>
                    </td>
                    <td>
                      <h5 className='activity-score'>{item.score < 10 ? `0${item.score}` : item.score}</h5>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default HomeActivities