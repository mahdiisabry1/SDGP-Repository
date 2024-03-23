/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import '../components/CSS/Introduction.css'
import { NavLink } from 'react-router-dom'

const Indtroduction = () => {

  const navItems = [{
    path: "/Quiz", link: "WebDesign Mastery Quiz",
  }]

  return (
    <div className="outerLayer">
      <div className="innerLayer">
        <h1 className="TheBanner">
          <marquee behavior="scroll" direction="right" scrollamount="30">
            Welcome to MindForge
          </marquee>
        </h1>
        <p className="paragrapgh">
          
          Learn , Create and Earn

        </p>

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
        <div className="Scrol-down-btn">
          <p className="text-white">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}

export default Indtroduction