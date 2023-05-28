import React, {useState} from "react";
import ProgressBar from "./ProgressBar";
const ProgressBarHandler = () => {
    const [progressPercentage, setProgressPercentage] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setProgressPercentage(parsedValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a percentage"
        />
        <button type="submit">Set Progress</button>
      </form>
      <ProgressBar percentage={progressPercentage} />
    </div>
  );

}
export default ProgressBarHandler;