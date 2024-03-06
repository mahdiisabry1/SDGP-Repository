import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';

const GameRoomRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", { username, email, password });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Create an account</h1>
        {/* Your existing input fields */}
        {/* Button to register with Google */}
        <button
          onClick={() => {
            // Handle continue with Google
            console.log("Continue with Google clicked");
          }}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Continue with Google
        </button>
        {/* Button to register with Microsoft */}
        <button
          onClick={() => {
            // Handle continue with Microsoft
            console.log("Continue with Microsoft clicked");
          }}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Continue with Microsoft
        </button>
        {/* Button to register with Apple or other provider */}
        <button
          onClick={() => {
            // Handle continue with Apple or other provider
            console.log("Continue with Apple or other clicked");
          }}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
        >
          Continue with Apple or other
        </button>
        {/* Your existing register button */}
        <button
          onClick={handleRegister}
          className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-slate-600"
        >
          Register
        </button>
        {/* Error message */}
        {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
        {/* Login link */}
        <div className="flex justify-center items-center space-x-3">
          <p>Already a member</p>
          <p className="text-gray-500 hover:text-black">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameRoomRegistration;
