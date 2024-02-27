import React, {useState} from 'react'
import './Login.css';

const Login = ({isOpen, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Logging in with:', { username, password });
  };
  return (
    // Dont change the outer div 
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"} `}>
      
        <div className='main-container'>
        
          
            {/* You can edit the styles in this div or use the external style sheet for created */}
            <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            <h2>Login</h2>
            <div className="login-container">
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
              

                {/* The closing button just a button without any style */}
                <button onClick={onClose}>
                    close
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login