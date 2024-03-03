import React, { useState } from 'react';

const ReactMindmap = () => {
  return (
    <div className="p-48 text-black">
      <h1 className="text-3xl font-bold mb-4">MindMap to React</h1>
      <p className="mb-6">
        This mindmap provides a structured path to explore and learn in the field of React development.
      </p>

      <div className="flex flex-col space-y-4">
      <DropdownRoadmapItem
          title="1. HTML, CSS, and JavaScript Fundamentals:"
          description="Make sure you have a solid understanding of HTML, CSS, and JavaScript before diving into React. Understanding ES6+ JavaScript features is particularly helpful."
        />
        

        <DropdownRoadmapItem
          title="2. Learn React Basics"
          description="Start by understanding the core concepts of React such as components, JSX (JavaScript XML), props, state, and the component lifecycle."
        />
        

        <DropdownRoadmapItem
          title="3. Setting Up Your Development Environment:"
          description="Set up Node.js and npm (Node Package Manager) if you haven't already.
          Choose a code editor or IDE (Integrated Development Environment) such as Visual Studio Code, Atom, or Sublime Text.
          Install create-react-app globally or use it to bootstrap your React projects."
        />
        

        <DropdownRoadmapItem
          title="4.Understanding Components:"
          description="Dive deeper into React components and their types (functional and class components).
          Learn about props, state, and when to use each."
        />
       

        <DropdownRoadmapItem
          title="5. React Routing:"
          description="Learn how to set up routing in React using libraries like React Router.
          Understand concepts like routes, route parameters, and nested routes."
        />
        

        <DropdownRoadmapItem
          title="6. Managing State:"
          description="Explore different state management solutions such as React's built-in state management, Context API, or external libraries like Redux or MobX.
          Understand when and why to use each solution."
        />
        

        <DropdownRoadmapItem
          title="7. Using Hooks:"
          description="Learn about React Hooks, introduced in React 16.8, which allow you to use state and other React features without writing a class.
          Explore commonly used hooks like useState, useEffect, useContext, etc."
        />
       
        <DropdownRoadmapItem
          title="8. API Calls and Data Handling:"
          description="Learn how to make HTTP requests from your React application using libraries like Axios or the built-in Fetch API.
          Understand how to handle asynchronous operations and update your UI based on data fetched from APIs."
        />
        

        <DropdownRoadmapItem
          title="9. Styling in React:"
          description="Explore different approaches to styling React components such as inline styles, CSS modules, CSS-in-JS libraries like styled-components, or using traditional CSS files."
        />
        

        <DropdownRoadmapItem
          title="10. Testing React Applications:"
          description="Learn about testing React components using tools like Jest and React Testing Library.
          Understand the importance of writing unit tests and integration tests for your components."
        />
       

        <DropdownRoadmapItem
          title="11. Deployment:"
          description="Learn how to deploy your React application to production.
          Explore different hosting platforms like Netlify, Vercel, or AWS Amplify."
        />
        

        <DropdownRoadmapItem
          title="12. Continuous Learning and Practice:"
          description="Stay updated with the latest features and best practices in React by following official documentation, blogs, and community discussions.
          Build projects and practice regularly to solidify your understanding."
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

const DropdownRoadmapItem = ({ title, description }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md relative">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <span>{isDropdownOpen ? '▲' : '▼'}</span>
      </div>
      {isDropdownOpen && (
        <div className="mt-2">
          <p>{description}</p>
          {/* Add more dropdown content as needed */}
        </div>
      )}
    </div>
  );
};

export default ReactMindmap;