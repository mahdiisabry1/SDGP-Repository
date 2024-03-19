import React from 'react';

import { Box } from "./Box";

export const Board = ({ board, onClick }) => {
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 6rem)',
    placeItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={boardStyle}>
      {board.map((value, idx) => (
        <Box
          key={idx}
          value={value}
          onClick={() => value === null && onClick(idx)}
        />
      ))}
    </div>
  );
};
