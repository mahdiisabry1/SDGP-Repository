import React, { useState, useEffect } from "react";
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
    window.open(`/${tab}`, "_blank"); // Open in a new tab
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-bg">
        <NavBar />
        <div className="mt-40 text-center">
          <h1 className="text-6xl mb-4">Welcome Your Profile</h1>
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
          <div className="mt-10">
            <ul className="tab-list">
              <li className={`tab-item ${activeTab === "roadmaps" ? "active" : ""}`} onClick={() => handleTabClick("myroadmaps")}>My Roadmaps</li>
              <li className={`tab-item ${activeTab === "reads" ? "active" : ""}`} onClick={() => handleTabClick("myreads")}>My Reads</li>
            </ul>
          </div>
          <div className="mt-20 logout-container">
            <a href="/" className="logout-link">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
