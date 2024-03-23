import { useState } from 'react';
import './Footer.css'; // Import CSS file for custom styles

// Define the Footer component
const Footer = () => {
  // State variable to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Return JSX for rendering the component
  return (
    <footer className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Navigation links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        {/* Social media links */}
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-linkedin"></i></a> {/* LinkedIn icon */}
          <a href="https://github.com/mahdiisabry1/SDGP-Repository" target='blank' className="text-gray-300 hover:text-gray-400"><i className="fab fa-github"></i></a> {/* GitHub icon */}
        </div>
        {/* Footer text */}
        <div
          className={`text-center text-sm animated-footer ${isHovered ? 'line-hover' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="logo mb-2">
            {/* Logo or styled text */}
            <span className="text-3xl font-bold">MINDFORGE</span>
          </div>
          <p>&copy;  Learn.MindMaps.Games</p>
          <p>Designed  <span role="img" aria-label="Heart">❤️</span> by MindForgers...</p>
          <div className="line"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
