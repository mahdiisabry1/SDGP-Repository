import React from 'react';

// Define a functional component called ScoreBoard
export const ScoreBoard = ({ scores, xPlaying }) => {
  // Destructure scores object to get xScore and oScore
  const { xScore, oScore } = scores;

  // Define styles for the scoreboard container
  const scoreboardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '20rem',
    fontSize: '1.5rem',
    backgroundColor: 'white',
    margin: '3rem auto',
    boxShadow: '0px 0px 8px #888888',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
  };

  // Define styles for each individual score
  const scoreStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '1rem 0rem',
  };

  // Style for X's score with color and border
  const xScoreStyle = {
    color: 'rgb(255, 70, 37)',
    borderBottom: '5px solid rgb(255, 70, 37)',
    borderRadius: '0.5rem 0rem 0rem 0.5rem',
    borderBottomColor: xPlaying ? 'transparent' : 'rgb(255, 70, 37)',
  };

  // Style for O's score with color and border
  const oScoreStyle = {
    color: 'rgb(44, 135, 255)',
    borderBottom: '5px solid rgb(44, 135, 255)',
    borderRadius: '0rem 0.5rem 0.5rem 0rem',
    borderBottomColor: xPlaying ? 'rgb(44, 135, 255)' : 'transparent',
  };

  // Render the ScoreBoard component
  return (
    <div style={scoreboardStyle}>
      {/* Display X's score with appropriate style */}
      <span style={{ ...scoreStyle, ...xScoreStyle }}>X - {xScore}</span>
      {/* Display O's score with appropriate style */}
      <span style={{ ...scoreStyle, ...oScoreStyle }}>O - {oScore}</span>
    </div>
  );
};
