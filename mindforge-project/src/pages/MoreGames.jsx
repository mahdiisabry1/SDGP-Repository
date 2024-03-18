import React, { useState } from 'react';
import './CSS/MoreGames.css';
import XO from './XO.jsx'

const MoreGames = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to manage active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="gamestab-buttons">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>

      {/* Content for tabs */}
      {activeTab === 'tab1' && (
        <div>
          <h1>TicTacToe</h1>
          <XO />
        </div>
      )}

      {activeTab === 'tab2' && (
        <div>
          <h1>Tab 2 Content</h1>
          <p>This is the content for Tab 2.</p>
        </div>
      )}

      {activeTab === 'tab3' && (
        <div>
          <h1>Tab 3 Content</h1>
          <p>This is the content for Tab 3. You can add links here:</p>
          <ul>
            <li><a href="https://www.crazygames.com/game/helix-jump">Link 1</a></li>
            <li><a href="https://www.crazygames.com/game/tap-tap-shots">Link 2</a></li>
            <li><a href="https://www.crazygames.com/game/tap-tap-shots">Link 2</a></li>
            <li><a href="https://www.crazygames.com/game/tap-tap-shots">Link 2</a></li>
            <li><a href="https://www.crazygames.com/game/tap-tap-shots">Link 2</a></li> 
          </ul>
        </div>
      )}
    </div>
  );
}

export default MoreGames;
