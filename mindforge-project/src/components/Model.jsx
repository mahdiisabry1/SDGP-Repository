import React from "react";
import '../components/CSS/Model.css'

const Model = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-blue-600 text-center p-5 middle-container">
            <button onClick={onClose} className="">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Model;
