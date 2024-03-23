import React, { useState } from "react";
import "./CSS/Gameroom.css";
import XO from "./XO.jsx";
import Candycrush from "./Candycrush.jsx";
import NavBar from "../components/NavBar";

const GameRoom = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <NavBar />
      <div>
        {/* Tab buttons */}
        <div className="gamestab-buttons">
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTabClick("tab1")}
          >
            XO Game
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTabClick("tab2")}
          >
            Candy Crush
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => handleTabClick("tab3")}
          >
            MoreGames
          </button>
        </div>

        {/* Content for tabs */}
        {activeTab === "tab1" && (
          <div>
            <h1 style={{ textAlign: "center" }}>TicTacToe</h1>
            <XO />
          </div>
        )}

        {/* Content for tabs */}
        {activeTab === "tab2" && (
          <div>
            <h1 style={{ textAlign: "center" }}>CandyCrush</h1>
            <Candycrush />
          </div>
        )}

        {/* Content for tabs */}
        {activeTab === "tab3" && (
          <div className="more-games-container">
            <h1 style={{ textAlign: "center", color: "white" }}>More Games</h1>
            <div className="game-chart">
              {games.map((game, index) => (
                <GameItem
                  key={index}
                  name={game.name}
                  imageSrc={game.imageSrc}
                  href={game.href}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// GameItem component for individual game links with image
const GameItem = ({ name, imageSrc, href }) => (
  <div className="game-item">
    <a href={href}>
      <img src={imageSrc} alt={name} />
      <span>{name}</span>
    </a>
  </div>
);

// Games data
const games = [
  {
    name: "helix-jump",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://www.crazygames.com/game/helix-jump"
  },
  {
    name: "tap-tap-shots",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://www.crazygames.com/game/tap-tap-shots"
  },
  {
    name: "smash-karts",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://www.crazygames.com/game/smash-karts"
  },
  {
    name: "layers-roll",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://www.crazygames.com/game/layers-roll"
  },
  {
    name: "12-minibattles",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://www.crazygames.com/game/12-minibattles"
  },
  {
    name: "Kubi-Pets",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://poki.com/en/g/kubi-pets"
  },
  {
    name: "Cubies",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://poki.com/en/g/cubies"
  },
  {
    name: "Sides of Gravity",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://poki.com/en/g/sides-of-gravity"
  },
  {
    name: "Crazy Party",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://poki.com/en/g/crazy-party"
  },
  {
    name: "Fast-Typer",
    imageSrc: "https://via.placeholder.com/150",
    href: "https://poki.com/en/g/fast-typer"
  }
];

export default GameRoom;
