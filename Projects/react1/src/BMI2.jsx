import React, { useState } from 'react';

const Interface = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  const renderScaleWithMarkers = (value) => {
    const scaleLength = 100; // Length of the scale in pixels
    const markerCount = 10; // Number of marker points
    const markerDistance = scaleLength / (markerCount - 1); // Distance between each marker

    return (
      <div className="scale">
        {Array.from({ length: markerCount }).map((_, index) => {
          const markerValue = index * (100 / (markerCount - 1));
          const markerColor = markerValue <= value ? 'green' : 'white';
          return (
            <div
              key={index}
              className="marker"
              style={{ left: `${markerValue}%`, backgroundColor: markerColor }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <label>
        Input Value:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      {renderScaleWithMarkers(inputValue)}
    </div>
  );
};

export default Interface;
