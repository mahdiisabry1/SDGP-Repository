import React from 'react';

export const ResetButton = ({ resetBoard }) => {
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

    const hoverStyle = {
        backgroundColor: 'rgb(0, 119, 255)',
    };

    return (
        <button
            style={{ ...buttonStyle }}
            onMouseEnter={() => this.setState(hoverStyle)}
            onMouseLeave={() => this.setState(buttonStyle)}
            onClick={resetBoard}
        >
            Reset
        </button>
    );
};
