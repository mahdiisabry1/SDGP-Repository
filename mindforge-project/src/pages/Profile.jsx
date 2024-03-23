import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import axios from "axios"; // Import axios for making HTTP requests
import NavBar from "../components/NavBar"; // Import NavBar component
import './Profile.css'; // Import CSS file for styling

// Profile component
const Profile = () => {
  // State variables
  const [userData, setUserData] = useState(null); // State to store user data
  const [activeTab, setActiveTab] = useState("roadmaps"); // State to track active tab

  // Effect hook to fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/userData"); // Fetch user data from API
        setUserData(response.data); // Set user data in state
      } catch (error) {
        console.error("Error fetching user data:", error); // Log error if data fetching fails
      }
    };

    fetchUserData(); // Invoke fetchUserData function
  }, []);

  // Function to handle tab click event
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set active tab based on clicked tab
  };
  return (
    <div className="profile-wrapper">
      <div className="profile-bg">
        <NavBar />
        <div className="mt-40 text-center">
          <h1 className="text-6xl mb-20">Welcome Your Profile</h1>
        </div>
      </div>
      <div className="profile-content">
        <div className="mt-20 text-center">
          {userData && (
            <div>
              <p className="text-xl mt-4">UserName: <span className="text-lg">{userData.username}</span></p>
              <p className="text-xl mt-2">Email: <span className="text-lg">{userData.email}</span></p>
            </div>
          )}
          <div className="mt-20">
            <ul className="tab-list">
              <li className={`tab-item ${activeTab === "mindmaps" ? "active" : ""}`} onClick={() => handleTabClick("mindmaps")}>My Mindmaps</li>
              <li className={`tab-item ${activeTab === "reads" ? "active" : ""}`} onClick={() => handleTabClick("reads")}>My Reads</li>
            </ul>
          </div>
          {/* Content based on active tab */}
          <div className="tab-content">
            {activeTab === "mindmaps" && (
              <div>
                No Mindmap Created
              </div>
            )}
            {activeTab === "reads" && (
              <div>
                No Read Created
              </div>
            )}
          </div>
          <div className="mt-20 logout-container">
            <a href="/" className="logout-link">Logout</a>
          </div>
          <div className="footer">
            {/* Footer content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
