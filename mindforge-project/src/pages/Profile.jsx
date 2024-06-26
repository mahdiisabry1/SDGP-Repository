import { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import "./Profile.css";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import MyBlogs from "./MyBlogs";

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState([]);
  const [password, setPassword] = useState("");

  const [activeTab, setActiveTab] = useState("roadmaps");
  const { user } = useContext(UserContext);
  const [profilePhoto, setProfilePhoto] = useState(null); // State to hold the selected profile photo
  const [profilePhotoURL, setProfilePhotoURL] = useState(""); // State to hold the URL of the selected profile photo

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + "/api/users/" + user._id);
      setUsername(res.data.username);
      setEmail(res.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [param]);

  // Fetching blog posts from the server
  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch blog posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, [param]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle file selection for profile photo
  const handleProfilePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setProfilePhoto(selectedPhoto);

    // Read the selected file and set its URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePhotoURL(e.target.result);
    };
    reader.readAsDataURL(selectedPhoto);
  };

  // Function to handle profile photo upload
  const uploadProfilePhoto = async () => {
    try {
      const formData = new FormData();
      formData.append("profilePhoto", profilePhoto);
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
  {profilePhotoURL ? (
    <>
      <img
        src={profilePhotoURL}
        alt="Profile"
        className="profile-photo"
      />
      <button className="delete-profile-photo" onClick={() => setProfilePhotoURL("")}>
        Delete
      </button>
    </>
  ) : (
    <label
      htmlFor="profile-photo-input"
      className="profile-photo-placeholder"
    >
      <span className="plus-sign">+</span>
      <input
        type="file"
        id="profile-photo-input"
        onChange={handleProfilePhotoChange}
        accept="image/*"
        className="profile-photo-input"
      />
    </label>
  )}
</div>

        <div className="mt-40 text-center">
          <h1 className="text-6xl mb-20">Welcome Your Profile</h1>
        </div>
      </div>
      <div className="profile-content">
        <div className="mt-20 text-center">
          <div className="input-group">
            <label htmlFor="username" className="profilelabel">
              Username:
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="profileinput"
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email" className="profilelabel">
              Email:
            </label>
            <input
              type="text"
              id="Email"
              onChange={(e) => setUsername(e.target.value)}
              value={email}
              className="profileinput"
              disabled
            />
          </div>

          <div className="input-group">
            <label htmlFor="Password" className="profilelabel">
              PassWord:
            </label>
            <input
              type="text"
              id="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="profileinput"
              disabled
            />
          </div>

          <div className="mt-20">
            <ul className="tab-list">
              <li
                className={`tab-item ${
                  activeTab === "mindmaps" ? "active" : ""
                }`}
                onClick={() => handleTabClick("mindmaps")}
              >
                My Mindmaps
              </li>
              <li
                className={`tab-item ${activeTab === "reads" ? "active" : ""}`}
                onClick={() => handleTabClick("reads")}
              >
                My Posts
              </li>
            </ul>
          </div>
          {/* Content based on active tab */}
          <div className="tab-content">
            {activeTab === "mindmaps" && (
              <div>
                <p>No Mindmaps by You</p>
              </div>
            )}
            {activeTab === "reads" && (
              <div>

                {posts?.map((p) => (
                  <>
                  <Link to={user ? `/posts/post/${p._id}` : "/"}>
                    <MyBlogs key={p._id} p={p} />
                  </Link>
                  </>
                  
                ))}
              </div>
            )}
          </div>

          <div className="mt-20 logout-container">
            <a href="/" className="logout-link">
              Logout
            </a>
          </div>
          <div className="footer">{/* Footer content */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
