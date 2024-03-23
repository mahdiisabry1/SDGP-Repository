/* eslint-disable no-unused-vars */ // Disable eslint rule for unused variables
/* eslint-disable react/no-unknown-property */ // Disable eslint rule for unknown React properties

import React from 'react'; // Import React library
import '../components/CSS/Introduction.css'; // Import CSS file for custom styles
import { NavLink } from 'react-router-dom'; // Import NavLink component from react-router-dom

// Define the Introduction component
const Indtroduction = () => {

  // Define navigation items with their paths and links
  const navItems = [{
    path: "/Quiz", link: "Get know about Your Web Designer!",
  }];

  // Render the Introduction component
  return (
    <div className="outerLayer">
      <div className="innerLayer">
        {/* Banner with marquee scrolling effect */}
        <h1 className="TheBanner">
          <marquee behavior="scroll" direction="right" scrollamount="30">
            Welcome to MindForge
          </marquee>
        </h1>
        {/* Paragraph with introductory text */}
        <p className="paragrapgh">
          Learn , Create and Earn
        </p>

        {/* Render navigation buttons */}
        <div>
          {navItems.map(({ path, link }) => (
            <button key={path} className="learn-more">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={path}
              >
                {link}
              </NavLink>
            </button>
          ))}
        </div>

        {/* Scroll down button */}
        <div className="Scrol-down-btn">
          <p className="text-white">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}

export default Indtroduction; // Export the Introduction component
