/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/CSS/NavBar.css'

// react icons
import { FaBars, FaEnvelope, FaXmark } from "react-icons/fa6";
import { UserContext } from '../context/UserContext';
// import { FaEthereum } from "react-icons/fa6";
// import { FaGooglePlay } from "react-icons/fa6";




const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/RoadMap", link: "MindMaps"},
        {path: "/cetification", link: "Cetification"},
        {path: "/blogs", link: "Blogs"},
        {path: "/game-room", link: "GameRoom"},
    ]

    const {user} = useContext(UserContext)

  return (

    <header className='header-container'>
        <div className='logo-box'>
            <a href="/" className='Mind'>MIND<span className='Forge'>FORGE</span></a>
            <div className='md:hidden relative'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                </button>
            </div> 
        </div>
        <nav className='the-main-navbar'>
            <div className='flex gap-5'>
                {!user && <Link to='/register'><button className='login-button'>Register</button></Link>}
                {user && <Link to='/profile'><button className='login-button'>Profile</button></Link>}
            </div>

            {/* Nav Items with routing */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-cyan-50 navItems'>
                        <NavLink className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    } to={path}>{link}</NavLink></li>)
                }
            </ul>

            <div className='flex gap-4'>
                {user ? <Link to='/create'><button className='login-button' >Create</button></Link> : <Link to='/login'><button className='login-button'>Login</button></Link>}
                {/* {user ? <Link to='/Create'><button className='login-button'>Profile</button></Link> : <Link to='/register'><button className='login-button'>Register</button></Link>} */}
            </div>


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