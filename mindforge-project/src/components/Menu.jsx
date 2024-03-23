import React from 'react';
import './CSS/Menu.css'; // Import CSS file for custom styles

const Menu = () => {
  return (
    <div className="Menu-container">
      <div className="Menu-bar">
        <nav className="MenuNav">
          <ul className="Menu-com">
            <li>
              <a href="">Guidelines</a>
            </li>
            <li>
              <a href="/Home">Visit</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
