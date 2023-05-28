import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage}) => {
    const color = `rgb(${percentage}, ${255 - percentage}, 100)`;
    const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
    height: '100%',
    transition: 'width 0.3s ease-in-out',
  };
  

  return (
    <div className="progress-bar">
      <div className="progress" style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
