import React, { useState } from 'react';

const AngularMindmap = () => {
    return (
      <div className="p-48 text-black">
        <h1 className="text-3xl font-bold mb-4">MindMap to Angular</h1>
        <p className="mb-6">
          This mindmap provides a structured path to explore and learn in the field of Angular development.
        </p>
  
        <div className="flex flex-col space-y-4">

          <DropdownRoadmapItem
            title="1. Angular Framework:"
            description="Angular is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google."
            clickableParagraphs={[
              { label: 'Angular', link: 'https://angular.io/' },
              { label: 'Top 15 Angular Frameworks and Libraries', link: 'https://www.techtic.com/blog/top-angular-frameworks/' },
              { label: 'Angular Framework Fundamentals', link: 'https://www.youtube.com/watch?v=ZNilX-i1Vck' },
              
            ]}
          />
  
          <DropdownRoadmapItem
            title="2. Components:"
            description="Building blocks of Angular applications.
            Comprised of a template, class, and metadata."
            clickableParagraphs={[
              { label: 'Angular Components Explained', link: 'https://www.youtube.com/watch?v=qkk9giUxIHs' },
              { label: 'Angular Tutorial - 4 - Components', link: 'https://www.youtube.com/watch?v=16rQyEQtpyQ' },
              { label: 'Angular 12 tutorial', link: 'https://www.youtube.com/watch?v=MIO4sLhyh1Q' },
              { label: 'Angular Components In Depth', link: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTbh7bUrKwyCWr6ABBFEd4bD' },
              
            ]}
          />
  
          <DropdownRoadmapItem
            title="3. Templates:"
            description="HTML with additional Angular-specific syntax.
            Used to define the UI of an Angular component."
            clickableParagraphs={[
              { label: 'Angular 10 Tutorial For Beginners', link: 'https://www.youtube.com/watch?v=ia4ePGh_HX8' },
              { label: 'Understanding templates', link: 'https://angular.io/guide/template-overview' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="4. Directives:"
            description="Instructions in the DOM.
            Types: Structural (e.g., ngIf, ngFor) and Attribute (e.g., ngClass, ngStyle)."
            clickableParagraphs={[
              { label: 'Built-in directives', link: 'https://angular.io/guide/built-in-directives' },
              { label: 'Attribute directives', link: 'https://angular.io/guide/attribute-directives' },
              { label: 'Angular Directives', link: 'https://www.w3schools.com/angular/angular_directives.asp' },
              { label: 'Angular 8 - Directives', link: 'https://www.tutorialspoint.com/angular8/angular8_directives.htm' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="5. Data Binding:"
            description="Establishing a connection between the UI and application logic.
            Types: Interpolation, Property Binding, Event Binding, Two-Way Binding."
            clickableParagraphs={[
              { label: 'Angular Data Binding', link: 'https://www.w3schools.com/angular/angular_databinding.asp' },
              { label: 'Angular Data Binding: Exploring its Limitless Possibilities', link: 'https://www.simplilearn.com/tutorials/angular-tutorial/angular-data-binding' },
              { label: 'Angular 8 - Data Binding', link: 'https://www.tutorialspoint.com/angular8/angular8_data_binding.htm' },
              { label: 'Binding syntax', link: 'https://angular.io/guide/binding-syntax' },
              { label: 'Understanding binding', link: 'https://angular.io/guide/binding-overview' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="6. Services:"
            description="Reusable pieces of code.
            Used for tasks that are not tied to a specific view."
            clickableParagraphs={[
              { label: 'Introduction to services and dependency injection', link: 'https://angular.io/guide/architecture-services' },
              { label: 'Angular Services', link: 'https://www.w3schools.com/angular/angular_services.asp' },
              { label: 'What is an Angular Service', link: 'https://www.javatpoint.com/what-is-an-angular-service' },
              { label: 'How To Use Services in Angular', link: 'https://www.telerik.com/blogs/angular-basics-how-to-use-services-angular' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="7. Dependency Injection (DI):"
            description="Design pattern to increase efficiency and modularity.
            Angular's DI framework provides dependencies to a class upon instantiation."
            clickableParagraphs={[
              { label: 'Dependency injection in Angular', link: 'https://angular.io/guide/dependency-injection-overview' },
              { label: 'Angular Dependency Injection Explained with Examples', link: 'https://www.freecodecamp.org/news/angular-dependency-injection/' },
              { label: 'How dependency injection works in Angular', link: 'https://blog.logrocket.com/how-dependency-injection-works-in-angular/' },
              { label: 'Angular dependency injection', link: 'https://www.youtube.com/watch?v=jWODteEGQmw' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="8. Modules:"
            description="Organizational units for an Angular application.
            Help in organizing code and managing dependencies."
            clickableParagraphs={[
              { label: 'Angular Modules', link: 'https://www.w3schools.com/angular/angular_modules.asp' },
              { label: 'What is an Angular Module?', link: 'https://angular-training-guide.rangle.io/modules/introduction' },
              { label: 'Angular Modules', link: 'https://www.youtube.com/watch?v=VuEuc6guuxA' },
              { label: 'Angular 4 - Module', link: 'https://www.tutorialspoint.com/angular4/angular4_module.htm' },
             
            ]}
          />

        <DropdownRoadmapItem
            title="9. Routing:"
            description="
            Managing navigation in Angular applications.
            Allows mapping URLs to different parts of the application."
            clickableParagraphs={[
              { label: 'What is Routing ? - Geeksforgeeks', link: 'https://www.geeksforgeeks.org/routing-in-angular-9-10/' },
              { label: 'Angular.io', link: 'https://angular.io/guide/router' },
              { label: 'Angular Tutorial - Routing and Navigation', link: 'https://www.youtube.com/watch?v=Nehk4tBxD4o' },
              { label: 'What is Routing in Angular', link: 'https://www.youtube.com/watch?v=OMX6Wcx2yZA' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="10. Forms:"
            description="Handling user input.
            Template-driven and Reactive (Model-driven) approaches."
            clickableParagraphs={[
              { label: 'Introduction to forms in Angular', link: 'https://angular.io/guide/forms-overview' },
              { label: 'Angular Forms', link: 'https://www.w3schools.com/angular/angular_forms.asp' },
              { label: 'Forms in Angular | Angular Tutorial', link: 'https://www.knowledgehut.com/tutorials/angular/forms-in-angular' },
              { label: 'Forms in Angular', link: 'https://medium.com/@jaydeepvpatil225/forms-in-angular-8fde7d0dcdf6' },
              
            ]}
          />

        <DropdownRoadmapItem
            title="11. HTTP Client:"
            description="Angular's built-in module for making HTTP requests.
            Used to fetch data from a server."
            clickableParagraphs={[
              { label: 'HttpClient', link: 'https://angular.io/api/common/http/HttpClient' },
              { label: 'Angular 6 - Http Client', link: 'https://www.tutorialspoint.com/angular6/angular6_http_client.htm' },
              { label: 'Angular 8 - Http Client Programming', link: 'https://www.tutorialspoint.com/angular8/angular8_http_client_programming.htm' },
            
            ]}
          />

        <DropdownRoadmapItem
            title="12. Pipes:"
            description="Transforming data in the template.
            Angular provides several built-in pipes for common transformations."
            clickableParagraphs={[
              { label: 'Understanding Pipes', link: 'https://angular.io/guide/pipes-overview' },
              { label: 'Built-in Pipes with Examples of Each', link: 'https://www.telerik.com/blogs/angular-basics-built-pipes-examples-each' },
              { label: 'Angular 4 - Pipes', link: 'https://www.tutorialspoint.com/angular4/angular4_pipes.htm' },
              { label: 'Pipes in Angular', link: 'https://www.knowledgehut.com/blog/web-development/pipes-in-angular' },
            
            ]}
          />

        <DropdownRoadmapItem
            title="13. Interceptors:"
            description="Intercepting and manipulating HTTP requests globally.
            Used for tasks such as adding headers or handling errors."
            clickableParagraphs={[
              { label: 'HttpInterceptor', link: 'https://angular.io/api/common/http/HttpInterceptor' },
              { label: 'HTTP Interceptors in Angular', link: 'https://medium.com/@jaydeepvpatil225/http-interceptors-in-angular-6e9891ae0538' },
              { label: 'Angular Http Interceptor', link: 'https://www.javatpoint.com/angular-http-interceptor' },
            
            ]}
          />

        <DropdownRoadmapItem
            title="14. Testing:"
            description="Comprehensive testing support with tools like Jasmine and Karma.
            Allows writing unit tests, integration tests, and end-to-end tests."
            clickableParagraphs={[
              { label: 'Testing', link: 'https://angular.io/guide/testing' },
              { label: 'Angular unit testing tutorial with examples', link: 'https://blog.logrocket.com/angular-unit-testing-tutorial/' },
              { label: 'How to perform Unit testing for Angular apps?', link: 'https://www.browserstack.com/guide/how-to-perform-angular-unit-testing' },
              { label: 'Unit Testing in Angular', link: 'https://www.prestonlamb.com/blog/unit-testing-in-angular/' },
           
            ]}
          />

        <DropdownRoadmapItem
            title="15. Deployment:"
            description="Strategies for deploying Angular applications to production servers.
            Options include using a simple HTTP server, deploying to cloud platforms, or Dockerizing the application."
            clickableParagraphs={[
              { label: 'Deployment', link: 'https://angular.io/guide/deployment' },
              { label: 'Deploying an angular app', link: 'https://community.render.com/t/deploying-an-angular-app/16585' },
              { label: 'Build and Deploying Angular Apps', link: 'https://www.youtube.com/watch?v=zHrHg4_GNNE' },
              { label: 'Deploying Angular Applications', link: 'https://www.youtube.com/watch?v=vwyvMZStS54' },
             
            ]}
          />

        <DropdownRoadmapItem
            title="16. Community and Resources:"
            description="Angular has a large and active community with abundant resources such as official documentation, tutorials, blogs, and forums."
            
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
  
  export default AngularMindmap;