import React, { useState } from 'react';
import './GameRoom.css'; // Import CSS file for styling

const GameRoom = () => {
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
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
      <div className="task">
        <h2>Task: Move the button to the center of the screen at the bottom.</h2>
      </div>
      {/* Button to be moved */}
      <button className="center-button">Move me!</button>
      <div className="user-input">
        <h2>Your Code:</h2>
        <textarea
          className="code-input"
          value={userCode}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
        />
        <button onClick={executeCode}>Execute Code</button>
      </div>
      <div className="output">
        <h2>Output:</h2>
        <div className="output-content" dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
};

export default GameRoom;
