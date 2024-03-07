import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GameRoom.css'; // Import the CSS file

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [userName, setUserName] = useState('');
  const [userBirthdate, setUserBirthdate] = useState('');
  const [continueEnabled, setContinueEnabled] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleUserNameChange = (event) => {
    const name = event.target.value;
    setUserName(name);
    setContinueEnabled(name.trim().length > 0 && userBirthdate.trim().length > 0);
  };

  const handleBirthdateChange = (event) => {
    const birthdate = event.target.value;
    setUserBirthdate(birthdate);
    setContinueEnabled(userName.trim().length > 0 && birthdate.trim().length > 0);
  };

  const handleContinueClick = () => {
    console.log('Continue clicked');
  };

  return (
    <div>
      <div className="center-container">
        <button
          onClick={() => handleTabChange('student')}
          className={`tab-button ${activeTab === 'student' ? 'active' : ''}`}
        >
          🎓 Student
        </button>

        <button
          onClick={() => handleTabChange('teacher')}
          className={`tab-button ${activeTab === 'teacher' ? 'active' : ''}`}
        >
          👨‍🏫 Teacher
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'student' && (
          <div className="tab1-content">
            <h2>Student Content</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={handleUserNameChange}
            />

            <input
              type="date"
              placeholder="Select your birthdate"
              value={userBirthdate}
              onChange={handleBirthdateChange}
            />

            <p>Your name: {userName}</p>
            <p>Your birthdate: {userBirthdate}</p>

            <Link to="/student-details">
              <button disabled={!continueEnabled} onClick={handleContinueClick}>
                Continue
              </button>
            </Link>
          </div>
        )}

        {activeTab === 'teacher' && (
          <div className="tab2-content">
            <h2>Teacher Content</h2>
            {/* Content for the Teacher tab */}
            <button onClick={() => console.log('School')}>School</button>
            <button onClick={() => console.log('Higher Education')}>Higher Education</button>
            <button onClick={() => console.log('School Administration')}>School Administration</button>
            <button onClick={() => console.log('Other')}>Other</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameRoom;