import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import "./CSS/ownMindmap.css";

const OwnMindmap = () => {
  const { user } = useContext(UserContext);
  const [mindmaps, setMindmaps] = useState([]); // State to hold mind maps
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([{ title: "", description: "", links: [] }]);
  const [currentMindmapId, setCurrentMindmapId] = useState(null); // State for current mind map ID

  useEffect(() => {
    fetchMindmaps(); // Fetch mind maps when component mounts
  }, []);

  const fetchMindmaps = async () => {
    try {
      const response = await axios.get(URL + "/api/mindmaps"); // Fetch all mind maps
      setMindmaps(response.data);
    } catch (error) {
      console.error("Error fetching mind maps:", error);
    }
  };

  const handleCreateMindmap = async () => {
    const mindmapData = {
      title,
      description,
      steps,
      username: user.username,
      userId: user._id,
    };

    try {
      await axios.post(URL + "/api/mindmaps/create", mindmapData, {
        withCredentials: true,
      });
      fetchMindmaps(); // Refetch mind maps after creating a new one
    } catch (error) {
      console.error("Error creating mind map:", error);
    }
  };

  const handleDeleteMindmap = async (mindmapId) => {
    try {
      await axios.delete(URL + "/api/mindmaps/" + mindmapId, {
        withCredentials: true,
      });
      fetchMindmaps(); // Refetch mind maps after deleting one
    } catch (error) {
      console.error("Error deleting mind map:", error);
    }
  };

  const handleAddStep = () => {
    setSteps([...steps, { title: "", description: "", links: [] }]);
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  const handleTitleChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index].title = value;
    setSteps(updatedSteps);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index].description = value;
    setSteps(updatedSteps);
  };

  // Other CRUD operations (update, view) can be implemented similarly

  return (
    <div className="own-mindmap-container">
      <h2>Create Mind Map</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <h3>Steps</h3>
      {steps.map((step, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Step ${index + 1} Title`}
            value={step.title}
            onChange={(e) => handleTitleChange(index, e.target.value)}
          />
          <textarea
            placeholder={`Step ${index + 1} Description`}
            value={step.description}
            onChange={(e) => handleDescriptionChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveStep(index)}>Remove Step</button>
        </div>
      ))}
      <button onClick={handleAddStep}>Add Step</button>
      <button onClick={handleCreateMindmap}>Create Mind Map</button>

      <h2>Mind Maps</h2>
      <ul>
  {mindmaps.map((mindmap) => (
    <li key={mindmap._id}>
      <span>{mindmap.title}</span>
      <button onClick={() => setCurrentMindmapId(mindmap._id)}>
        Edit
      </button>
      <button onClick={() => handleDeleteMindmap(mindmap._id)}>
        Delete
      </button>
    </li>
  ))}
</ul>


      {/* Add editing form for current mind map if needed */}
    </div>
  );
};

export default OwnMindmap;
