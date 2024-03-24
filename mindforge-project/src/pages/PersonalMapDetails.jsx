import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';
import NavBar from '../components/NavBar';
import '../pages/CSS/PersonalMapDetails.css'

const RoadmapDetails = () => {
  const postId = useParams().id;
  const { user } = useContext(UserContext);
  const [roadmap, setRoadmap] = useState({});

  
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(URL + "/api/roadmaps/" + postId,{
          withCredentials:true,
        });
        setRoadmap(response.data);
      } catch (error) {
        console.error('Error fetching roadmap:', error);
      }
    };


useEffect(() => {
  fetchRoadmap();
}, [postId]);


  return (
    <>
      <NavBar />
      <div className="p-44">
        <h1>Roadmap Details</h1>
        {roadmap ? (
          <>
            <p>Roadmap Title: {roadmap.title}</p>
            <p>
              Created At: {new Date(roadmap.updatedAt).toString().slice(16, 24)}
            </p>
            <p>Description: {roadmap.description}</p>

            {/* Rendering steps */}
            {roadmap.steps && roadmap.steps.length > 0 ? (
              <>
                <p>Steps:</p>
                {roadmap.steps.map((step, index) => (
                  <p key={index}>
                    Step {index + 1}: {step.title} - {step.description}
                  </p>
                ))}
              </>
            ) : (
              <p>No steps found.</p>
            )}
          </>
        ) : (
          <p>No roadmap found.</p>
        )}

        {/* Render other roadmap details as needed */}
      </div>
    </>
  );
};

export default RoadmapDetails;
