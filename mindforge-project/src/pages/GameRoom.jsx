import React, { useState, useEffect } from 'react';
import './GameRoom.css';

const NUM_ROWS = 8;
const NUM_COLS = 8;
const NUM_CANDY_TYPES = 5;

const GameRoom = () => {
  const [board, setBoard] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedCandy, setSelectedCandy] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeBoard();
  }, []);

  useEffect(() => {
    checkAndRemoveMatches();
  }, [board]);

  const initializeBoard = () => {
    const newBoard = Array.from({ length: NUM_ROWS }, () =>
      Array.from({ length: NUM_COLS }, () => Math.floor(Math.random() * NUM_CANDY_TYPES))
    );
    setBoard(newBoard);
  };

  const swapCandies = (row1, col1, row2, col2) => {
    const newBoard = [...board];
    const temp = newBoard[row1][col1];
    newBoard[row1][col1] = newBoard[row2][col2];
    newBoard[row2][col2] = temp;
    setBoard(newBoard);
  };

  const handleClick = (row, col) => {

    console.log(`Clicked candy at row ${row}, column ${col}`);
    setSelectedTile({ row, col });
    // If no candy is selected yet, set the clicked candy as the selected candy
    if (!selectedCandy) {
      setSelectedCandy({ row, col });
    } else {
      // If a candy is already selected, try to swap with the clicked candy
      const { row: selectedRow, col: selectedCol } = selectedCandy;
  
      // Check if the clicked candy is adjacent to the selected candy
      if (
        (Math.abs(row - selectedRow) === 1 && col === selectedCol) ||
        (Math.abs(col - selectedCol) === 1 && row === selectedRow)
      ) {
        // Swap candies
        swapCandies(selectedRow, selectedCol, row, col);
        setSelectedCandy(null); // Reset selected candy after swapping
      } else {
        // If the clicked candy is not adjacent, set it as the new selected candy
        setSelectedCandy({ row, col });
      }
    }
    setScore(score + 1);
  };
  

  const checkAndRemoveMatches = () => {
    if (board.length === 0) return;
  
    const newBoard = [...board];

    // Check for horizontal matches
    for (let row = 0; row < NUM_ROWS; row++) {
      let currentType = newBoard[row][0];
      let count = 1;
      for (let col = 1; col < NUM_COLS; col++) {
        if (newBoard[row][col] === currentType) {
          count++;
          if (count === 3) {
            for (let i = col - 2; i <= col; i++) {
              newBoard[row][i] = -1; // -1 indicates a matched candy
            }
          }
        } else {
          currentType = newBoard[row][col];
          count = 1;
        }
      }
    }

    // Check for vertical matches
    for (let col = 0; col < NUM_COLS; col++) {
      let currentType = newBoard[0][col];
      let count = 1;
      for (let row = 1; row < NUM_ROWS; row++) {
        if (newBoard[row][col] === currentType) {
          count++;
          if (count === 3) {
            for (let i = row - 2; i <= row; i++) {
              newBoard[i][col] = -1; // -1 indicates a matched candy
            }
          }
        } else {
          currentType = newBoard[row][col];
          count = 1;
        }
      }
    }

    // Remove matched candies
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        if (newBoard[row][col] === -1) {
          newBoard[row][col] = Math.floor(Math.random() * NUM_CANDY_TYPES);
        }
      }
    }

    setBoard(newBoard);
  };

  return (
    <div className="container">
      <h1 className="title">CANDY CRUSH</h1>
    <div>
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => {
            const isSelected = selectedTile && selectedTile.row === rowIndex && selectedTile.col === colIndex;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell candy-${col} ${isSelected ? 'selected' : ''}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              ></div>
            );
          })
        )}
      </div>
      <div className="score">Score: {score}</div>
    </div>
    </div>
  );
  
  
};

export default GameRoom;
