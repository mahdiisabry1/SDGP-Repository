import { useContext, useState } from "react";
import axios from "axios";
import "./CSS/ownMindmap.css";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";



const CreateRoadMap = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([{ title: "", description: "", links: [] }]);
  const { user } = useContext(UserContext);

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
    setSteps([...steps, { title: "", description: "", links: [] }]);
  };

  const handleDeleteStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };
  const handleAddLink = (index) => {
    const newSteps = [...steps];
    newSteps[index].links.push("");
    setSteps(newSteps);
  };

  const handleLinkChange = (stepIndex, linkIndex, e) => {
    const newSteps = [...steps];
    newSteps[stepIndex].links[linkIndex] = e.target.value;
    setSteps(newSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roadmapData = {
      title,
      description,
      steps,
      username: user.username,
      userId: user._id,
    };

    try {
      const response = await axios.post(URL + "/api/roadmaps/createRoad", roadmapData, {
        withCredentials: true,
      });
      console.log("Roadmap created:", response.data);
      // Optionally, redirect the user or perform other actions upon successful creation
    } catch (error) {
      console.error("Error creating roadmap:", error);
      // Handle error
    }
  };

  return (
    <div className="create-roadmap-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          {steps.map((step, stepIndex) => (
            <div className="step" key={stepIndex}>
              <input
                type="text"
                value={step.title}
                onChange={(e) => handleStepTitleChange(stepIndex, e)}
                className="input"
                placeholder="Step Title"
              />
              <textarea
                value={step.description}
                onChange={(e) => handleStepDescriptionChange(stepIndex, e)}
                className="textarea"
                placeholder="Step Description"
              />
              {step.links.map((link, linkIndex) => (
                <input
                  key={linkIndex}
                  type="text"
                  value={link}
                  onChange={(e) => handleLinkChange(stepIndex, linkIndex, e)}
                  className="input"
                  placeholder="Link URL"
                />
              ))}
              <div className="step-buttons">
                <button
                  type="button"
                  onClick={() => handleAddLink(stepIndex)}
                  className="add-link-button"
                >
                  Add Link
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteStep(stepIndex)}
                  className="delete-step-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddStep}
            className="add-step-button"
          >
            Add Step
          </button>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Create Mindmap
        </button>
      </form>
    </div>
  );
};

export default CreateRoadMap;