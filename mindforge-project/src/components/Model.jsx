import React from "react";
import '../components/CSS/Model.css'

const Model = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-blue-300 text-center p-5 middle-container">
          <button onClick={onClose} className="close-button">
            Close
          </button>
          <div className="container">
            {/* Main heading with inline styling for color */}
            <h1 style={{ color: "brown" }}> MINDFORGE</h1>
            {/* Introduction */}
            <p style={{ color: "blue" }}>Welcome to our guidelines page! </p>
            <p style={{ color: "blue" }}>
              Here you'll find all the information you need to follow our web
              page.
            </p>

            
            <h2>1. Be Respectful</h2>
            <p>
              Respect other users and their opinions. Avoid offensive language
              and behavior.
            </p>

            <h2>2. Follow Community Standards</h2>
            <p>
              Adhere to our community standards and rules. Any violation may
              result in consequences.
            </p>

            <h2>3. Quality Content</h2>
            <p>
              Contribute high-quality content that adds value to the community.
              Avoid spam and irrelevant posts.
            </p>

            <h2>4. Privacy</h2>
            <p>
              Respect the privacy of others. Do not share personal information
              without consent.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
