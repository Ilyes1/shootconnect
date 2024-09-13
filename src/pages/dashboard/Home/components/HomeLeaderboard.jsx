import React, { useEffect, useRef } from 'react'
import user1 from '../../../../assets/images/leaderboard-user1.jpg'
import user2 from '../../../../assets/images/leaderboard-user2.jpg'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'


const HomeLeaderboard = () => {


    const data = () =>  {
        return {

            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Sales',
                data: [1.8, 2.3, 2.1, 3.5, 3.4, 4.8, 4, 3, 3.5, 3, 2.8, 4.3],
                fill: true,
                borderColor: '#FF6A00',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "#ff6a0087");
                    gradient.addColorStop(.5, "#ff6a0000");
                    return gradient;
                },
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 0, 
              },
              {
                label: 'Sales',
                data: [5, 1.7, 2, 2.7, 2, 2.3, 2.5, 2.1, 1.2, 1, 1.8, 1],
                fill: true,
                borderColor: '#148820',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "#14882092");
                    gradient.addColorStop(.5, "#14882000");
                    return gradient;
                },
                borderWidth: 2,
                tension: .4,
                pointRadius: 0,
                pointHoverRadius: 0, 
              },
            ],
        }
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true, 
                },
                ticks: {
                    precision:0
                  }
            },
          },
      };

    
  return (
    <div className='dashboard-card h-100'>
        <div className="dashboard-card-top">
            <h3>Leaderboard</h3>
            <div className="leaderboard-top-right">
                <div className="leaderboard-top-user">
                    <img src={user1} alt="User" />
                    <h6>Frank C. Kelley</h6>
                </div>
                <div className="leaderboard-top-user">
                    <img src={user2} alt="User" />
                    <h6>Murray P. Hall</h6>
                </div>
            </div>
        </div>
        <h6 className='leaderboard-top-description'>Lorem ipsum</h6>

        <Line data={data()} options={options} />
    </div>
  )
}

export default HomeLeaderboard