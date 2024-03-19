import React from 'react';

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

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

  const scoreStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '1rem 0rem',
  };

  const xScoreStyle = {
    color: 'rgb(255, 70, 37)',
    borderBottom: '5px solid rgb(255, 70, 37)',
    borderRadius: '0.5rem 0rem 0rem 0.5rem',
    borderBottomColor: xPlaying ? 'transparent' : 'rgb(255, 70, 37)',
  };

  const oScoreStyle = {
    color: 'rgb(44, 135, 255)',
    borderBottom: '5px solid rgb(44, 135, 255)',
    borderRadius: '0rem 0.5rem 0.5rem 0rem',
    borderBottomColor: xPlaying ? 'rgb(44, 135, 255)' : 'transparent',
  };

  return (
    <div style={scoreboardStyle}>
      <span style={{ ...scoreStyle, ...xScoreStyle }}>X - {xScore}</span>
      <span style={{ ...scoreStyle, ...oScoreStyle }}>O - {oScore}</span>
    </div>
  );
};
