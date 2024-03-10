import { useState, useEffect} from 'react'

const Courses = () => {

    const [recommendations, setRecommendations] = useState([]);

    const fetchRecommendations = async () => {
      const response = await fetch(
        "http://127.0.0.1:5000/api/get_recommendations"
      );
      const data = await response.json();
      setRecommendations(data.recommendations);
    };

  return (
    <div>
      <h1>Course Recommendation</h1>
      <button onClick={fetchRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses
