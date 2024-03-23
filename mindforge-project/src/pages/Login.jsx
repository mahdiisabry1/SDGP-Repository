import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/CSS/Login.css";
import axios from "axios";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Menu from "../components/Menu";
import Disclaimer from "../components/Disclaimer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const [loading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUser(res.data);
      navigate("/Home");
      console.log(res.data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <Menu />
      <div className="w-full flex justify-center items-center h-[80vh] the-main-login-container">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left text-white login-heading mb-20">Log into Your Account</h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 mt-4"
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
          <div className="flex justify-center items-center space-x-3 text-white">
            <p>New here</p>
            <p className="hover:text-pink-500">
            <Link to="/register" className="register-link">
  Register
</Link>

</p>


          </div>
        </div>
      </div>
      <Disclaimer />
    </>
  );
};

export default Login;
