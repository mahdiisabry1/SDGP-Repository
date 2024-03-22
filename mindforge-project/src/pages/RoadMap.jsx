import { useState } from "react";
import NavBar from "../components/NavBar";
import CreatedRoadmaps from "../components/CreatedRoadmaps";

const RoadMap = () => {
  // State to manage the selected phase
  const [selectedPhase, setSelectedPhase] = useState(null);

  const containerStyle = {
    // Styles for the container
    padding: "2.5rem 1.5rem",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    marginTop: "6%",
  };

  const titleStyle = {
    // Styles for the title
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textAlign: "center",
  };

  // Styles for each phase
  const phaseStyle = {
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundImage:
      'url("https://gteches.com/wp-content/uploads/2023/05/Full-Stack-3.gif")', // Default background image
  };

  const circleStyle = {
    // Styles for the circle indicating phase
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    marginRight: "1.5rem",
  };

  const phaseTitleStyle = {
    // Styles for the phase title
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  // Styles for the phase description
  const phaseDescriptionStyle = {
    color: "#a0a0a0",
  };

  // Function to handle phase click
  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase);
    openMindmap(phase); // Call the openMindmap function passing the selected phase
    if (phase.title === "Create Your Own Roadmap") {
      // Handle custom roadmap creation
      // For now, you can just console.log or implement custom logic as needed
      console.log("Custom roadmap creation clicked");
    } else {
      openMindmap(phase); // Call the openMindmap function passing the selected phase
    }
  };

  const openMindmap = (phase) => {
    // Function to open the mindmap based on the selected phase
    const components = {
      "Course 1: React": "ReactMindmap",
      "Course 2: Angular": "AngularMindmap", // Map phase titles to component names
      "Course 3: Front-End": "FEMindmap",
      "Course 4: Back-End": "BEMindmap",
      "Course 5: Full-Stack": "FSMindmap",
      "Create Your Own Mindmap": "ownMindMap",
    };

    const componentName = components[phase.title]; // Get the component name based on the selected phase

    if (componentName) {
      // If a valid component name is found, open the corresponding mindmap
      const url = `/path-to-components/${componentName}`;
      window.open(url, "_blank"); // Update the path to your components
    }
  };

  const phases = [
    // Array containing information about each phase
    {
      title: "Course 1: React",
      path: "/path-to-components/ReactMindmap",
      description: "JavaScript library for building user interfaces",
      customColor: "#61dafb",
      backgroundImage: "url('path-to-background-image2.jpg')", // Update background image path
    },
    {
      title: "Course 2: Angular",
      path: "/path-to-components/AngularMindmap",
      description: "TypeScript-based open-source framework",
      customColor: "#dd1b16",
      backgroundImage: "url('path-to-background-image2.jpg')", // Update background image path
    },
    {
      title: "Course 3: Front-End",
      path: "/path-to-components/FEMindmap.jsx",
      description:
        "Involves creating the visual and interactive elements of a web application",
      customColor: "#4caf50",
      backgroundImage: "url('path-to-background-image2.jpg')", // Update background image path
    },
    {
      title: "Course 4: Back-End",
      path: "/path-to-components/BEMindmap.jsx",
      description: "Enabling communication between the front end and databases",
      customColor: "#673ab7",
      backgroundImage: "url('path-to-background-image2.jpg')", // Update background image path
    },
    {
      title: "Course 5: Full-Stack",
      path: "/path-to-components/FSMindmap.jsx",
      description: "Proficient in both front-end and back-end development",
      customColor: "#ff5722",
      backgroundImage: "url('path-to-background-image2.jpg')", // Update background image path
    },
    {
      title: "Create Your Own Mindmap",
      path: "/path-to-components/ownMindMap.jsx",
      description: "Design your own learning path",
      customColor: "#DCF00C",
      backgroundImage: "url('path-to-background-image3.jpg')", // Update background image path
    },
  ];

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        {/* Container div with custom styles */}
        <h2 style={titleStyle}>Choose Your MindMap Here :</h2>
        {/* Title */}
        <div>
          {/* Mapping over each phase */}
          {phases.map((phase, index) => (
            <div
              key={index} // Unique key for each phase
              style={{
                // Inline styles for each phase
                ...phaseStyle, // Merging phase styles
                backgroundColor: `${phase.customColor}50`, // Background color with alpha based on custom color
                backgroundImage: phase.backgroundImage, // Background image
              }}
              onClick={() => handlePhaseClick(phase)} // Click handler for phase selection
            >
              <div
                style={{ ...circleStyle, backgroundColor: phase.customColor }}
              ></div>
              {/* Circle indicating phase */}

              <div>
                <h3 style={phaseTitleStyle}>{phase.title}</h3>
                <p style={phaseDescriptionStyle}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
        <CreatedRoadmaps />
      </div>
      
    </>
  );
};

export default RoadMap;
