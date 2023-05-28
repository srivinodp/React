import React, { useState } from 'react';

function Sudoku() {
  const [grid, setGrid] = useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ]);

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <input
            type="number"
            min="1"
            max="9"
            value={cell === 0 ? '' : cell}
            readOnly={grid[rowIndex][colIndex] !== 0}
            className={grid[rowIndex][colIndex] !== 0 ? 'original' : ''}
            onChange={(e) =>
              handleCellChange(rowIndex, colIndex, parseInt(e.target.value) || 0)
            }
            key={colIndex}
          />
        ))}
      </div>
    ));
  };
  

  return (
    <div className="App">
      <h1>Sudoku Game</h1>
      <div className="grid">{renderGrid()}</div>
    </div>
  );
}

export default Sudoku;
