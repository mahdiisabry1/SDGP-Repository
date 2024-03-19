import React from 'react';

export const Box = ({ value, onClick }) => {
    const style = {
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '10%',
        boxShadow: '0px 0px 8px #888888',
        width: '5rem',
        height: '5rem',
        textAlign: 'center',
        fontSize: '5em',
        fontFamily: '"Fredoka", sans-serif',
        fontWeight: 'bold',
        lineHeight: '5rem',
        margin: '0.5rem',
        color: value === 'X' ? 'rgb(255, 70, 37)' : 'rgb(44, 135, 255)',
    };

    const hoverStyle = {
        boxShadow: '0px 0px 15px #888888',
    };

    return (
        <button
            style={{ ...style, ...(value && hoverStyle) }}
            onClick={onClick}
        >
            {value}
        </button>
    );
};
