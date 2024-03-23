import React from 'react';

// Box component representing each cell in the Tic-Tac-Toe board
export const Box = ({ value, onClick }) => {
    // Style for the box
    const style = {
        backgroundColor: '#ffffff', // Background color
        border: 'none', // No border
        borderRadius: '10%', // Rounded corners
        boxShadow: '0px 0px 8px #888888', // Box shadow
        width: '5rem', // Width
        height: '5rem', // Height
        textAlign: 'center', // Center text horizontally
        fontSize: '5em', // Font size
        fontFamily: '"Fredoka", sans-serif', // Font family
        fontWeight: 'bold', // Font weight
        lineHeight: '5rem', // Line height
        margin: '0.5rem', // Margin
        color: value === 'X' ? 'rgb(255, 70, 37)' : 'rgb(44, 135, 255)', // Text color based on value ('X' or 'O')
    };

    // Style for hover effect
    const hoverStyle = {
        boxShadow: '0px 0px 15px #888888', // Increase box shadow on hover
    };

    return (
        // Button representing the box, with dynamic style based on value and hover
        <button
            style={{ ...style, ...(value && hoverStyle) }} // Apply both style and hoverStyle if value exists
            onClick={onClick} // Handle click event
        >
            {value} {/* Display value ('X', 'O', or empty) */}
        </button>
    );
};
