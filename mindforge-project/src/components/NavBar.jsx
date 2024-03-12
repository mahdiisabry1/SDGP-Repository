/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/CSS/NavBar.css'
import axios from 'axios';
import { URL } from "../url";

// react icons
import { FaBars, FaXmark } from "react-icons/fa6";
import { UserContext } from '../context/UserContext';
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";



// import { FaEthereum } from "react-icons/fa6";
// import { FaGooglePlay } from "react-icons/fa6";




const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
      { id: 1, path: "/", link: "Home" },
      { id: 2, path: "/RoadMap", link: "MindMaps" },
      { id: 3, path: "/certification", link: "Certification" },
      { id: 4, path: "/blogs", link: "Blogs" },
      { id: 5, path: "/game-room", link: "GameRoom" },
    ];

    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)
    const handleLogout = async() =>{
        try {
            const res = await axios.get(URL + "/api/auth/logout",{withCredentials:true})
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

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
                {user && <Link to='/profile'><button className='profile-button'><CgProfile /></button></Link>}
                {user && <button onClick={handleLogout} className='profile-button'><CiLogout /></button>}
            </div>

            {/* Nav Items with routing */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({id,path, link}) => <li key={id} className='text-cyan-50 navItems'>
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