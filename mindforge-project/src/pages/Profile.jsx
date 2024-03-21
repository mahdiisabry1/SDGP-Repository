import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to fetch user data from the database
        const response = await axios.get("/api/userData"); // Replace "/api/userData" with your actual API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-bg">
        <NavBar />
        <div className="mt-40 text-center"> {/* Added text-center class to center the content */}
          <h1 className="text-6xl mb-4">Welcome to Your Profile</h1> {/* Increased font size using text-4xl class */}
        </div>
      </div>
      <div className="profile-content">
        <div className="mt-40 text-center"> {/* Added text-center class to center the content */}
          {userData && (
            <div>
              <p className="text-xl mt-4">Username: <span className="text-lg">{userData.username}</span></p> {/* Increased font size using text-xl class */}
              <p className="text-xl mt-2">Email: <span className="text-lg">{userData.email}</span></p> {/* Increased font size using text-xl class */}
              {/* Add more user data fields as needed */}
            </div>
          )}
          <div className="mt-20"> {/* Added a div to separate the logout link */}
            <a href="/" className="logout-link">Logout</a> {/* Applied CSS class to the logout link */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;