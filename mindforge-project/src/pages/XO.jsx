import React, { useState } from "react"; // Import React and useState hook
import { Board } from "./Board.jsx"; // Import Board component
import { ResetButton } from "./ResetButton.jsx"; // Import ResetButton component
import { ScoreBoard } from "./ScoreBoard.jsx"; // Import ScoreBoard component
import './XO.css'; // Import CSS file for styling

// XO component
const XO = () => {
  // Define win conditions for the game
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // State variables
  const [xPlaying, setXPlaying] = useState(true); // Track if X is currently playing
  const [board, setBoard] = useState(Array(9).fill(null)) // Game board state
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 }) // Scores state for X and O
  const [gameOver, setGameOver] = useState(false); // Track if the game is over

  // Function to handle box click
  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }

    // Step 3: Change active player
    setXPlaying(!xPlaying);
  }

  // Function to check for a winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }

  // Function to reset the game board
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="XO-App"> {/* Main wrapper for the game */}
      <ScoreBoard scores={scores} xPlaying={xPlaying} /> {/* Scoreboard component */}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} /> {/* Board component */}
      <ResetButton resetBoard={resetBoard} /> {/* ResetButton component */}
    </div>
  );
}

export default XO; // Export XO component
