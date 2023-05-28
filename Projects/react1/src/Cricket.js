import React, { useState } from 'react';

function Cricket() {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(Math.floor(Math.random() * 6) + 1);
  const [message, setMessage] = useState('');

  const handleScoreGuess = (guess) => {
    const runs = Math.floor(Math.random() * 6) + 1;
    setScore(score + runs);

    if (guess === runs) {
      setMessage('You guessed it right! You scored ' + runs + ' runs.');
    } else {
      setMessage('You guessed it wrong! You scored ' + runs + ' runs.');
    }

    setTarget(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="App">
      <h1>Cricket Game</h1>
      <p>Target: {target}</p>
      <p>Score: {score}</p>
      <p>{message}</p>
      <button onClick={() => handleScoreGuess(1)}>1</button>
      <button onClick={() => handleScoreGuess(2)}>2</button>
      <button onClick={() => handleScoreGuess(3)}>3</button>
      <button onClick={() => handleScoreGuess(4)}>4</button>
      <button onClick={() => handleScoreGuess(5)}>5</button>
      <button onClick={() => handleScoreGuess(6)}>6</button>
    </div>
  );
}

export default Cricket;
