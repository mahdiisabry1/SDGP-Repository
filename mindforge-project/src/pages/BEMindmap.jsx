import React, { useState } from 'react';
import './RoadMap.css';

const BEMindmap = () => {
  return (
    <div className="p-48 text-white">
      <h1 className="text-3xl font-bold mb-4 question">MindMap to Back-End</h1>
      <p className="mb-6">
       This MindMap provides a structured path to explore and learn in the field of Back-end development.
      </p>.

      <div className="flex flex-col space-y-4">
          
          <DropdownRoadmapItem
            title="1. Programming Fundamentals:"
            description="Learn a programming language commonly used for backend development such as Python, JavaScript (Node.js), Java, C#, or Ruby.
            Understand basic programming concepts like variables, data types, control structures, functions, and object-oriented programming (OOP) principles."
            clickableParagraphs={[
              { label: 'python website', link: 'https://www.python.org/' },
              { label: 'python getting started', link: 'https://www.python.org/about/gettingstarted/' },
              { label: 'W3Schools - Python Tutorial', link: 'https://www.w3schools.com/python/' },
              { label: 'Python Crash Course', link: 'https://ehmatthes.github.io/pcc/' },

              { label: 'W3Schools – JavaScript Tutorial', link: 'https://www.w3schools.com/js/' },
              { label: 'Codecademy - Learn JavaScript', link: 'https://www.codecademy.com/learn/introduction-to-javascript' },
              { label: 'Node.js Crash Course', link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4' },
              { label: 'Node.js Tutorial for Beginners', link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' },

              { label: 'PHP Website', link: 'https://php.net/' },
              { label: 'Learn PHP - W3Schools', link: 'https://www.w3schools.com/php/' },
              { label: 'PHP for Beginners', link: 'https://www.youtube.com/watch?v=U2lQWR6uIuo&list=PL3VM-unCzF8ipG50KDjnzhugceoSG3RTC' },
              { label: 'PHP For Absolute Beginners', link: 'https://www.youtube.com/watch?v=2eebptXfEvw' },

              { label: 'Ruby Website', link: 'https://www.ruby-lang.org/en/' },
              { label: 'Learn Ruby in 20 minutes', link: 'https://www.ruby-lang.org/en/documentation/quickstart/' },
              { label: 'Learn Ruby | Codecademy', link: 'https://www.codecademy.com/learn/learn-ruby' },
              { label: 'Ruby, An Introduction to a Programmer’s Best Friend', link: 'https://thenewstack.io/ruby-a-programmers-best-friend/' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="2. HTTP and RESTful APIs:"
            description="Understand the Hypertext Transfer Protocol (HTTP) and its methods (GET, POST, PUT, DELETE).
            Learn about RESTful API design principles including endpoints, request methods, status codes, and payload formats (JSON, XML)."
            clickableParagraphs={[
              { label: 'What is a REST API?', link: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api' },
              { label: 'Learn REST: A RESTful Tutorial', link: 'https://restapitutorial.com/' },

              { label: 'What is HTTP?', link: 'https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/' },
              { label: 'Full HTTP Networking Course', link: 'https://www.youtube.com/watch?v=2JYT5f2isg4' },
              { label: 'HTTP Crash Course & Exploration', link: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="3. Databases:"
            description="Learn about relational databases (e.g., MySQL, PostgreSQL) and non-relational databases (e.g., MongoDB, Redis).
            Understand database modeling, querying, indexing, and transactions."
            clickableParagraphs={[
              { label: 'MySQL website', link: 'https://www.mysql.com/' },
              { label: 'W3Schools - MySQL tutorial', link: 'https://www.w3schools.com/mySQl/default.asp' },
              { label: 'MySQL tutorial for beginners', link: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' },

              { label: 'Official Website', link: 'https://www.postgresql.org/' },
              { label: 'What is PostgreSQL', link: 'https://www.geeksforgeeks.org/what-is-postgresql-introduction/' },
              { label: 'Learn PostgreSQL - Full Tutorial for Beginners', link: 'https://www.postgresqltutorial.com/' },

              { label: 'MongoDB Website', link: 'https://www.mongodb.com/' },
              { label: 'MongoDB Documentation', link: 'https://docs.mongodb.com/' },
              { label: 'Learning Path for MongoDB Developers', link: 'https://learn.mongodb.com/catalog' },

              { label: 'Key-Value Databases', link: 'https://en.wikipedia.org/wiki/Key-value_database' },
              
             
            ]}
          />

          <DropdownRoadmapItem
            title="4. Server-side Frameworks:"
            description="Choose a backend framework based on your programming language preference:
            JavaScript/Node.js: Express.js, Nest.js
            Python: Django, Flask
            Java: Spring Boot, Spark
            C#: ASP.NET Core
            Ruby: Ruby on Rails
            Learn how to create RESTful APIs, handle routing, middleware, authentication, and error handling using your chosen framework."
            clickableParagraphs={[
              { label: 'python website', link: 'https://www.python.org/' },
              { label: 'python getting started', link: 'https://www.python.org/about/gettingstarted/' },

              { label: 'W3Schools – JavaScript Tutorial', link: 'https://www.w3schools.com/js/' },
              { label: 'Codecademy - Learn JavaScript', link: 'https://www.codecademy.com/learn/introduction-to-javascript' },

              { label: 'C# Learning Path', link: 'https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/?WT.mc_id=dotnet-35129-website' },
              { label: 'C# on W3 schools', link: 'https://www.w3schools.com/cs/index.php' },

              { label: 'Ruby Website', link: 'https://www.ruby-lang.org/en/' },
              { label: 'Learn Ruby in 20 minutes', link: 'https://www.ruby-lang.org/en/documentation/quickstart/' },
              
             
            ]}
          />

          <DropdownRoadmapItem
            title="5. Authentication and Authorization:"
            description="Learn about authentication mechanisms like JWT (JSON Web Tokens), OAuth, and sessions.
            Implement user authentication, registration, login/logout functionalities.
            Understand authorization techniques to control access to resources."
            clickableParagraphs={[
              { label: 'User Authentication: Understanding the Basics & Top Tips', link: 'https://swoopnow.com/user-authentication/' },
              { label: 'Basic Authentication', link: 'https://roadmap.sh/guides/basic-authentication' },
              { label: 'An overview about authentication methods', link: 'https://betterprogramming.pub/how-do-you-authenticate-mate-f2b70904cc3a' },
              { label: 'Session Based Authentication', link: ' https://roadmap.sh/guides/session-authentication' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="6. Web Security:"
            description="Understand common web security vulnerabilities such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), SQL Injection, and how to mitigate them.
            Learn about HTTPS, secure password storage, input validation, and secure coding practices."
            clickableParagraphs={[
              { label: 'Why HTTPS Matters', link: 'https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https' },
              { label: 'OWASP Web Application Security Testing Checklist ', link: 'https://github.com/0xRadi/OWASP-Web-Checklist' },
              { label: 'OWASP Top 10 Security Risks', link: 'https://sucuri.net/guides/owasp-top-10-security-vulnerabilities-2021/' },
              { label: 'Content Security Policy (CSP)', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP' },
             
             
            ]}
          />

          <DropdownRoadmapItem
            title="7. API Documentation:"
            description="Learn how to document your APIs using tools like Swagger or OpenAPI Specification.
            Document endpoints, request parameters, response formats, and authentication methods."
            clickableParagraphs={[
              { label: 'How to Write API Documentation', link: 'https://www.altexsoft.com/blog/api-documentation/#:~:text=API%20documentation%20is%20a%20guide,messages%2C%20and%20other%20essential%20details.' },
              { label: 'How to Document a Back-end API Effectively', link: 'https://www.linkedin.com/advice/1/what-most-effective-ways-document-back-end-api-why6e' },
              { label: 'How to Write Good API Documentation', link: 'https://www.freecodecamp.org/news/how-to-write-api-documentation-like-a-pro/' },
              
             
            ]}
          />

          <DropdownRoadmapItem
            title="8. Testing:"
            description="Learn about different testing techniques including unit testing, integration testing, and end-to-end testing.
            Write test cases for your backend code using testing frameworks like Jest (JavaScript/Node.js), pytest (Python), JUnit (Java), NUnit (C#), or RSpec (Ruby)."
            clickableParagraphs={[
              { label: 'What is Software Testing?', link: 'https://www.guru99.com/software-testing-introduction-importance.html' },
              { label: 'Integration Testing', link: 'https://www.guru99.com/integration-testing.html' },
              { label: 'What is Integration Testing?', link: 'https://youtu.be/QYCaaNz8emY' },
              { label: 'Unit Testing Tutorial', link: ' https://www.guru99.com/unit-testing-guide.html' },
              { label: 'What is Unit Testing?', link: 'https://youtu.be/3kzHmaeozDI' },
              { label: 'What is Functional Testing?', link: 'https://www.guru99.com/functional-testing.html' },
              { label: 'Functional Testing vs Non-Functional Testing', link: ' https://youtu.be/j_79AXkG4PY' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="9. Containerization and Deployment:"
            description="Learn about containerization using Docker to package your application along with its dependencies.
            Understand container orchestration tools like Kubernetes for managing containerized applications in production.
            Deploy your backend application to cloud platforms like AWS, Azure, Google Cloud Platform, or platforms-as-a-service like Heroku or DigitalOcean."
            clickableParagraphs={[
              { label: 'Deployment of content-driven web app backends', link: 'https://developers.google.com/solutions/content-driven/backend/deployment#:~:text=The%20build%20pipeline%20for%20your,and%20deploying%20new%20application%20versions.' },
              { label: 'Deploying a Back-End with Heroku', link: 'https://www.codecademy.com/article/deploying-a-back-end-with-heroku' },
              { label: 'How to Build and Deploy a Backend App', link: 'https://www.freecodecamp.org/news/how-to-build-a-backend-application/' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="10. Monitoring and Logging:"
            description="Learn how to monitor the performance and health of your backend application using tools like Prometheus, Grafana, or Datadog.
            Implement logging to track application events, errors, and debug information."
            clickableParagraphs={[
              { label: 'A Comprehensive Guide to Logging the right way', link: 'https://masteringbackend.com/posts/comprehensive-guide-to-logging-the-right-way' },
              { label: 'Automate Logging and Monitoring for Back-End', link: 'https://www.linkedin.com/advice/3/how-do-you-automate-logging-monitoring' },
              { label: 'Backend Error Tracking and Monitoring', link: 'https://sentry.io/for/backend/' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="11. Continuous Integration and Deployment (CI/CD):"
            description="Set up automated CI/CD pipelines using tools like Jenkins, GitLab CI/CD, or GitHub Actions to automate testing, building, and deploying your backend code."
            clickableParagraphs={[
              { label: 'What is CI/CD?', link: 'https://about.gitlab.com/topics/ci-cd/' },
              { label: 'DevOps CI/CD Explained in 100 Seconds by Fireship', link: 'ttps://www.youtube.com/watch?v=scEDHsr3APg' },
              { label: 'A Primer: Continuous Integration and Continuous Delivery (CI/CD)', link: 'https://thenewstack.io/a-primer-continuous-integration-and-continuous-delivery-ci-cd/' },
              { label: '3 Ways to Use Automation in CI/CD Pipelines', link: ' https://thenewstack.io/3-ways-to-use-automation-in-ci-cd-pipelines/' },
             
            ]}
          />

         <DropdownRoadmapItem
            title="12. Scalability and Performance Optimization:"
            description="Learn about scalability patterns such as load balancing, horizontal scaling, and caching to handle increased traffic.
            Optimize your backend code and database queries for performance."
            clickableParagraphs={[
              { label: 'Scalability and Performance Optimization', link: 'https://www.linkedin.com/pulse/scalability-performance-optimization-web-application' },
              { label: 'Scalability and Performance Optimization', link: 'https://www.gratasoftware.com/scalability-and-performance-optimization-ensuring-software-success/' },
             
            ]}
          />
 
          <DropdownRoadmapItem
            title="13. Version Control:"
            description="Use version control systems like Git to manage your codebase effectively.
            Learn about branching strategies, pull requests, and code reviews."
            clickableParagraphs={[
              { label: 'Git', link: 'https://git-scm.com/' },
              { label: 'What is Version Control?', link: 'https://www.atlassian.com/git/tutorials/what-is-version-control' },
              { label: 'Git & GitHub Crash Course For Beginners', link: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc' },
              { label: 'Learn Git Branching', link: ' https://learngitbranching.js.org/' },
             
            ]}
          />

          <DropdownRoadmapItem
            title="14. Documentation and Collaboration:"
            description="Document your code, APIs, and architecture to facilitate collaboration among team members.
            Use collaboration tools like Slack, Microsoft Teams, or Jira for communication and project management."
            clickableParagraphs={[
              { label: 'Backend Document Manipulation', link: 'https://tiptap.dev/docs/editor/collaboration/backend-document-manipulation' },
             
            ]}
          />

        <DropdownRoadmapItem
            title="15. Stay Updated and Keep Learning:"
            description="Backend development is continuously evolving with new technologies and best practices.
            Stay updated with the latest trends, attend conferences, participate in online communities, and continue learning to enhance your skills."
           
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
      <div className={`bg-gray-100 p-4 rounded-md relative dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between cursor-pointer question" onClick={toggleDropdown}>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <span>{isDropdownOpen ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen && (
          <div className="mt-2 dropdown-menu">
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
  
  export default BEMindmap;