import React, { useState } from 'react';

const OwnMindMap = () => {
  // State to manage the user's custom roadmap
  const [customRoadmap, setCustomRoadmap] = useState([]);

  const handleAddPhase = () => {
    // Function to add a new phase to the custom roadmap
    const newPhase = {
      title: `Phase ${customRoadmap.length + 1}`,
      description: 'Description of the phase',
    };
    setCustomRoadmap([...customRoadmap, newPhase]);
  };

  return (
    <div>
      <h2>Create Your Own Roadmap</h2>
      <button onClick={handleAddPhase}>Add Phase</button>
      <div>
        {/* Display each phase in the custom roadmap */}
        {customRoadmap.map((phase, index) => (
          <div key={index}>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnMindMap;
