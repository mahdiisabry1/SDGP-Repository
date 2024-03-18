import React, { useState } from 'react';
import './CSS/MoreGames.css';

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
      </div>

      {/* Content for tabs */}
      {activeTab === 'tab1' && (
        <div>
          <h1>Tab 1 Content</h1>
          <p>This is the content for Tab 1.</p>
        </div>
      )}

      {activeTab === 'tab2' && (
        <div>
          <h1>Tab 2 Content</h1>
          <p>This is the content for Tab 2.</p>
        </div>
      )}
    </div>
  );
}

export default MoreGames;
