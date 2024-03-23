import { useState } from 'react';
import './Footer.css'; // Import CSS file for custom styles

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-gray-300 hover:text-gray-400"><i className="fab fa-linkedin"></i></a> {/* LinkedIn icon */}
          <a href="https://github.com/mahdiisabry1/SDGP-Repository" target='blank' className="text-gray-300 hover:text-gray-400"><i className="fab fa-github"></i></a> {/* GitHub icon */}
        </div>
        <div
          className={`text-center text-sm animated-footer ${isHovered ? 'line-hover' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="logo mb-2">
            {/* You can replace the content of this div with your logo image or styled text */}
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
