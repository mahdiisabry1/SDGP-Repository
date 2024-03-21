import React, { useState } from 'react';
import './CSS/GameRoom.css';
import XO from './XO.jsx';
import Candycrush from './Candycrush.jsx';

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to manage active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="gamestab-buttons">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>XO Game</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Candy Crush</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>MoreGames</button>
      </div>

      {/* Content for tabs */}
      {activeTab === 'tab1' && (
        <div>
          <h1 style={{ textAlign: 'center' }}>TicTacToe</h1>
          <XO />
        </div>
      )}

      {/* Content for tabs */}
      {activeTab === 'tab2' && (
        <div>
          <h1 style={{ textAlign: 'center' }}>CandyCrush</h1>
          <Candycrush />
        </div>
      )}

      {activeTab === 'tab3' && (
        <div>
          <h1 style={{ textAlign: 'center' }}>MORE GAMES</h1>
          <p style={{ textAlign: 'center', fontStyle: 'italic', padding: 20, fontSize: '20px' }}>You can click these links and find more games here:</p>
          <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 15 }}>
            <li style={{ marginBottom: '10px' }}><a href="https://www.crazygames.com/game/helix-jump" style={{ textDecoration: 'underline', backgroundColor: 'lightblue', padding: '5px', fontSize: '30px'}}>helix-jump</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://www.crazygames.com/game/tap-tap-shots" style={{ textDecoration: 'underline', backgroundColor: 'lightgreen', padding: '5px', fontSize: '30px' }}>tap-tap-shots</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://www.crazygames.com/game/smash-karts" style={{ textDecoration: 'underline', backgroundColor: 'lightcoral', padding: '5px', fontSize: '30px' }}>smash-karts</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://www.crazygames.com/game/layers-roll" style={{ textDecoration: 'underline', backgroundColor: 'lightpink', padding: '5px', fontSize: '30px' }}>layers-roll</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://www.crazygames.com/game/12-minibattles" style={{ textDecoration: 'underline', backgroundColor: 'lightsalmon', padding: '5px', fontSize: '30px' }}>12-minibattles</a></li> 
            <li style={{ marginBottom: '10px' }}><a href="https://poki.com/en/g/kubi-pets" style={{ textDecoration: 'underline', backgroundColor: 'brown', padding: '5px', fontSize: '30px' }}>Kubi-Pets</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://poki.com/en/g/cubies" style={{ textDecoration: 'underline', backgroundColor: 'purple', padding: '5px', fontSize: '30px' }}>Cubies</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://poki.com/en/g/sides-of-gravity" style={{ textDecoration: 'underline', backgroundColor: 'grey', padding: '5px', fontSize: '30px' }}>Sides of Gravity</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://poki.com/en/g/crazy-party" style={{ textDecoration: 'underline', backgroundColor: 'salmon', padding: '5px', fontSize: '30px' }}>Crazr Party</a></li>
            <li style={{ marginBottom: '10px' }}><a href="https://poki.com/en/g/fast-typer" style={{ textDecoration: 'underline', backgroundColor: 'green', padding: '5px', fontSize: '30px' }}>Fast-Typer</a></li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameRoom;
