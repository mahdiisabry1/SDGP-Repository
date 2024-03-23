import React from "react"; // Import React library
import Tabs from "../components/Tabs"; // Import Tabs component
import NavBar from "../components/NavBar"; // Import NavBar component

// Certification component
const Certification = () => {
  // Inline styles for background image
  const backgroundStyles = {
    // Background image URL
    backgroundImage: 'url("https://i.pinimg.com/originals/0f/b2/88/0fb288a519fdb745d0b773d87a6aaf2e.gif")',
    // Background image size
    backgroundSize: "cover",
    // Background image position
    backgroundPosition: "center",
    // Background image repeat
    backgroundRepeat: "no-repeat",
    // Background image attachment (fixed to viewport)
    backgroundAttachment: "fixed", // Fix the background image to the viewport
  };

  return (
    <>
      {/* Render the NavBar component */}
      <NavBar />

      {/* Main content area */}
      <div className="py-40 text-white" style={backgroundStyles}>
        {/* Render the Tabs component */}
        <Tabs />
      </div>
    </>
  );
};

export default Certification; // Export Certification component
