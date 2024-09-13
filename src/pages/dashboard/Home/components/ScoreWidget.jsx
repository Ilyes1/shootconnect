import React, { useEffect, useState } from 'react';

const ScoreWidget = () => {
  const numbers = {
    'Month': { number: 5830, percentage: 70 },
    'Year': { number: 37293, percentage: 30 }
  };

  const [toggle, setToggle] = useState('Month');
  const [animatedPercentage, setAnimatedPercentage] = useState(numbers[toggle].percentage);

  useEffect(() => {
    const targetPercentage = numbers[toggle].percentage;
    let start = animatedPercentage;
    const duration = 100; // 0.5 seconds
    const stepTime = 2; // Time between updates in ms
    const steps = duration / stepTime;
    const increment = (targetPercentage - start) / steps;

    const animate = () => {
      start += increment;
      if ((increment > 0 && start < targetPercentage) || (increment < 0 && start > targetPercentage)) {
        setAnimatedPercentage(Math.round(start));
        setTimeout(animate, stepTime);
      } else {
        setAnimatedPercentage(targetPercentage);
      }
    };

    animate();
  }, [toggle]);

  return (
    <div className='dashboard-card score-card h-100'>
      <h3 className='score-widget-title'>Best Score</h3>

      <div className="home-widget-right score-value">
        <div className="home-widget-progress score-progress">
          <div
            className="home-widget-progress-bar"
            style={{
              backgroundImage: `conic-gradient(${animatedPercentage >= 50 ? '#148820' : '#FF6A00'} 0%, ${animatedPercentage >= 50 ? '#148820' : '#FF6A00'} ${animatedPercentage}%, #F0EFEF ${animatedPercentage}%, #F0EFEF 100%)`,
              transition: 'background-image 0.5s' // Ensure smooth transition
            }}
          ></div>
          <div className="home-widget-progress-text">
            <div className="score-text">
              <h3>{numbers[toggle].number}</h3>
              <h6>{toggle}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-toggle-container">
        <div className="dashboard-toggle">
          <button className={toggle === 'Month' ? 'active' : ''} onClick={() => setToggle('Month')}>Month</button>
          <div className="dashboard-toggle-divider"></div>
          <button className={toggle === 'Year' ? 'active' : ''} onClick={() => setToggle('Year')}>Year</button>
        </div>
      </div>
    </div>
  );
};

export default ScoreWidget;
