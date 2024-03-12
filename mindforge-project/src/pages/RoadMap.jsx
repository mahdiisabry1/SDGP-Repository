import React, { useState } from 'react';

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
    backgroundSize: 'cover',
    backgroundImage: 'url("https://gteches.com/wp-content/uploads/2023/05/Full-Stack-3.gif")',
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
    openMindmap(phase);
  };

  const openMindmap = (phase) => {
    const components = {
      'Course 1: React': 'ReactMindmap',
      'Course 2: Angular': 'AngularMindmap',
      'Course 3: Front-End': 'FEMindmap',
      'Course 4: Back-End': 'BEMindmap',
      'Course 5: Full-Stack': 'FSMindmap',
    };

    const componentName = components[phase.title];

    if (componentName) {
      const url = `/path-to-components/${componentName}`;
      window.open(url, '_blank');
    }
  };

  const phases = [
    {
      title: "Course 1: React",
      path: "/path-to-components/ReactMindmap",
      description: "JavaScript library for building user interfaces",
      customColor: "#61dafb",
      backgroundImage: "url('path-to-background-image2.jpg')",
    },
    {
      title: "Course 2: Angular",
      path: "/path-to-components/AngularMindmap",
      description: "TypeScript-based open-source framework",
      customColor: "#dd1b16",
      backgroundImage: "url('path-to-background-image2.jpg')",
    },
    {
      title: "Course 3: Front-End",
      path: "/path-to-components/FEMindmap.jsx",
      description:
        "Involves creating the visual and interactive elements of a web application",
      customColor: "#4caf50",
      backgroundImage: "url('path-to-background-image2.jpg')",
    },
    {
      title: "Course 4: Back-End",
      path: "/path-to-components/BEMindmap.jsx",
      description: "Enabling communication between the front end and databases",
      customColor: "#673ab7",
      backgroundImage: "url('path-to-background-image2.jpg')",
    },
    {
      title: "Course 5: Full-Stack",
      path: "/path-to-components/FSMindmap.jsx",
      description: "Proficient in both front-end and back-end development",
      customColor: "#ff5722",
      backgroundImage: "url('path-to-background-image2.jpg')",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Choose Your MindMap Here :</h2>
      <div>
        {phases.map((phase, index) => (
          <div
            key={index}
            style={{
              ...phaseStyle,
              backgroundColor: `${phase.customColor}50`,
              backgroundImage: phase.backgroundImage,
            }}
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
