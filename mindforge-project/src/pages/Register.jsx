import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../url";
import Menu from "../components/Menu";
import Disclaimer from "../components/Disclaimer";
import "../components/CSS/register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Testing
  // console.log(username);
  // console.log(email);
  // console.log(password);

  return (
    <>
      <Menu />
      <div className="w-full flex justify-center items-center h-[80vh] the-register-container">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left text-white">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="name"
            placeholder="Enter your Name"
          />
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
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-slate-600"
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p className="text-white">Already a member</p>
            <p className="text-white hover:text-black">
              <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Disclaimer />
    </>
  );
};

export default Register;
