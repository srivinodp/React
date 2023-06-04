import React, { useState } from 'react';

const BmiInterface = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) ** 2);
    return bmi.toFixed(2);
  };

  const getBackgroundColor = (value, min, max) => {
    const percentage = (value - min) / (max - min);
    const hue = (120 * percentage).toFixed(0); // Ranges from 0 to 120 (green to red)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const heightScaleColor = getBackgroundColor(height, 100, 220); // Example range: 100cm to 220cm
  const weightScaleColor = getBackgroundColor(weight, 30, 150); // Example range: 30kg to 150kg
  const bmiScaleColor = getBackgroundColor(calculateBMI(), 10, 40); // Example range: BMI 10 to 40

  return (
    <div>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <div style={{ backgroundColor: heightScaleColor }}>Height Scale</div>
      <div style={{ backgroundColor: weightScaleColor }}>Weight Scale</div>
      <div style={{ backgroundColor: bmiScaleColor }}>BMI Scale</div>
    </div>
  );
};

export default BmiInterface;
