import { useState } from 'react';

const RoadMap = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const containerStyle = {
    padding: '2.5rem 1.5rem',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    marginTop: '6%',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const phaseStyle = {
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const circleStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    marginRight: '1.5rem',
  };

  const phaseTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const phaseDescriptionStyle = {
    color: '#a0a0a0',
  };

  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase);
    openMindmap(); // Call the function to use selectedPhase
  };

  const openMindmap = () => {
    // You can use the selectedPhase state here or pass it to another function
    console.log("Selected Phase:", selectedPhase);

    // Example: You can perform some actions with selectedPhase
    // For demonstration purposes, let's open the mindmap in a new window
    window.open('/mindmap', '_blank');
  };

  const phases = [
    { title: 'Course 1: React', description: 'JavaScript library for building user interfaces', customColor: '#61dafb' },
    { title: 'Course 2: Angular', description: 'TypeScript-based open-source framework', customColor: '#dd1b16' },
    { title: 'Course 3: Front-End', description: 'Involves creating the visual and interactive elements of a web application', customColor: '#4caf50' },
    { title: 'Course 4: Back-End', description: 'Enabling communication between the front end and databases', customColor: '#673ab7' },
    { title: 'Course 5: Full-Stack', description: 'Proficient in both front-end and back-end development', customColor: '#ff5722' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Choose Your MindMap Here :</h2>
      <div>
        {phases.map((phase, index) => (
          <div
            key={index}
            style={{ ...phaseStyle, backgroundColor: `${phase.customColor}50` }}
            onClick={() => handlePhaseClick(phase)}
          >
            <div style={{ ...circleStyle, backgroundColor: phase.customColor }}></div>
            <div>
              <h3 style={phaseTitleStyle}>{phase.title}</h3>
              <p style={phaseDescriptionStyle}>{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
