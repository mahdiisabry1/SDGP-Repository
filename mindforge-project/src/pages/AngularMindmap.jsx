const AngularMindmap = () => {
    return (
      <div className="p-48 text-black">
        <h1 className="text-3xl font-bold mb-4">MindMap to Angular</h1>
        <p className="mb-6">
          This mindmap provides a structured path to explore and learn in the field of Angular development.
        </p>
  
        <div className="flex flex-col space-y-4">
          <RoadmapItem
            title="Angular Framework:"
            description="Angular is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google."
          />
  
          <RoadmapItem
            title="Components:"
            description="Building blocks of Angular applications.
            Comprised of a template, class, and metadata."
          />
  
          <RoadmapItem
            title="Templates:"
            description="HTML with additional Angular-specific syntax.
            Used to define the UI of an Angular component."
          />

        <RoadmapItem
            title="Directives:"
            description="Instructions in the DOM.
            Types: Structural (e.g., ngIf, ngFor) and Attribute (e.g., ngClass, ngStyle)."
          />

        <RoadmapItem
            title="Data Binding:"
            description="Establishing a connection between the UI and application logic.
            Types: Interpolation, Property Binding, Event Binding, Two-Way Binding."
          />

        <RoadmapItem
            title="Services:"
            description="Reusable pieces of code.
            Used for tasks that are not tied to a specific view."
          />

        <RoadmapItem
            title="Dependency Injection (DI):"
            description="Design pattern to increase efficiency and modularity.
            Angular's DI framework provides dependencies to a class upon instantiation."
          />

        <RoadmapItem
            title="Modules:"
            description="Organizational units for an Angular application.
            Help in organizing code and managing dependencies."
          />

        <RoadmapItem
            title="Routing:"
            description="
            Managing navigation in Angular applications.
            Allows mapping URLs to different parts of the application."
          />

        <RoadmapItem
            title="Forms:"
            description="Handling user input.
            Template-driven and Reactive (Model-driven) approaches."
          />

        <RoadmapItem
            title="HTTP Client:"
            description="Angular's built-in module for making HTTP requests.
            Used to fetch data from a server."
          />

        <RoadmapItem
            title="Pipes:"
            description="Transforming data in the template.
            Angular provides several built-in pipes for common transformations."
          />

<RoadmapItem
            title="Interceptors:"
            description="Intercepting and manipulating HTTP requests globally.
            Used for tasks such as adding headers or handling errors."
          />

<RoadmapItem
            title="Testing:"
            description="Comprehensive testing support with tools like Jasmine and Karma.
            Allows writing unit tests, integration tests, and end-to-end tests."
          />

<RoadmapItem
            title="Deployment:"
            description="Strategies for deploying Angular applications to production servers.
            Options include using a simple HTTP server, deploying to cloud platforms, or Dockerizing the application."
          />

<RoadmapItem
            title="Community and Resources:"
            description="Angular has a large and active community with abundant resources such as official documentation, tutorials, blogs, and forums."
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
  
  export default AngularMindmap;