import React, { useState } from 'react';

const FEMindmap = () => {
  return (
    <div className="p-48 text-black">
      <h1 className="text-3xl font-bold mb-4">Mindmap to Front-End</h1>
      <p className="mb-6">
        This roadmap provides a structured path to explore and learn in the field of Front-End development.
      </p>

      <div className="flex flex-col space-y-4">

        <DropdownRoadmapItem
          title="1. Basic Web Technologies:"
          description="Learn HTML5: Understand the structure of web pages.
          Learn CSS3: Learn styling and layout techniques.
          Learn JavaScript: Master the fundamentals of programming and DOM manipulation."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="2. Responsive Web Design:"
          description="Understand the principles of responsive design.
          Learn CSS frameworks like Bootstrap or Tailwind CSS.
          Dive into media queries for custom responsive design solutions."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="3. Version Control:"
          description="Learn Git: Understand version control basics, branching, merging, and collaborating on code."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="4. CSS Preprocessors and Build Tools:"
          description="Learn Sass or Less: Enhance your CSS workflow with features like variables, mixins, and nesting.
          Familiarize yourself with build tools like Webpack or Parcel for automating tasks."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="5. JavaScript Libraries and Frameworks:"
          description="Learn jQuery: Understand DOM manipulation and event handling.
          Master a modern JavaScript framework like React, Angular, or Vue.js.
          Explore state management libraries like Redux (for React) or Vuex (for Vue.js).
          Understand asynchronous JavaScript and concepts like Promises and async/await."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="6. Front-end Architecture:"
          description="Learn about component-based architecture.
          Understand the concepts of reusability, maintainability, and scalability.
          Explore design patterns like MVC (Model-View-Controller) or MVVM (Model-View-ViewModel)."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="7. APIs and AJAX:"
          description="Learn how to make asynchronous requests to APIs using fetch or Axios.
          Understand RESTful APIs and how to consume them."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="8. Testing:"
          description="Learn testing frameworks like Jest (for React), Jasmine, or Mocha.
          Understand unit testing, integration testing, and end-to-end testing."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="9. Progressive Web Apps (PWAs):"
          description="Understand the principles of PWAs: reliability, performance, and engagement.
          Learn service workers for offline capabilities and caching strategies."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="10. Build Tools and Task Runners:"
          description="Explore task runners like Gulp or Grunt for automating repetitive tasks.
          Learn about module bundlers like Webpack for bundling JavaScript files."

          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="11. Package Managers:"
          description="Understand package managers like npm or Yarn for managing project dependencies."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="12. Browser Developer Tools:"
          description="Master browser developer tools for debugging, profiling, and optimizing web applications."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="13. Cross-Browser Compatibility:"
          description="Learn about browser compatibility issues and how to address them.
          Understand vendor prefixes and polyfills."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="14. Web Performance Optimization:"
          description="Learn techniques to optimize website performance, such as code splitting, lazy loading, and image optimization."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="15. Continuous Integration and Deployment (CI/CD):"
          description="Learn about CI/CD pipelines for automating the build, test, and deployment process."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

       <DropdownRoadmapItem
          title="16. Accessibility:"
          description="Understand accessibility guidelines and ensure your web applications are accessible to all users."
          clickableParagraphs={[
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            { label: '', link: '' },
            
          ]}
        />

        {/* Add more roadmap items as needed */}
      </div>
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

export default FEMindmap;
