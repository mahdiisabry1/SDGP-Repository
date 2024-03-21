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
    <>
      <NavBar />
      <div className="mt-40 text-center"> {/* Added text-center class to center the content */}
        <h1 className="text-4xl mb-4">Welcome to your profile</h1> {/* Increased font size using text-4xl class */}
        {userData && (
          <div>
            <p className="text-xl mt-4">Username: <span className="text-lg">{userData.username}</span></p> {/* Increased font size using text-xl class */}
            <p className="text-xl mt-2">Email: <span className="text-lg">{userData.email}</span></p> {/* Increased font size using text-xl class */}
            {/* Add more user data fields as needed */}
          </div>
        )}
        <a href="/" className="logout-link mt-10">Logout</a> {/* Applied CSS class to the logout link and added margin */}
      </div>
    </>
  );
};

export default Profile;
