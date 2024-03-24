import React, { useState } from 'react';
import './CSS/Menu.css'; // Import CSS file for custom styles
import Model from './Model';

const Menu = () => {

  const [isModelOpen, setIsModelOpen] = useState(false)

  const openModel = () => {
    setIsModelOpen(true)
  }

  const closeModel = () => {
    setIsModelOpen(false)
  }

  return (
    <div className="Menu-container">
      <div className="Menu-bar">
        <nav className="MenuNav">
          <ul className="Menu-com">
            <li>
              <a onClick={openModel} className='cursor-pointer'>Guidelines</a>
            </li>
            <li>
              <a href="/Home">Visit</a>
            </li>
          </ul>
        </nav>
        <Model isOpen={isModelOpen} onClose={closeModel}/>
      </div>
    </div>
  );
}

export default Menu;
