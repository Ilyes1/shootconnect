import React, { useEffect, useState } from 'react';

const HomeWidget = ({ time, percentage, number }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const progressColor = animatedPercentage >= 50 ? '#148820' : '#FF6A00';

  useEffect(() => {
    let start = 0;
    const duration = 100;
    const stepTime = duration / percentage;

    const animate = () => {
      start += .7;
      if (start <= percentage) {
        setAnimatedPercentage(start);
        setTimeout(animate, stepTime);
      }
    };

    animate();
  }, [percentage]);

  return (
    <div className='dashboard-card home-widget'>
      <div className="home-widget-left">
        <h5>Clubs Visited</h5>
        <h6>{time}</h6>
        <h3>{number}</h3>
      </div>
      <div className="home-widget-right">
        <div className="home-widget-progress">
          <div 
            className="home-widget-progress-bar"
            style={{ 
              backgroundImage: `conic-gradient(${progressColor} 0%, ${progressColor} ${animatedPercentage}%, transparent ${animatedPercentage}%, transparent 100%)`
            }}
          ></div>
          <div className="home-widget-progress-text">+{animatedPercentage.toFixed(0)}%</div>
        </div>
      </div>
    </div>
  );
};

export default HomeWidget;
