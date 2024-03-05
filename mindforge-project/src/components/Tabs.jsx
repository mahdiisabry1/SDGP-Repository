import React, { useState } from 'react';
import './CSS/tabs.css'; // Import the CSS file

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["React", "Angular", "FrontEnd", "BackEnd", "FullStack"];

  return (
    <div>
      <div className="tab-container">
        {tabNames.map((tabName, index) => (
          <div
            key={index + 1}
            className={`tab ${activeTab === index + 1 ? 'active' : ''}`}
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
