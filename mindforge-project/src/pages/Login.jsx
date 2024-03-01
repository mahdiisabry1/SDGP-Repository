import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/CSS/Login.css";
import axios from "axios";
import { URL } from "../url";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(URL + "/api/auth/login", {
        email,
        password,
      });

      // Check response status or other success conditions
      if (res.status === 200) {
        console.log("Login successful");
        navigate("/");
      } else {
        setError(true);
        // Display appropriate error message based on the response
        console.error("Login failed:", res.data.message);
      }
    } catch (error) {
      setError(true);
      // Handle different types of errors (network, server, etc.)
      console.error("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Log into your account</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border-2 border-black outline-0"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border-2 border-black outline-0"
          type="password"
          placeholder="Enter your password"
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-slate-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && (
          <h3 className="text-red-500 text-sm">Something went wrong</h3>
        )}
        <div className="flex justify-center items-center space-x-3">
          <p>New here</p>
          <p className="text-gray-500 hover:text-black">
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
