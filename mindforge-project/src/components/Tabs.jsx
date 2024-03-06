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
      "Create a React component that renders a simple Hello World! message on the screen.",
      "Create a component that displays a counter starting from 0. Add buttons for incrementing and decrementing the counter. Use React state to manage the counter value.",
      "Create a parent component that renders two child components. Pass a prop from the parent to each child component, and have each child component render the prop value.",
      "Create a component that displays a message based on whether a boolean variable is true or false. Toggle the boolean variable using a button, and make the component re-render with the updated message.",
      "Create a component that fetches data from a mock API (you can use tools like JSONPlaceholder) and displays it on the screen. Use React hooks like useState and useEffect to manage state and perform the API call.",
    ],
    2: [
      "Create an Angular component called HelloComponent that displays the text Hello, Angular! in the template.",
      "Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.",
      "Create a button in an Angular component that, when clicked, increments a counter variable and displays the updated count on the page.",
      "Make an HTTP GET request to a JSON placeholder API to fetch a list of users and display them in an Angular component.",
      "Create an Angular component called CounterComponent that displays a counter value starting from 0. Include two buttons: one to increment the counter and one to decrement it. Display the current counter value in the component's template.",
    ],
    3: [
      "Create a webpage with a heading saying Hello World! and a button labeled Click Me. When the button is clicked, change the background color of the webpage.",
      "Write a JavaScript function that changes the text of a paragraph to Button Clicked! when a button is clicked. Add this functionality to the button in the previous question.",
      "Create a simple webpage layout with header, footer, sidebar, and main content area. Ensure that the layout adjusts appropriately for different screen sizes using media queries.",
      "Create a div element with a width of 200 pixels, a height of 100 pixels, a background color of blue, and 10 pixels of padding. Inside this div, create a paragraph with text Hello CSS Box Model!.",
      "Create a simple animation using CSS transitions or keyframes. For example, make a div element move from left to right continuously when hovered over.",
    ],
    4: [
      "Write a Node.js script that prints Hello, World! to the console.",
      "Create a simple Express server that listens on port 3000 and responds with Hello, World! for any incoming requests.",
      "Write a Node.js script that connects to a MongoDB database and performs basic CRUD (Create, Read, Update, Delete) operations on a collection of items, such as todos or users.",
      "Implement an API endpoint using Express that accepts GET requests to /api/users and returns a JSON response with a list of user objects.",
      "Create a basic user authentication system using Node.js, Express, and a database (e.g., MongoDB or SQLite). Implement endpoints for user registration, login, and logout.",
    ],
    5: [
      "Develop a basic full-stack web application using Node.js, Express, and MongoDB. The app should have a front-end interface to input user data (e.g., name, email) and save it to the database. Additionally, it should have a page to display all the saved user data.",
      "Enhance the previous application by adding user authentication and authorization features. Users should be able to register, log in, and log out. Only authenticated users should be able to access certain routes, such as the page displaying user data.",
      "Create a full-stack CRUD (Create, Read, Update, Delete) application using React for the front end and Node.js/Express with MongoDB for the back end. Users should be able to perform CRUD operations on a list of items displayed on the webpage.",
      "Build a real-time chat application using technologies like Node.js, Express, Socket.io for the back end, and React for the front end. Users should be able to join chat rooms, send messages, and see messages from other users in real-time.",
      "Develop a full-stack task management system where users can create tasks, assign them to other users, mark them as completed, and filter tasks based on their status. Use React for the front end and Node.js/Express with MongoDB for the back end.",
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
                      placeholder="Describe your answer"
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
