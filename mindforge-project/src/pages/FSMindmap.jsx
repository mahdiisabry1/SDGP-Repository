import React, { useState } from 'react';
import './RoadMap.css';

const FSMindmap = () => {
  const containerStyle = {
    backgroundImage: 'url("https://i.gifer.com/origin/14/147205adae7144f46ea934ee831a0a63_w200.gif")', // Specify the path to your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
  };

  const [completedItems, setCompletedItems] = useState([]);

  const markAsCompleted = (title) => {
    if (!completedItems.includes(title)) {
      setCompletedItems([...completedItems, title]);
    }
  };

  return (
    <div className="p-48 text-white" style={containerStyle}>
      <h1 className="text-3xl font-bold mb-4 question">MindMap to Full-Stack</h1>
      <p className="mb-6 font-bold increased-font-size">
     This MindMap provides a structured path to explore and learn in the field of Full Stack development.
      </p>
        <div className="flex flex-col space-y-0">

        <DropdownRoadmapItem
          title="1. Learn the Fundamentals:"
          description="Start with the basics of programming, including concepts like variables, data types, conditionals, loops, and functions.
          Get comfortable with HTML, CSS, and JavaScript, which form the foundation of web development."
          clickableParagraphs={[
            { label: 'What is Full Stack', link: 'https://www.w3schools.com/whatis/whatis_fullstack.asp' },
            { label: 'Fundamentals of Full Stack Web Development', link: 'https://www.go1.com/lo/fundamentals-of-full-stack-web-development/12624881/' },
           
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("1. Learn the Fundamentals:")}
        />

        <DropdownRoadmapItem
          title="2. Frontend Development:"
          description="HTML & CSS: Master semantic HTML and learn modern CSS techniques including Flexbox and Grid layout.
          JavaScript: Dive deeper into JavaScript, understanding ES6+ features, DOM manipulation, asynchronous programming, and modern frameworks/libraries."
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

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("2. Frontend Development:")}
        />
        
        <DropdownRoadmapItem
          title="3. Frontend Frameworks:"
          description="Choose a frontend framework/library like React, Angular, or Vue.js.
          Learn the framework's core concepts, state management (if applicable), routing, and component-based architecture."
          clickableParagraphs={[
            { label: 'React Tutorial', link: 'https://www.w3schools.com/REACT/DEFAULT.ASP' },
            { label: 'React ', link: 'https://www.geeksforgeeks.org/react-tutorial/' },
            { label: 'https://www.youtube.com/watch?v=bMknfKXIFA8', link: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
            { label: 'Angular Crash Course', link: 'https://www.youtube.com/watch?v=3dHNOWTI7H8' },
            { label: 'Angular Tutorial for Beginners', link: 'https://www.youtube.com/watch?v=k5E2AVpwsko' },
            { label: 'Complete Zero to Hero Angular full Tutorial', link: 'https://www.youtube.com/watch?v=CGLdH5ORX-Y' },
            
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("3. Frontend Frameworks:")}
        />

        <DropdownRoadmapItem
          title="4. Backend Development:"
          description="Server-side Language: Pick a backend programming language such as JavaScript (Node.js), Python (Django or Flask), Ruby (Ruby on Rails), Java (Spring Boot), or C# (ASP.NET Core).
          Databases: Understand different types of databases (SQL and NoSQL), and learn how to interact with databases using languages like SQL and ORMs (Object-Relational Mapping) like Sequelize or SQLAlchemy.
          API Development: Learn to build RESTful or GraphQL APIs using frameworks like Express.js (Node.js), Django Rest Framework (Python), or Spring Boot (Java)."
          clickableParagraphs={[
            { label: 'Backend Development Complete Guide', link: 'https://www.geeksforgeeks.org/backend-development/' },
            { label: 'Backend Development', link: 'https://aloa.co/startup-glossary/terms/backend-development?query=back-e%C2%ADnd+development' },
            { label: 'Backend Developer Tutorial', link: 'https://www.youtube.com/watch?v=d2Z40twFohc' },
            { label: 'Become a Backend Developer in 3 Hours', link: 'https://www.youtube.com/watch?v=Wz-zOpzk1Jk' },
           
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("4. Backend Development:")}
        />

        <DropdownRoadmapItem
          title="5. Database Management:"
          description="Explore database management systems like MySQL, PostgreSQL, MongoDB, or Firebase.
          Learn about data modeling, indexing, querying, and database optimization techniques."
          clickableParagraphs={[
            { label: 'DBMS Full Course for Beginners', link: 'https://www.youtube.com/watch?v=c5HAwKX-suM' },
            { label: 'Database Management System Full Course', link: 'https://www.youtube.com/watch?v=8fyy2a5Nqns' },
            { label: 'Introduction of DBMS', link: 'https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/' },
            { label: 'DBMS Tutorial ', link: 'https://www.javatpoint.com/dbms-tutorial' },
        
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("5. Database Management:")}
        />

        <DropdownRoadmapItem
          title="6. Authentication and Authorization:"
          description="Understand authentication methods like JWT (JSON Web Tokens), OAuth, and OAuth2.
          Implement user authentication and authorization in your applications using libraries like Passport.js (Node.js) or Django's authentication system."
          clickableParagraphs={[
            { label: 'Backend Authentication and Authorization Patterns', link: 'https://www.slashid.dev/blog/auth-patterns/' },
           
            
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("6. Authentication and Authorization:")}
        />

        <DropdownRoadmapItem
          title="7. Version Control:"
          description="Learn Git and GitHub/GitLab/Bitbucket for version control and collaboration with other developers."
          clickableParagraphs={[
            { label: 'Version Control System in Backend', link: 'https://talent500.co/blog/version-control-system-in-backend/' },
            { label: 'Version Control Systems', link: 'https://www.geeksforgeeks.org/version-control-systems/' },
          
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("7. Version Control:")}
        />

        <DropdownRoadmapItem
          title="8. Deployment and DevOps:"
          description="Understand deployment processes and tools like Docker for containerization.
          Learn about Continuous Integration (CI) and Continuous Deployment (CD) pipelines.
          Explore cloud platforms like AWS, Azure, or Google Cloud for hosting and scaling your applications."
          clickableParagraphs={[
            { label: 'Backend in a DevOps Environment', link: 'https://talent500.co/blog/backend-in-a-devops-environment/' },
            { label: 'DevOps Engineering Course for Beginners', link: 'https://www.youtube.com/watch?v=j5Zsa_eOXeY' },
            { label: 'Intro to Backend Development', link: 'https://www.youtube.com/watch?v=wvVXSdiGyBc' },
           
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("8. Deployment and DevOps:")}
        />

        <DropdownRoadmapItem
          title="9. Testing:"
          description="Familiarize yourself with testing frameworks like Jest (JavaScript), Pytest (Python), JUnit (Java), or NUnit (C#).
          Write unit tests, integration tests, and end-to-end tests for both frontend and backend code."
          clickableParagraphs={[
            { label: 'Backend Testing All Concepts', link: 'https://m.youtube.com/playlist?list=PLNU5HKVycrW3BDPz5q3MAsEO6BgAYmvfG' },
            { label: 'Backend Testing Database', link: 'https://www.youtube.com/watch?v=yitg5c2zhD8' },
            { label: 'Backend Testing: the Definitive Guide', link: 'https://www.mindk.com/blog/backend-testing/' },
            { label: 'What is Backend Testing?', link: 'https://www.geeksforgeeks.org/what-is-backend-testing/' },
           
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("9. Testing:")}
        />

        <DropdownRoadmapItem
          title="10. Security Best Practices:"
          description="Learn about common security vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection.
          Implement security best practices in your applications, including input validation, secure authentication, and HTTPS."
          clickableParagraphs={[
            { label: '7 Tips to Secure Backend APIs', link: 'https://www.linkedin.com/pulse/7-tips-secure-backend-apis-htdemo' },
            { label: 'Security best practices for Node.js backend applications', link: 'https://proxify.io/articles/security-best-practices-for-node-js-backend-applications' },
            { label: 'More Security Best Practices for Backend Developers', link: 'https://medium.com/swlh/more-security-best-practices-for-backend-developers-c7a41f85bf8e' },
            
          ]}

          markAsCompleted={markAsCompleted}
          completed={completedItems.includes("10. Security Best Practices:")}
        />


      
      </div>
    </div>
  );
};

const DropdownRoadmapItem = ({ title, description, clickableParagraphs, markAsCompleted, completed }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isTitleCutOff, setTitleCutOff] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDoneClick = () => {
    markAsCompleted(title);
    setTitleCutOff(true);
  };

  return (
    <div className={`bg-gray-100 p-4 rounded-md relative dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <div className="flex items-center justify-between cursor-pointer question" onClick={toggleDropdown}>
        <h2 className={`text-xl font-semibold mb-2 ${completed ? 'text-blue-300' : ''}`}>
          {isTitleCutOff ? title.split("DONE")[0] : title}
        </h2>
        {completed && <hr className="w-full border-t border-gray-500" />}
        <span>{isDropdownOpen ? '▲' : '▼'}</span>
      </div>
      {isDropdownOpen && (
        <div className="mt-2 dropdown-menu">
          <p className="description">{description}</p>
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
          {!completed && (
            <button className="bg-blue-900 text-white font-semibold px-3 py-1 rounded-md mt-2" onClick={handleDoneClick}>DONE</button>
          )}
        </div>
      )}
    </div>
  );
};


export default FSMindmap;