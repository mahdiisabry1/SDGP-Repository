import { useState } from 'react';
import './CSS/tabs.css'; // Import the CSS file

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState(Array(5).fill('')); // Array to store user answers

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setSelectedQuestion(null); // Reset selected question when changing tabs
  };

  const handleQuestionClick = (questionIndex) => {
    setSelectedQuestion(questionIndex === selectedQuestion ? null : questionIndex);
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    const updatedAnswers = [...answers];
    updatedAnswers[selectedQuestion] = value;
    setAnswers(updatedAnswers);
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
      "Create a React component that renders a form with input fields for username and password. Implement validation to ensure both fields are filled before submission.",
      "Develop a React component that fetches data from an external API (e.g., weather information from OpenWeatherMap) and displays it dynamically on the page.",
      "Implement a React application that allows users to upload images, displaying a preview of the uploaded image before submission.",
      "Create a React component for a todo list with the ability to add new tasks, mark tasks as complete, and delete tasks.",
      "Develop a React-based quiz application where users can answer multiple-choice questions and receive immediate feedback on their answers."
      ],
      2: [
      "Build an Angular application that utilizes routing to navigate between multiple pages/components, such as a homepage, about page, and contact page.",
      "Create an Angular service to handle user authentication, including features like login, logout, and session management.",
      "Implement an Angular directive to create a custom interactive chart (e.g., bar chart, pie chart) using SVG or Canvas.",
      "Develop an Angular component that integrates with a third-party API (e.g., Google Maps API) to display interactive maps with markers and info windows.",
      "Build an Angular application with a drag-and-drop feature, allowing users to rearrange items in a list or grid dynamically.",
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
      ]
  };

  const handleSubmitClick = () => {
    // Assuming you have a separate object storing correct answers for each question
    const correctAnswers = {
      1: ["Hello World!", "Counter", "Parent-Child Props", "Boolean Toggle", "Fetch Data"],
      2: ["Hello, Angular!", "Two-way Data Binding", "Counter Button", "HTTP GET", "Counter Component"],
      3: ["Change Background", "Change Text", "Simple Layout", "CSS Box Model", "CSS Animation"],
      4: ["Print Hello World", "Express Server", "CRUD Operations", "GET Users", "Authentication System"],
      5: ["Basic CRUD App", "Authentication", "Full-stack CRUD", "Real-time Chat", "Task Management System"],
    };

    // Fetch the correct answers for the active tab
    const correctAnswersForTab = correctAnswers[activeTab];

    // Check if the provided answers match the correct answers
    const isAllCorrect = answers.every((answer, index) => {
      return answer.trim() === correctAnswersForTab[index];
    });

    // Display message based on whether all answers are correct
    if (isAllCorrect) {
      alert("All answers are correct!");
    } else {
      alert("Answer Submitted!");
    }
  };

  const handleCertificationClick = () => {
    // Define an object mapping each tab to its corresponding image file
    const certificationImages = {
      1: "/path-to-components/ReactCertification", // Replace with your actual image file names
      2: "/path-to-components/AngularCertification",
      3: "/path-to-components/FECertification",
      4: "/path-to-components/BECertification",
      5: "/path-to-components/FSCertification",
    };

    const certificationImage = certificationImages[activeTab];

    // Open a new tab with the certification image
    window.open(certificationImage, '_blank');
  };

  const isAnswerProvided = selectedQuestion !== null && answers[selectedQuestion].trim() !== '';

  const isAllAnswersCorrect = () => {
    // Assuming you have a separate object storing correct answers for each question
    const correctAnswers = {
      1: [".", ".", ".", ".", "."],
      2: ["Hello, Angular!", "Two-way Data Binding", "Counter Button", "HTTP GET", "Counter Component"],
      3: ["Change Background", "Change Text", "Simple Layout", "CSS Box Model", "CSS Animation"],
      4: ["Print Hello World", "Express Server", "CRUD Operations", "GET Users", "Authentication System"],
      5: ["Basic CRUD App", "Authentication", "Full-stack CRUD", "Real-time Chat", "Task Management System"],
    };

    // Fetch the correct answers for the active tab
    const correctAnswersForTab = correctAnswers[activeTab];

    // Check if all answers are correct
    return correctAnswersForTab.every((correctAnswer, index) => {
      return correctAnswer === answers[index].trim();
    });
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
                    <input
                      type="text"
                      name={`answer-${questionIndex}`}
                      placeholder="Describe your answer"
                      style={{ color: "black", width: "100%" }} // Set font color to black and adjust width
                      value={answers[questionIndex]}
                      onChange={handleAnswerChange}
                    />

                    {isAnswerProvided && (
                      <div style={{ borderTop: "1px solid #ccc", marginTop: "10px", paddingTop: "10px" }}>
                        <button
                          className="mt-5 bg-black w-full text-white hover:bg-slate-500"
                          onClick={handleSubmitClick}
                        >
                          Submit
                        </button>
                        {/* "Done" button visually cut off by a line */}
                        <div style={{ borderTop: "1px solid #ccc", marginTop: "10px", paddingTop: "10px" }}>
                          <button
                            className="mt-5 bg-black w-full text-white hover:bg-slate-500"
                            onClick={() => handleQuestionClick(null)} // Reset selected question
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div>
              {/* Additional content for all tabs */}
              <p>End of Questions</p>
              {isAllAnswersCorrect() && (
                <button
                  className="mt-5 bg-black w-full text-white hover:bg-slate-500"
                  onClick={handleCertificationClick}
                >
                  Get Your Certification
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
