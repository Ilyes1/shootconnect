import React from 'react'
import { Link } from 'react-router-dom'
import employee1 from '../../../../assets/images/employee1.png'
import employee2 from '../../../../assets/images/employee2.png'
import employee3 from '../../../../assets/images/employee3.png'

const VisiterTable = () => {

  const statusColors = {
    "Permanent": "#148820",
    "Contract": "#5C5C5C"
  }

  const employees = [
    {
      image: employee1,
      name: "Justin Lipshutz",
      lorem: "Lorem",
      age: 24,
      discipline: 100,
      status: "Permanent"
    },
    {
      image: employee2,
      name: "Marcus Culhane",
      lorem: "Lorem",
      age: 22,
      discipline: 95,
      status: "Contract"
    },
    {
      image: employee3,
      name: "Leo Stanton",
      lorem: "Lorem",
      age: 24,
      discipline: 89,
      status: "Permanent"
    },
    {
      image: employee1,
      name: "Justin Lipshutz",
      lorem: "Lorem",
      age: 22,
      discipline: 100,
      status: "Contract"
    },
    {
      image: employee3,
      name: "Leo Stanton",
      lorem: "Lorem",
      age: 24,
      discipline: 89,
      status: "Permanent"
    },
    {
      image: employee2,
      name: "Marcus Culhane",
      lorem: "Lorem",
      age: 22,
      discipline: 95,
      status: "Contract"
    },
    {
      image: employee2,
      name: "Justin Lipshutz",
      lorem: "Lorem",
      age: 22,
      discipline: 90,
      status: "Permanent"
    }
  ]

  return (
    <div className='dashboard-card h-100'>
        <div className="visiter-table-top">
            <h3>Visiter</h3>
            <Link to={'#'} className='visiter-table-top-button'>View All</Link>
        </div>

        <div className="table-container">
          <table className='dashboard-table'>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Lorem</th>
                <th>Age</th>
                <th>Disipline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="table-employee">
                        <img src={item.image} alt={item.name} />
                        <p className='table-text'>{item.name}</p>
                      </div>
                    </td>
                    <td>
                      <p className="table-text">{item.lorem}</p>
                    </td>
                    <td>
                      <p className="table-text">{item.age}</p>
                    </td>
                    <td>
                      <p className="table-text"><span className='table-plus-sign'>+</span>{item.discipline}</p>
                    </td>
                    <td>
                      <p className="table-text" style={{ color: statusColors[item.status] }}>{item.status}</p>
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

export default VisiterTable