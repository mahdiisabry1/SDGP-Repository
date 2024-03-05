import React, { useState } from 'react';
import './CSS/tabs.css'; // Import the CSS file

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["React", "Angular", "FrontEnd", "BackEnd", "FullStack"];
  const tabTransparency = 0.5;

  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }

  
  // Define a mapping of colors for each tab
  const tabColors = {
    1: '#4caf50', 
    2: '#2196f3', 
    3: '#ff9800', 
    4: '#e91e63', 
    5: '#795548', 
  };

  return (
    <div>
      <div className="tab-container">
        {tabNames.map((tabName, index) => (
          <div
            key={index + 1}
            className={`tab ${activeTab === index + 1 ? 'active' : ''}`}
            style={{ 
              backgroundColor: `rgba(${hexToRgb(tabColors[index + 1])}, ${tabTransparency})` 
            }}
            onClick={() => handleTabClick(index + 1)}
          >
            {tabName} .
          </div>
        ))}
      </div>

      {/* Content for each tab */}
      <div className="tab-content">
        {activeTab === 1 && <p>React Quiz</p>}
        {activeTab === 2 && <p>Angular Quiz</p>}
        {activeTab === 3 && <p>Front-End Quiz</p>}
        {activeTab === 4 && <p>Back-End Quiz</p>}
        {activeTab === 5 && <p>Full-Stack Quiz</p>}
      </div>
    </div>
  );
};

export default Tabs;