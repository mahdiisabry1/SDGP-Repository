import React, { useState } from 'react';

const BirthdateSelector = () => {
  const [birthdate, setBirthdate] = useState(null);

  const handleDateChange = (event) => {
    setBirthdate(event.target.value);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
      <label htmlFor="birthdate" style={{ marginRight: '10px' }}>Select Birthdate:</label>
      <input 
        type="date" 
        id="birthdate" 
        name="birthdate" 
        value={birthdate} 
        onChange={handleDateChange} 
        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} 
      />
      {birthdate && (
        <p style={{ marginTop: '10px' }}>Selected Birthdate: {birthdate}</p>
      )}
      <button 
        style={{ 
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default BirthdateSelector;

