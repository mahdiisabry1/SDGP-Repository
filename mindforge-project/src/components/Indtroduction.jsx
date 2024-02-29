/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import '../components/CSS/Introduction.css'
import { NavLink } from 'react-router-dom'
import { HiArrowDown } from "react-icons/hi";

const Indtroduction = () => {

  const navItems = [{
    path: "/Quiz", link: "Get Started",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          architecto molestiae unde inventore expedita a ipsum! Fuga dicta
          dolore, tempora molestias at ipsam placeat praesentium dignissimos
          consectetur neque eveniet? Quisquam, error praesentium? A consequuntur
          repellat molestias non dolorem aliquam rem voluptates? Aut magni,
          blanditiis perferendis impedit iusto provident perspiciatis incidunt?
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
          <p className="text-white">Scroll Down<HiArrowDown className='SVG-arrow'/></p>
        </div>
      </div>
    </div>
  );
}

export default Indtroduction