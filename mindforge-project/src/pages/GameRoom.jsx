import React, { useState } from 'react';
import './GameRoom.css'; // Import CSS file for styling

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState('teacher');
  const [output, setOutput] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const executeCode = () => {
    // Clear previous output
    setOutput('');

    // Evaluate user's input code
    try {
      // Use eval to execute user's input code
      eval(userCode);

      // Set output to show success message
      setOutput('Button moved to the center!');
    } catch (error) {
      // Set output to show error message
      setOutput('Error occurred: ' + error.message);
    }
  };

  return (
    <div className="game-room">
      <h1>Welcome to the Game Room!</h1>
      <div className="tabs">
        <button
          className={activeTab === 'teacher' ? 'active' : ''}
          onClick={() => handleTabChange('teacher')}
        >
          Teacher
        </button>
        <button
          className={activeTab === 'student' ? 'active' : ''}
          onClick={() => handleTabChange('student')}
        >
          Student
        </button>
      </div>
      {activeTab === 'teacher' && (
        <div className="teacher-tab">
          <h2>Teacher Instructions:</h2>
          <p>Provide guidance and set challenges for students.</p>
        </div>
      )}
      {activeTab === 'student' && (
        <div className="student-tab">
          <h2>Student Code Editor:</h2>
          <textarea
            className="code-input"
            value={userCode}
            onChange={handleCodeChange}
            placeholder="Write your code here..."
          />
          <button onClick={executeCode}>Execute Code</button>
        </div>
      )}
      <div className="output">
        <h2>Output:</h2>
        <div className="output-content" dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
};

export default GameRoom;
