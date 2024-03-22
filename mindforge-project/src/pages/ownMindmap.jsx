import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/CreateRoadMap.css";



const CreateRoadMap = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([{ title: "", description: "" }]);
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    fetchRoadmaps();// Calls the fetchRoadmaps function when the component mounts
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const response = await axios.get("/api/roadmaps");
      setRoadmaps(response.data);// Updates the roadmaps state with the fetched data
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    }
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStepTitleChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].title = e.target.value;
    setSteps(newSteps);
  };

  const handleStepDescriptionChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].description = e.target.value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, { title: "", description: "" }]);
  };

  const handleDeleteStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roadmapData = {
      title,
      description,
      steps,
    };

    try {
      const response = await axios.post("/api/roadmaps/createRoad", roadmapData);
      console.log("Roadmap created:", response.data);
      // Optionally, redirect the user or perform other actions upon successful creation
    } catch (error) {
      console.error("Error creating roadmap:", error);
      // Handle error
    }
  };

  return (
    <div className="create-roadmap-container">
      <h2>Create Roadmap</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="label">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="textarea"
          />
        </div>
        <div className="form-group steps">
          <h3>Steps:</h3>
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <input
                type="text"
                value={step.title}
                onChange={(e) => handleStepTitleChange(index, e)}
                className="input"
                placeholder="Step Title"
              />
              <textarea
                value={step.description}
                onChange={(e) => handleStepDescriptionChange(index, e)}
                className="textarea"
                placeholder="Step Description"
              />
              <button
                type="button"
                onClick={() => handleDeleteStep(index)}
                className="delete-step-button"
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddStep} className="add-step-button">
            Add Step
          </button>
        </div>
        <button type="submit" className="submit-button">
          Create Roadmap
        </button>
      </form>
    </div>
  );
};

export default CreateRoadMap;
