import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("roadmaps");
  const [profilePhoto, setProfilePhoto] = useState(null); // State to hold the selected profile photo

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

  // Function to handle file selection for profile photo
  const handleProfilePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setProfilePhoto(selectedPhoto);
  };

  // Function to handle profile photo upload
  const uploadProfilePhoto = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePhoto', profilePhoto);
      // Make a request to upload the profile photo
      // Replace '/api/uploadProfilePhoto' with your actual API endpoint for uploading photos
      await axios.post("/api/uploadProfilePhoto", formData);
      // Optionally, you can update the user data in state after the photo is uploaded
      // Fetch updated user data again
      const response = await axios.get("/api/userData");
      setUserData(response.data);
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-bg">
        <NavBar />
        <div className="profile-photo-container">
          {/* Display selected profile photo */}
          {profilePhoto ? (
            <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="profile-photo" />
          ) : (
            <label htmlFor="profile-photo-input" className="profile-photo-placeholder">
              <span className="plus-sign">+</span>
              <input type="file" id="profile-photo-input" onChange={handleProfilePhotoChange} accept="image/*" className="profile-photo-input" />
            </label>
          )}
        </div>
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
