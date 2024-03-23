import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("roadmaps");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/userData");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              <li className={`tab-item ${activeTab === "roadmaps" ? "active" : ""}`} onClick={() => handleTabClick("roadmaps")}>My Roadmaps</li>
              <li className={`tab-item ${activeTab === "reads" ? "active" : ""}`} onClick={() => handleTabClick("reads")}>My Reads</li>
            </ul>
          </div>
          {/* Content based on active tab */}
          <div className="tab-content">
            {activeTab === "roadmaps" && (
              <div>
                {/* Content for My Roadmaps tab */}
              </div>
            )}
            {activeTab === "reads" && (
              <div>
                {/* Content for My Blogs tab */}
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
