import React, { useState } from 'react';
import './GameRoom.css'; // Import the CSS file

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState('student'); // Updated initial active tab

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Container for tabs */}
      <div className="center-container">
        {/* Student tab with emoji */}
        <button
          onClick={() => handleTabChange('student')} // Click handler for student tab
          className={`tab-button ${activeTab === 'student' ? 'active' : ''}`}
        >
          🎓 Student
        </button>

        {/* Teacher tab with emoji */}
        <button
          onClick={() => handleTabChange('teacher')} // Click handler for teacher tab
          className={`tab-button ${activeTab === 'teacher' ? 'active' : ''}`}
        >
          👨‍🏫 Teacher
        </button>
      </div>

      {/* Container for tab content */}
      <div className="tab-content">
        {/* Content for the Student tab */}
        {activeTab === 'student' && (
          <div className="tab1-content">
            <h2>Student Content</h2>
            {/* Add your student content here */}
          </div>
        )}

        {/* Content for the Teacher tab */}
        {activeTab === 'teacher' && (
          <div className="tab2-content">
            <h2>Teacher Content</h2>
            {/* Add your teacher content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameRoom;
