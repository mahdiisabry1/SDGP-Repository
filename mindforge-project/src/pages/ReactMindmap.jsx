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
          clickableParagraphs={[
            
            { label: 'W3Schools', link: 'https://www.w3schools.com/html/html_intro.asp' },
            { label: 'htmlreference.io', link: 'https://htmlreference.io/' },
            { label: 'HTML For Beginners The Easy Way', link: 'https://html.com/' },
            { label: 'Web Development Basics', link: 'https://internetingishard.netlify.app/html-and-css/index.html' },
            { label: 'Codecademy - Learn HTML', link: 'https://www.codecademy.com/learn/learn-html' },
            { label: 'HTML Full Course for Beginners | Complete All-in-One Tutorial', link: 'https://youtu.be/mJgBOIoGihA' },
            { label: 'HTML Full Course - Build a Website Tutorial', link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg' },
            { label: 'HTML Tutorial for Beginners: HTML Crash Course', link: 'https://www.youtube.com/watch?v=qz0aGYrrlhU' },
            
            { label: 'The Odin Project', link: 'https://www.theodinproject.com//' },
            { label: 'What The Flexbox!', link: 'https://flexbox.io/' },
            { label: 'W3Schools — Learn CSS', link: 'https://www.w3schools.com/css/' },
            { label: 'freeCodeCamp — Responsive Web ', link: 'https://www.freecodecamp.org/learn/responsive-web-design/' },
            { label: 'CSS Masterclass - Tutorial & Course for Beginners', link: 'Designhttps://www.youtube.com/watch?v=FqmB-Zj2-PA' },
            { label: 'Joshw Comeaus CSS Hack Blog Posts', link: 'https://www.joshwcomeau.com/' },
            
            { label: 'Visit Dedicated JavaScript Roadmap', link: 'https://roadmap.sh/javascript' },
            { label: 'W3Schools – JavaScript Tutorial', link: 'https://www.w3schools.com/js/' },
            { label: 'The Modern JavaScript Tutorial', link: 'https://javascript.info/' },
            { label: 'JavaScript Crash Course for Beginners', link: 'https://youtu.be/hdI2bqOjy3c?t=2' },
            { label: 'JavaScript for Beginners', link: 'https://www.scaler.com/topics/course/javascript-beginners' },
          ]}
        />
        

        <DropdownRoadmapItem
          title="2. Learn React Basics"
          description="Start by understanding the core concepts of React such as components, JSX (JavaScript XML), props, state, and the component lifecycle."
          clickableParagraphs={[
            { label: 'Tutorial: Intro to React', link: 'https://legacy.reactjs.org/tutorial/tutorial.html' },
            { label: 'React Basics', link: 'https://www.coursera.org/learn/react-basics' },
            { label: 'Learn React Basics in 10 Minutes', link: 'https://www.freecodecamp.org/news/learn-react-basics-in-10-minutes/' },
            { label: 'React Tutorial for Beginners', link: 'https://www.youtube.com/watch?v=SqcY0GlETPk' },
            { label: 'React JS Basic Concepts Reference', link: 'https://www.geeksforgeeks.org/reactjs-basics-concepts-complete-reference/' },  
          ]}
        />
        

        <DropdownRoadmapItem
          title="3. Setting Up Your Development Environment:"
          description="Set up Node.js and npm (Node Package Manager) if you haven't already.
          Choose a code editor or IDE (Integrated Development Environment) such as Visual Studio Code, Atom, or Sublime Text.
          Install create-react-app globally or use it to bootstrap your React projects."
          clickableParagraphs={[
            { label: 'Setting up the development environment', link: 'https://reactnative.dev/docs/environment-setup' },
            { label: 'What Is a Development Environment? How to Get Started', link: 'https://www.plutora.com/blog/what-development-environment-how-get-started-now' },
            { label: 'Set up your development environment', link: 'https://developer.android.com/design-for-safety/privacy-sandbox/setup' },
            { label: 'What is a Development Environment? What is an IDE?', link: 'https://umbraco.com/knowledge-base/development-environment/' },
            
          ]}
        />
        

        <DropdownRoadmapItem
          title="4.Understanding Components:"
          description="Dive deeper into React components and their types (functional and class components).
          Learn about props, state, and when to use each."
          clickableParagraphs={[
            { label: 'Creating and nesting components', link: 'https://react.dev/learn#components' },
            { label: 'Explore the different types of components in React', link: 'https://www.robinwieruch.de/react-component-types/' },
            { label: 'What is the difference between components, elements, and instances?', link: 'https://www.robinwieruch.de/react-element-component/' },
           
          ]}
        />
       

        <DropdownRoadmapItem
          title="5. React Routing:"
          description="Learn how to set up routing in React using libraries like React Router.
          Understand concepts like routes, route parameters, and nested routes."
          clickableParagraphs={[
            { label: 'How to use Routing in React JS: A Comprehensive Guide', link: 'https://blog.logrocket.com/react-router-v6-guide/' },
            { label: 'React Router 6 – Tutorial for Beginners.', link: 'https://www.youtube.com/watch?v=59IXY5IDrBA' },
            { label: 'React Router', link: 'https://www.w3schools.com/react/react_router.asp' },
            { label: 'react Routing', link: 'https://www.geeksforgeeks.org/reactjs-router/' },
            
          ]}
        />
        

        <DropdownRoadmapItem
          title="6. Managing State:"
          description="Explore different state management solutions such as React's built-in state management, Context API, or external libraries like Redux or MobX.
          Understand when and why to use each solution."
          clickableParagraphs={[
            { label: 'What is State Management?', link: 'https://www.techtarget.com/searchapparchitecture/definition/state-management' },
            { label: 'Overview of State in React', link: 'https://www.robinwieruch.de/react-state/' },
 
          ]}
        />
        

        <DropdownRoadmapItem
          title="7. Using Hooks:"
          description="Learn about React Hooks, introduced in React 16.8, which allow you to use state and other React features without writing a class.
          Explore commonly used hooks like useState, useEffect, useContext, etc."
          clickableParagraphs={[
            { label: 'Hooks Reference', link: 'https://react.dev/reference/react' },
            { label: 'React Hooks', link: 'https://www.w3schools.com/react/react_hooks.asp' },
            { label: 'Introducing Hooks', link: 'https://legacy.reactjs.org/docs/hooks-intro.html' },
            
          ]}
        />
       
        <DropdownRoadmapItem
          title="8. API Calls and Data Handling:"
          description="Learn how to make HTTP requests from your React application using libraries like Axios or the built-in Fetch API.
          Understand how to handle asynchronous operations and update your UI based on data fetched from APIs."
          clickableParagraphs={[
            { label: 'AJAX and APIs', link: 'https://reactjs.org/docs/faq-ajax.html' },
            { label: 'How to fetch data in React', link: 'https://www.robinwieruch.de/react-hooks-fetch-data/' },
            { label: 'How to Fetch API Data in React', link: 'https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/' },
            { label: 'How to fetch data from an API in ReactJS', link: 'https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/' },
            
          ]}
        />
        

        <DropdownRoadmapItem
          title="9. Styling in React:"
          description="Explore different approaches to styling React components such as inline styles, CSS modules, CSS-in-JS libraries like styled-components, or using traditional CSS files."
          clickableParagraphs={[
            { label: 'Ways to CSS style a React application', link: 'https://www.robinwieruch.de/react-css-styling/' },
            { label: 'Styling React Using CSS', link: 'https://www.w3schools.com/react/react_css.asp' },
            { label: 'Styling and CSS', link: 'https://legacy.reactjs.org/docs/faq-styling.html' },
            { label: 'Styling in React: 5 ways to style React apps', link: 'https://blog.logrocket.com/styling-react-5-ways-style-react-apps/' },
           
          ]}
        />
        

        <DropdownRoadmapItem
          title="10. Testing React Applications:"
          description="Learn about testing React components using tools like Jest and React Testing Library.
          Understand the importance of writing unit tests and integration tests for your components."
          clickableParagraphs={[
            { label: 'What is Software Testing?', link: 'https://www.guru99.com/software-testing-introduction-importance.html' },
            { label: 'Testing Pyramid', link: 'https://www.browserstack.com/guide/testing-pyramid-for-test-automation' },
            { label: 'Testing Overview', link: 'https://legacy.reactjs.org/docs/testing.html' },
            { label: 'How to test React Apps', link: 'https://www.browserstack.com/guide/how-to-test-react-apps' },
            
          ]}
        />
       

        <DropdownRoadmapItem
          title="11. Deployment:"
          description="Learn how to deploy your React application to production.
          Explore different hosting platforms like Netlify, Vercel, or AWS Amplify."
          clickableParagraphs={[
            { label: 'Deployment', link: 'https://create-react-app.dev/docs/deployment/' },
            { label: 'ReactJS - Building & Deployment', link: 'https://www.tutorialspoint.com/reactjs/reactjs_building_deployment.htm' },
            { label: '9 ways to deploy a React app for free', link: 'https://blog.logrocket.com/9-ways-deploy-react-app-free/' },
           
          ]}
        />
        

        <DropdownRoadmapItem
          title="12. Continuous Learning and Practice:"
          description="Stay updated with the latest features and best practices in React by following official documentation, blogs, and community discussions.
          Build projects and practice regularly to solidify your understanding."
          
        />
      
      </div>
    </div>
  );
};


const DropdownRoadmapItem = ({ title, description, clickableParagraphs }) => {
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
          {clickableParagraphs && (
            <div className="mt-2">
              {clickableParagraphs.map((paragraph, index) => (
                <p key={index}>
                  <a href={paragraph.link} target="_blank" rel="noopener noreferrer">
                    {paragraph.label}
                  </a>
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReactMindmap;