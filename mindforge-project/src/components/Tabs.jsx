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

  const quizQuestions = {
    1: [
      "What is React?",
      "What is JSX?",
      "What is the purpose of virtual DOM?",
      "Explain the component lifecycle in React.",
      "Additional Question: What is React Fiber?",
    ],
    2: [
      "What is Angular?",
      "What is TypeScript?",
      "Explain data binding in Angular.",
      "What is the purpose of Angular CLI?",
      "Additional Question: What is RxJS?",
    ],
    3: [
      "What is Front-End development?",
      "Explain the difference between margin and padding.",
      "What is responsive design?",
      "What is the box model in CSS?",
      "Additional Question: What is BEM (Block Element Modifier)?",
    ],
    4: [
      "What is Back-End development?",
      "Explain the role of a server in Back-End architecture.",
      "What is RESTful API?",
      "What is the purpose of a database in Back-End development?",
      "Additional Question: What is GraphQL?",
    ],
    5: [
      "What is Full-Stack development?",
      "Explain the MERN stack.",
      "What is a microservices architecture?",
      "What is the role of a full-stack developer?",
      "Additional Question: What is serverless architecture?",
    ],
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
        {activeTab >= 1 && activeTab <= 5 && (
          <div>
            <p>{tabNames[activeTab - 1]} Quiz</p>
            {quizQuestions[activeTab].map((question, questionIndex) => (
              <div key={questionIndex}>
                <p>Question {questionIndex + 1}: {question}</p>
                <input type="text" placeholder="Enter your answer" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;