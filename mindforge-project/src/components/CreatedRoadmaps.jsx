import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { URL } from "../url";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import RoadmapCreation from "./RoadmapCreation";

const CreatedRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const { user } = useContext(UserContext);

  const fetchmaps = async () => {
    try {
      const res = await axios.get(URL + "/api/roadmaps");
      setRoadmaps(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmaps();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {roadmaps.map((post) => (
        <>
          <Link to={user ? `/roadmaps/roadmap/${post._id}` : "/"}>
            <RoadmapCreation key={post._id} post={post} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default CreatedRoadmaps;
