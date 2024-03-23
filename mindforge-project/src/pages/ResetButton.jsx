import React from 'react';

// Define a functional component called ResetButton
export const ResetButton = ({ resetBoard }) => {
    // Define inline styles for the button
    const buttonStyle = {
        border: 'none',
        borderRadius: '0.5rem',
        backgroundColor: 'rgb(0, 110, 255)',
        color: 'white',
        fontSize: '2rem',
        padding: '0.5rem 1rem',
        margin: '2rem auto',
        display: 'block',
    };

    // Define hover style for the button
    const hoverStyle = {
        backgroundColor: 'rgb(0, 119, 255)',
    };

    // Return JSX for the ResetButton component
    return (
        <button
            style={{ ...buttonStyle }} // Apply buttonStyle as inline style
            onMouseEnter={() => this.setState(hoverStyle)} // Change button style on hover
            onMouseLeave={() => this.setState(buttonStyle)} // Revert button style on mouse leave
            onClick={resetBoard} // Call resetBoard function on button click
        >
            Reset {/* Button text */}
        </button>
    );
};
