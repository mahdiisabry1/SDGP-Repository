import React from 'react'
import './Login.css';

const Login = ({isOpen, onClose}) => {
  return (
    // Dont change the outer div 
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"} `}>
        <div className='modal-container'>
            {/* You can edit the styles in this div or use the external style sheet for created */}
            <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                







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