/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

// react icons
import { FaBars, FaEnvelope, FaXmark } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";


const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/RoadMap", link: "RoadMap"},
        {path: "/cetification", link: "Cetification"},
        {path: "/blogs", link: "Blogs"},
        {path: "/game-room", link: "GameRoom"}
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Mind<span className='text-blue-400'>FORGE</span></a> 
            {/* Nav Items with routing */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-cyan-50'>
                        <NavLink className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    } to={path}>{link}</NavLink></li>)
                }
            </ul>
            {/* Menu items */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-blue-300'><FaEnvelope /></a>
                <a href="/" className='hover:text-blue-300'><FaEthereum /></a>
                <a href="/" className='hover:text-blue-300'><FaGooglePlay /></a>
                <button className='bg-blue-600 px-6 py-2 font-medium rounded hover:bg-slate-50 hover:text-black transition-all'>Log in</button>
            </div>

            {/* Mobile menu button, Displaying only in menu screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                    
                </button>
            </div>
        </nav>
        {/* Menu for mobile(smaller) devices */}
        <div>
            <ul className= {`md:hidden gap-12 text-lg block space-y-4 px-5 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-50":"hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-black'>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink></li>)
                }
            </ul>
        </div>
        
    </header>
  )
}

export default NavBar