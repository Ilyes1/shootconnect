import React from 'react'
import { Slider } from 'rsuite';
import 'rsuite/Slider/styles/index.css';

const GoalsAndProgress = () => {
  return (
    <div className='dashboard-card'>
        <div className="dashboard-card-top">
            <h3>Goals & Progress</h3>
        </div>
        <div className="goals-slider">
            <Slider
                progress
                defaultValue={45}
            />
        </div>

        <h5 className="goals-description">
            <strong>Lorem Ipsum</strong> <span>10%</span> is simply dummy text of the printing and typesetting industry.
        </h5>
    </div>
  )
}

export default GoalsAndProgress