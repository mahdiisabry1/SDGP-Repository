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
            <button onClick={onClose} className="close-button">Close</button>
            <div className="container"> 
              {/* Main heading with inline styling for color */}
              <h1 style={{ color: "brown" }}> MINDFORGE</h1>
              {/* Introduction */}
              <p style={{ color: "blue" }}>Welcome to our guidelines page! </p>
              <p style={{ color: "blue" }}>Here you'll find all the information you need to follow our web page.</p>
              
              {/* Section 1: Quiz */}
              <h2 style={{ color: "black" }}>1. Quiz</h2>
              <p>There is a quiz in the Home page. By completing it you can get a web developer suggestion according to your answers.</p>
              
              {/* Section 2: MindMaps */}
              <h2 style={{ color: "black" }}>2. MindMaps</h2>
              <p>You can choose your mind map according to your preference and you can follow the mind map and improve your knowledge.</p>
              <p>At there we have linked important tutorials and certification courses too.</p>
              <p>You can also create your own mind map that does not exist on our website.</p>

              {/* Section 3: Certification */}
              <h2 style={{ color: "black" }}>3. Certification</h2>
              <p>You are given five questions based on the chosen path.</p> 
              <p>After you complete those five questions, You can get our certificate.</p>
              <p>ex: If you choose REACT, you are given five questions based on REACT</p>

              {/* Section 4: Read */}
              <h2 style={{ color: "black" }}>4. Read</h2>
              <p>You can share your own ideas on this community page.</p>

              {/* Section 5: Game Room */}
              <h2 style={{ color: "black" }}>5. Game Room</h2>
              <p>You can log into our game room for stress release and have some fun during the studies.</p>

              {/* Section 6: Profile */}
              <h2 style={{ color: "black" }}>6. Profile</h2>
              <p>In the profile, it displays your Username, Email and Password.</p>
              <p>Also, it displays the work you have done so far.</p>
              <p>ex: If you have created a mind map by your own, it displays in the profile.</p>
              <p>ex: If you have created a Post, it displays in the profile.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Model;
