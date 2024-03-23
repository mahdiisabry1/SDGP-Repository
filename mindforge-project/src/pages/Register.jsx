import { useState } from "react"; // Import useState hook from React
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import axios from "axios"; // Import Axios for HTTP requests
import { URL } from "../url"; // Import URL from a separate file
import Menu from "../components/Menu"; // Import Menu component
import Disclaimer from "../components/Disclaimer"; // Import Disclaimer component
import "../components/CSS/register.css"; // Import CSS file for custom styles

// Define the Register component
const Register = () => {
  // Define state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate hook from react-router-dom

  // Function to handle registration process
  const handleRegister = async () => {
    try {
      // Send a POST request to register endpoint with username, email, and password
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      // Set state variables with response data and clear error state
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/"); // Navigate to Home page after successful registration
    } catch (error) {
      console.log(error); // Log error if registration fails
    }
  };

  // Render the Register component
  return (
    <>
      <Menu /> {/* Render Menu component */}
      {/* Main register container */}
      <div className="w-full flex justify-center items-center h-[80vh] the-register-container">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left text-white register-heading mb-20">Create an Account</h1>
          {/* Input field for username */}
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="name"
            placeholder="Enter your Name"
          />
          {/* Input field for email */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="email"
            placeholder="Enter your Email"
          />
          {/* Input field for password */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          {/* Register button */}
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-slate-600"
          >
            Register
          </button>
          {/* Display error message if registration fails */}
          {error && (
            <h3 className="text-red-500 text-sm">Something went wrong</h3>
          )}
          {/* Link to login page */}
          <div className="flex justify-center items-center space-x-3">
            <p className="text-white">Already a member</p>
            <p className="text-white hover:text-pink-500">
              <Link to="/" className="login-link">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Disclaimer /> {/* Render Disclaimer component */}
    </>
  );
};

export default Register; // Export the Register component
