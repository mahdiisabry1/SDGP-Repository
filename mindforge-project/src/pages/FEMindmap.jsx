import React, { useState } from 'react';
import './RoadMap.css';

const FEMindmap = () => {
  return (
    <div className="p-48 text-black">
      <h1 className="text-3xl font-bold mb-4 question">MindMap to Front-End</h1>
      <p className="mb-6">
      This MindMap provides a structured path to explore and learn in the field of Front-End development.
      </p>

      <div className="flex flex-col space-y-4">

        <DropdownRoadmapItem
          title="1. Basic Web Technologies:"
          description="Learn HTML5: Understand the structure of web pages.
          Learn CSS3: Learn styling and layout techniques.
          Learn JavaScript: Master the fundamentals of programming and DOM manipulation."
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
          title="2. Responsive Web Design:"
          description="Understand the principles of responsive design.
          Learn CSS frameworks like Bootstrap or Tailwind CSS.
          Dive into media queries for custom responsive design solutions."
          clickableParagraphs={[
            { label: 'Tailwind Website', link: 'https://tailwindcss.com/' },
            { label: 'Tailwind CSS Full Course for Beginners', link: 'https://www.youtube.com/watch?v=lCxcTsOHrjo' },
            { label: 'Tailwind CSS Crash Course', link: 'https://www.youtube.com/watch?v=UBOj6rqRUME' },

            { label: 'Bootstrap Website', link: 'https://getbootstrap.com/' },
            { label: 'Bootstrap Get Started', link: 'https://www.w3schools.com/bootstrap/bootstrap_get_started.asp' },
            { label: 'Bootstrap Studio', link: 'https://bootstrapstudio.io/' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="3. Version Control:"
          description="Learn Git: Understand version control basics, branching, merging, and collaborating on code."
          clickableParagraphs={[
            { label: 'Version Control System Introduction', link: 'https://www.youtube.com/watch?v=zbKdDsNNOhg' },
            { label: 'Git & GitHub Crash Course For Beginners', link: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc' },
            { label: 'Learn Git in 20 Minutes', link: 'https://youtu.be/Y9XZQO1n_7c?t=21' },
            { label: 'Learn Git by Atlassian', link: 'https://www.atlassian.com/git' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="4. CSS Preprocessors and Build Tools:"
          description="Learn Sass or Less: Enhance your CSS workflow with features like variables, mixins, and nesting.
          Familiarize yourself with build tools like Webpack or Parcel for automating tasks."
          clickableParagraphs={[
            { label: 'webpack is a static module bundler for modern JavaScript applications', link: 'https://webpack.js.org/' },
            { label: 'Vite Next Generation Frontend Tooling', link: 'https://vitejs.dev/' },
            { label: 'Parcel is a zero configuration build tool for the web ', link: 'https://parceljs.org/' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="5. JavaScript Libraries and Frameworks:"
          description="Learn jQuery: Understand DOM manipulation and event handling.
          Master a modern JavaScript framework like React, Angular, or Vue.js.
          Explore state management libraries like Redux (for React) or Vuex (for Vue.js).
          Understand asynchronous JavaScript and concepts like Promises and async/await."
          clickableParagraphs={[
            { label: 'What is the difference between a framework and a library?', link: 'https://www.youtube.com/watch?v=D_MO9vIRBcA' },
            { label: 'Which JS Framework is best?', link: 'https://www.youtube.com/watch?v=cuHDQhDhvPE' },
            { label: 'React Website', link: 'https://react.dev/' },
            { label: 'Vue.js Website', link: 'https://vuejs.org/' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="6. Front-end Architecture:"
          description="Learn about component-based architecture.
          Understand the concepts of reusability, maintainability, and scalability.
          Explore design patterns like MVC (Model-View-Controller) or MVVM (Model-View-ViewModel)."
          clickableParagraphs={[
            { label: 'A Look at Some CSS Methodologies', link: 'https://www.webfx.com/blog/web-design/css-methodologies/' },
            { label: 'BEM Official Website', link: 'https://en.bem.info/' },
            { label: 'OOCSS Official Website', link: 'http://oocss.org/' },
            { label: 'SMACSS Official Website', link: 'http://smacss.com/ ' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="7. APIs and AJAX:"
          description="Learn how to make asynchronous requests to APIs using fetch or Axios.
          Understand RESTful APIs and how to consume them."
          clickableParagraphs={[
            { label: 'Fetch API MDN Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
            { label: 'A Simple Guide to JavaScript Fetch API', link: 'https://www.javascripttutorial.net/javascript-fetch-api/' },
            { label: 'Introduction to Fetch', link: 'https://web.dev/introduction-to-fetch/' },
            { label: 'JavaScript Fetch API', link: 'https://www.youtube.com/watch?v=-ZI0ea5O2oA' },
          
          ]}
        />

        <DropdownRoadmapItem
          title="8. Testing:"
          description="Learn testing frameworks like Jest (for React), Jasmine, or Mocha.
          Understand unit testing, integration testing, and end-to-end testing."
          clickableParagraphs={[
            { label: 'A comprehensive dive into software testing', link: 'https://www.softwaretestingmaterial.com/software-testing/' },
            { label: 'The different types of software tests', link: 'https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing' },
            { label: 'Testing React apps with Jest', link: 'https://jestjs.io/docs/tutorial-react' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="9. Progressive Web Apps (PWAs):"
          description="Understand the principles of PWAs: reliability, performance, and engagement.
          Learn service workers for offline capabilities and caching strategies."
          clickableParagraphs={[
            { label: 'Progressive Web Apps for Beginners', link: 'https://www.freecodecamp.org/news/what-are-progressive-web-apps/' },
            { label: 'Learn PWA', link: 'https://web.dev/learn/pwa/' },
            { label: 'MDN Web Docs: Progressive Web Apps', link: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/' },
            { label: 'Build a Progressive Web App', link: 'https://www.youtube.com/watch?v=sFsRylCQblw' },
           
          ]}
        />

        <DropdownRoadmapItem
          title="10. Build Tools and Task Runners:"
          description="Explore task runners like Gulp or Grunt for automating repetitive tasks.
          Learn about module bundlers like Webpack for bundling JavaScript files."

          clickableParagraphs={[
            { label: 'npm script', link: 'https://docs.npmjs.com/cli/v8/using-npm/scripts' },
            { label: 'yarn script', link: 'https://classic.yarnpkg.com/lang/en/docs/cli/run/#toc-yarn-run-script' },
            { label: 'Vite Next Generation Frontend Tooling', link: 'https://vitejs.dev/' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="11. Package Managers:"
          description="Understand package managers like npm or Yarn for managing project dependencies."
          clickableParagraphs={[
            { label: 'Modern JavaScript for Dinosaurs', link: 'https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html' },
            { label: 'An Absolute Beginners Guide to Using npm', link: 'https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/' },
            { label: 'Yarn - Getting Started', link: 'https://yarnpkg.com/en/docs/getting-started' },
            { label: 'NPM tutorial for Beginners', link: 'https://www.youtube.com/watch?v=2V1UUhBJ62Y' },
            { label: 'NPM Crash Course', link: 'https://www.youtube.com/watch?v=jHDhaSSKmB0' },
            { label: 'Yarn Crash Course', link: 'Yarn Crash Course' },
        
          ]}
        />

        <DropdownRoadmapItem
          title="12. Browser Developer Tools:"
          description="Master browser developer tools for debugging, profiling, and optimizing web applications."
          clickableParagraphs={[
            { label: '19 Essential Tools for Front End Developers', link: 'https://www.wearedevelopers.com/magazine/best-tools-for-front-end-development' },
            { label: 'Front End Development Tools You Should Know', link: 'https://www.linkedin.com/pulse/10-essential-front-end-development-tools-you-should-know-ferchichi-6yy1f' },
            
          ]}
        />

        <DropdownRoadmapItem
          title="13. Cross-Browser Compatibility:"
          description="Learn about browser compatibility issues and how to address them.
          Understand vendor prefixes and polyfills."
          clickableParagraphs={[
            { label: 'Best Practices for Cross-Browser Compatibility', link: 'https://www.linkedin.com/pulse/best-practices-cross-browser-compatibility-front-end-ivo' },
            { label: 'Cross-Browser Compatibility - Front-End Curriculum', link: 'https://frontend.turing.edu/lessons/module-2/cross-browser-compat.html' },
          
          ]}
        />

        <DropdownRoadmapItem
          title="14. Web Performance Optimization:"
          description="Learn techniques to optimize website performance, such as code splitting, lazy loading, and image optimization."
          clickableParagraphs={[
            { label: 'Frontend Optimization', link: 'https://www.keycdn.com/blog/frontend-optimization' },
            { label: 'Optimizing Performance in Frontend Development', link: 'https://www.linkedin.com/pulse/optimizing-performance-frontend-development-tips-fatima-modupe-bello' },
          
          ]}
        />

        <DropdownRoadmapItem
          title="15. Continuous Integration and Deployment (CI/CD):"
          description="Learn about CI/CD pipelines for automating the build, test, and deployment process."
          clickableParagraphs={[
            { label: 'Developing an effective CI/CD pipeline for frontend apps', link: 'https://blog.logrocket.com/best-practices-ci-cd-pipeline-frontend/' },
            { label: 'Create a CI/CD Pipeline for Front End Projects', link: 'https://blog.openreplay.com/create-a-ci-cd-pipeline-for-front-end-projects/' },
           
          ]}
        />

       <DropdownRoadmapItem
          title="16. Accessibility:"
          description="Understand accessibility guidelines and ensure your web applications are accessible to all users."
          clickableParagraphs={[
            { label: 'Developing for Web Accessibility by W3C WAI', link: 'https://www.w3.org/WAI/tips/developing/' },
            { label: 'Accessibility Tutorial', link: 'https://www.w3schools.com/accessibility/index.php' },
            { label: 'A Complete Guide To Accessible Front-End Components', link: 'https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/' },
            { label: 'Complete Playlist on Accessibility', link: 'https://youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g' },
            { label: 'Web Accessibility by Udacity', link: 'https://www.udacity.com/course/web-accessibility--ud891' },
           
          ]}
        />

       
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
    <div className={`bg-gray-100 p-4 rounded-md relative dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <div className="flex items-center justify-between cursor-pointer question" onClick={toggleDropdown}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <span>{isDropdownOpen ? '▲' : '▼'}</span>
      </div>
      {isDropdownOpen && (
        <div className="mt-2 dropdown-menu">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default FEMindmap;
