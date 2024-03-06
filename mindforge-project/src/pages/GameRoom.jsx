import React, { useState } from 'react';
import './GameRoom.css'; // Import the CSS file

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState('student'); // Updated initial active tab
  const [userName, setUserName] = useState(''); // State to store username
  const [continueEnabled, setContinueEnabled] = useState(false); // State to manage continue button

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle input change for username
  const handleInputChange = (event) => {
    const name = event.target.value;
    setUserName(name);
    // Enable continue button if user has entered a name
    setContinueEnabled(name.trim().length > 0);
  };

  // Function to handle continue button click
  const handleContinueClick = () => {
    // Handle continue button click action here
    console.log('Continue clicked');
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
            {/* Input field for username */}
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={handleInputChange}
            />
            {/* Displaying the entered username */}
            <p>Your name: {userName}</p>
            {/* Continue button */}
            <button
              onClick={handleContinueClick}
              disabled={!continueEnabled} // Disable button if username is empty
            >
              Continue
            </button>
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
