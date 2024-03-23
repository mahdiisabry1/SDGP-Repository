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
            
            <XO />
          </div>
        )}

        {/* Content for tabs */}
        {activeTab === "tab2" && (
          <div>
            
            <Candycrush />
          </div>
        )}

        {/* Content for tabs */}
        {activeTab === "tab3" && (
          <div className="more-games-container">
            
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
    imageSrc: "https://i.pinimg.com/564x/ee/f7/51/eef751a766111b809b80751eec9d18dd.jpg",
    href: "https://www.crazygames.com/game/helix-jump"
  },
  {
    name: "tap-tap-shots",
    imageSrc: "https://i.pinimg.com/564x/d5/5b/6c/d55b6c725a66bd51dde099652c95cda4.jpg",
    href: "https://www.crazygames.com/game/tap-tap-shots"
  },
  {
    name: "smash-karts",
    imageSrc: "https://i.pinimg.com/564x/15/4a/d1/154ad17f2af0b50432a4dac04e08f273.jpg",
    href: "https://www.crazygames.com/game/smash-karts"
  },
  {
    name: "layers-roll",
    imageSrc: "https://i.pinimg.com/564x/b0/a9/bf/b0a9bfb5e0acf65fa5f3373b3507dcb4.jpg",
    href: "https://www.crazygames.com/game/layers-roll"
  },
  {
    name: "12-minibattles",
    imageSrc: "https://i.pinimg.com/736x/a4/80/47/a480475f6ba13ec9e94ebea6ff4b40cb.jpg",
    href: "https://www.crazygames.com/game/12-minibattles"
  },
  {
    name: "Kubi-Pets",
    imageSrc: "https://i.pinimg.com/564x/95/4c/db/954cdb5d37f9a1cda1f1a961d6f9196a.jpg",
    href: "https://poki.com/en/g/kubi-pets"
  },
  {
    name: "Cubies",
    imageSrc: "https://i.pinimg.com/564x/bd/f2/62/bdf26235be6a2c2a2a2d54b8a498763a.jpg",
    href: "https://poki.com/en/g/cubies"
  },
  {
    name: "Sides of Gravity",
    imageSrc: "https://i.pinimg.com/564x/f2/88/aa/f288aa0e8a64f08a01db2763cc408e1a.jpg",
    href: "https://poki.com/en/g/sides-of-gravity"
  },
  {
    name: "Crazy Party",
    imageSrc: "https://i.pinimg.com/564x/c7/85/96/c7859629d8e77d454c0c9d18034c6972.jpg",
    href: "https://poki.com/en/g/crazy-party"
  },
  {
    name: "Fast-Typer",
    imageSrc: "https://i.pinimg.com/564x/35/fd/9f/35fd9f865e31f99c6055b47d4fb01b72.jpg",
    href: "https://poki.com/en/g/fast-typer"
  }
];

export default GameRoom;
