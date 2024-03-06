import React, { useState } from 'react';
import './CSS/tabs.css'; // Import the CSS file

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setSelectedQuestion(null); // Reset selected question when changing tabs
  };

  const handleQuestionClick = (questionIndex) => {
    setSelectedQuestion(questionIndex === selectedQuestion ? null : questionIndex);
  };

  const tabNames = ["React", "Angular", "FrontEnd", "BackEnd", "FullStack"];
  const tabTransparency = 0.5;

  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  }

  // Define a mapping of colors for each tab
  const tabColors = {
    1: '#61dafb',
    2: '#dd1b16',
    3: '#4caf50',
    4: '#673ab7',
    5: '#ff5722',
  };

  const quizQuestions = {
    1: [
      "Create a React component that renders a simple Hello, World! message on the screen.",
      "Create a component that displays a counter starting from 0. Add buttons for incrementing and decrementing the counter. Use React state to manage the counter value.",
      "Create a parent component that renders two child components. Pass a prop from the parent to each child component, and have each child component render the prop value.",
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

  const isLastTab = activeTab === 5;

  const handleCertificationClick = () => {
    // Open a new tab with the certification page
    window.open('https://your-certification-url.com', '_blank');
  };

  return (
    <div>
      <div className="tab-container">
        {tabNames.map((tabName, index) => (
          <div
            key={index + 1}
            className={`tab ${activeTab === index + 1 ? 'active' : ''}`}
            style={{
              backgroundColor: `rgba(${hexToRgb(tabColors[index + 1])}, ${tabTransparency})`,
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
                <p
                  className={`question ${selectedQuestion === questionIndex ? 'active' : ''}`}
                  onClick={() => handleQuestionClick(questionIndex)}
                >
                  Question {questionIndex + 1}: {question}
                </p>
                {selectedQuestion === questionIndex && (
                  <div>
                    <input type="file" accept=".pdf,.doc,.docx" />
                    <input
                      type="text"
                      placeholder="Enter your answer"
                      style={{ color: "black" }} // Set font color to black
                    />
                    <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
                      Submit
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div>
              {/* Additional content for all tabs */}
              <p>End of Questions</p>
              <button
                className="mt-5 bg-black w-full text-white hover:bg-slate-500"
                onClick={handleCertificationClick}
              >
                Get Your Certification
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
