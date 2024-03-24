import React, { useState } from 'react';

// Define a functional component called ResetButton
export const ResetButton = ({ resetBoard }) => {
    const [hovered, setHovered] = useState(false); // State to track hover

    // Define inline styles for the button
    const buttonStyle = {
        border: 'none',
        borderRadius: '0.5rem',
        backgroundColor: hovered ? 'rgb(236, 70, 70)' : 'rgb(198, 17, 17)',
        color: 'white',
        fontSize: '1.5rem',
        padding: '0.5rem 1rem',
        margin: '2rem auto',
        display: 'block',
        boxShadow: hovered ? '10px 10px 10px rgba(0, 0, 0, 1)' : 'none', // Add box-shadow on hover
        transition: 'background-color 0.3s, box-shadow 0.3s', // Add transition for smooth effect
    }
    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };


    // Return JSX for the ResetButton component
    return (
        <button
            style={{ ...buttonStyle }}
            onMouseEnter={handleMouseEnter} // Call handleMouseEnter on mouse enter
            onMouseLeave={handleMouseLeave} // Call handleMouseLeave on mouse leave
            onClick={resetBoard}
        >
            Reset {/* Button text */}
        </button>
    );
};