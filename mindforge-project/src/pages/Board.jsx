import React from 'react';

import { Box } from "./Box"; // Importing the Box component

// Board component responsible for rendering the Tic-Tac-Toe board
export const Board = ({ board, onClick }) => {
  // Style for the board container
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 6rem)', // Setting 3 columns with a width of 6rem each
    placeItems: 'center', // Centering items horizontally and vertically
    justifyContent: 'center' // Centering the entire grid horizontally
  };

  return (
    <div style={boardStyle}>
      {/* Mapping over the board array to render each Box */}
      {board.map((value, idx) => (
        <Box
          key={idx} // Key for React reconciliation
          value={value} // Value of the Box (either 'X', 'O', or null)
          onClick={() => value === null && onClick(idx)} // Handling click event, but only if the box is empty
        />
      ))}
    </div>
  );
};
