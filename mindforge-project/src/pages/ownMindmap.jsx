import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import "./CSS/ownMindmap.css";

const RoadmapManagement = () => {
  const { user } = useContext(UserContext);
  const [roadmaps, setRoadmaps] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([{ title: "", description: "" }]);
  const [currentRoadmapId, setCurrentRoadmapId] = useState(null);

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const response = await axios.get(URL + "/api/roadmaps");
      setRoadmaps(response.data);
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    }
  };

  const handleCreateRoadmap = async () => {
    const roadmapData = {
      title,
      description,
      steps,
      username: user.username,
      userId: user._id,
    };

    try {
      await axios.post(URL + "/api/roadmaps/createRoad", roadmapData, {
        withCredentials: true,
      });
      fetchRoadmaps();
    } catch (error) {
      console.error("Error creating roadmap:", error);
    }
  };

  const handleDeleteRoadmap = async (roadmapId) => {
    try {
      await axios.delete(URL + "/api/roadmaps/" + roadmapId, {
        withCredentials: true,
      });
      fetchRoadmaps();
    } catch (error) {
      console.error("Error deleting roadmap:", error);
    }
  };

  const handleUpdateRoadmap = async () => {
    const roadmapData = {
      title,
      description,
      steps,
      username: user.username,
      userId: user._id,
    };

    try {
      await axios.put(
        URL + "/api/roadmaps/update/" + currentRoadmapId,
        roadmapData,
        {
          withCredentials: true,
        }
      );
      fetchRoadmaps();
    } catch (error) {
      console.error("Error updating roadmap:", error);
    }
  };

  return (
    <div className="roadmap-management-container">
      <h2>Create Roadmap</h2>
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
      <button onClick={handleCreateRoadmap}>Create Roadmap</button>

      <h2>Roadmaps</h2>
      <ul>
        {roadmaps.map((roadmap) => (
          <li key={roadmap._id}>
            <span>{roadmap.title}</span>
            <button onClick={() => setCurrentRoadmapId(roadmap._id)}>
              Edit
            </button>
            <button onClick={() => handleDeleteRoadmap(roadmap._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {currentRoadmapId && (
        <>
          <h2>Edit Roadmap</h2>
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
          <button onClick={handleUpdateRoadmap}>Update Roadmap</button>
        </>
      )}
    </div>
  );
};

export default RoadmapManagement;
