const FSMindmap = () => {
    return (
      <div className="p-48 text-black">
        <h1 className="text-3xl font-bold mb-4">Mindmap to Full Stack</h1>
        <p className="mb-6">
          This roadmap provides a structured path to explore and learn in the field of React development.
        </p>
  
        <div className="flex flex-col space-y-4">
          <RoadmapItem
            title="1. Learn the Fundamentals:"
            description="Start with the basics of programming, including concepts like variables, data types, conditionals, loops, and functions.
            Get comfortable with HTML, CSS, and JavaScript, which form the foundation of web development."
          />

          <RoadmapItem
            title="2. Frontend Development:"
            description="HTML & CSS: Master semantic HTML and learn modern CSS techniques including Flexbox and Grid layout.
            JavaScript: Dive deeper into JavaScript, understanding ES6+ features, DOM manipulation, asynchronous programming, and modern frameworks/libraries."
          />
          
          <RoadmapItem
            title="3. Frontend Frameworks:"
            description="Choose a frontend framework/library like React, Angular, or Vue.js.
            Learn the framework's core concepts, state management (if applicable), routing, and component-based architecture."
          />

          <RoadmapItem
            title="4. Backend Development:"
            description="Server-side Language: Pick a backend programming language such as JavaScript (Node.js), Python (Django or Flask), Ruby (Ruby on Rails), Java (Spring Boot), or C# (ASP.NET Core).
            Databases: Understand different types of databases (SQL and NoSQL), and learn how to interact with databases using languages like SQL and ORMs (Object-Relational Mapping) like Sequelize or SQLAlchemy.
            API Development: Learn to build RESTful or GraphQL APIs using frameworks like Express.js (Node.js), Django Rest Framework (Python), or Spring Boot (Java)."
          />

          <RoadmapItem
            title="5. Database Management:"
            description="Explore database management systems like MySQL, PostgreSQL, MongoDB, or Firebase.
            Learn about data modeling, indexing, querying, and database optimization techniques."
          />

          <RoadmapItem
            title="6. Authentication and Authorization:"
            description="Understand authentication methods like JWT (JSON Web Tokens), OAuth, and OAuth2.
            Implement user authentication and authorization in your applications using libraries like Passport.js (Node.js) or Django's authentication system."
          />

          <RoadmapItem
            title="7. Version Control:"
            description="Learn Git and GitHub/GitLab/Bitbucket for version control and collaboration with other developers."
          />

          <RoadmapItem
            title="8. Deployment and DevOps:"
            description="Understand deployment processes and tools like Docker for containerization.
            Learn about Continuous Integration (CI) and Continuous Deployment (CD) pipelines.
            Explore cloud platforms like AWS, Azure, or Google Cloud for hosting and scaling your applications."
          />

          <RoadmapItem
            title="9. Testing:"
            description="Familiarize yourself with testing frameworks like Jest (JavaScript), Pytest (Python), JUnit (Java), or NUnit (C#).
            Write unit tests, integration tests, and end-to-end tests for both frontend and backend code."
          />

          <RoadmapItem
            title="10. Security Best Practices:"
            description="Learn about common security vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection.
            Implement security best practices in your applications, including input validation, secure authentication, and HTTPS."
          />

  
        
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
  
  export default FSMindmap;
  