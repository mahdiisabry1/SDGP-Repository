/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/CSS/NavBar.css";
import axios from "axios";
import { URL } from "../url";

// react icons
import { FaBars, FaXmark } from "react-icons/fa6";
import { UserContext } from "../context/UserContext";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { MdCreate } from "react-icons/md";


// import { FaEthereum } from "react-icons/fa6";
// import { FaGooglePlay } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, path: "/Home", link: "Home" },
    { id: 2, path: "/RoadMap", link: "MindMaps" },
    { id: 3, path: "/cetification", link: "Certification" },
    { id: 4, path: "/blogs", link: "Read" },
    { id: 5, path: "/game-room", link: "GameRoom" },
  ];

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      // Ask for confirmation before logging out
      const confirmLogout = window.confirm("Are you sure you want to logout?");

      if (confirmLogout) {
        const res = await axios.get(URL + "/api/auth/logout", {
          withCredentials: true,
        });
        setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header-container">
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <FaXmark className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="the-main-navbar">
        {/* <div className="flex gap-5">
          {!user && (
            <Link to="/register">
              <button className="login-button">Register</button>
            </Link>
          )}
          {user && (
            <Link to="/profile">
              <button className="profile-button">
                <CgProfile />
              </button>
            </Link>
          )}
          {user && (
            <button onClick={handleLogout} className="profile-button">
              <CiLogout />
            </button>
          )}
        </div> */}
        <a href="/Home" className="Mind">
          MIND<span className="Forge">FORGE</span>
        </a>
        {/* Nav Items with routing */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ id, path, link }) => (
            <li key={id} className="text-cyan-50 navItems">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="/create">
                <button className="profile-button">
                  <MdCreate />
                </button>
              </Link>
              <Link to="/profile">
                <button className="profile-button">
                  <CgProfile />
                </button>
              </Link>
              <button onClick={handleLogout} className="profile-button">
                <CiLogout />
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
              <Link to="/register">
                <button className="login-button">Register</button>
              </Link>
            </>
          )}
        </div>

        {/* <div className="flex gap-4">
          {user ? (
            <Link to="/create">
              <button className="login-button">Write</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          )} */}
        {/* {user ? <Link to='/Create'><button className='login-button'>Profile</button></Link> : <Link to='/register'><button className='login-button'>Register</button></Link>} */}
        {/* </div> */}

        {/* Menu items */}

        {/* Mobile menu button, Displaying only in menu screen */}
        {/* <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                </button>
            </div> */}
      </nav>
      {/* Menu for mobile(smaller) devices */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-5 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-50"
              : "hidden"
          }`}
        >
          {navItems.map(({ id, path, link }) => (
            <li className="text-black" key={id}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
