const ReactMindmap = () => {
    return (
      <div className="p-48 text-black">
        <h1 className="text-3xl font-bold mb-4">Development Roadmap</h1>
        <p className="mb-6">
          This roadmap provides a structured path to explore and learn in the field of React development.
        </p>
  
        <div className="flex flex-col space-y-4">
          <RoadmapItem
            title="Getting Started"
            description="Understand the basics of React, set up your development environment, and create your first React app."
          />
  
          <RoadmapItem
            title="Component Fundamentals"
            description="Learn about React components, props, and state. Dive into component lifecycle methods."
          />
  
          <RoadmapItem
            title="Routing with React Router"
            description="Explore React Router to add navigation and routing to your React applications."
          />
  
          {/* Add more roadmap items as needed */}
        </div>
      </div>
    );
  };
  
  const RoadmapItem = ({ title, description }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ReactMindmap;
  