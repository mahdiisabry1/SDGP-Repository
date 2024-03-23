/* eslint-disable react/prop-types */ // Disable eslint rule for prop-types validation

import axios from "axios"; // Import Axios for HTTP requests
import { URL } from "../url"; // Import URL from a separate file
import { useContext } from "react"; // Import useContext hook from React
import { UserContext } from "../context/UserContext"; // Import UserContext for accessing user data

// Define the Comment component
const Comment = ({ c, post }) => {
  // Destructure user from UserContext
  const { user } = useContext(UserContext);

  // Function to delete a comment
  const deleteComment = async (id) => {
    try {
      // Send a DELETE request to the API endpoint with the comment ID
      await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true, // Send cookies with the request
      });
      // Reload the page after deleting the comment
      window.location.reload(true);
    } catch (error) {
      console.log(error); // Log any errors to the console
    }
  };

  // Render the Comment component
  return (
    <div className="px-5 py-5 bg-gray-300 rounded-lg my-2">
      {/* Display the comment content */}
      <p className="font-extrabold text-lg text-gray-700 mt-2">{c.comment}</p>
      {/* Display the comment author */}
      <div className="text-gray-600">@{c.author}</div>
      {/* Display the comment timestamp */}
      <div className="flex justify-between items-center space-x-4">
        <p className="text-sm text-gray-500">
          {new Date(c.updatedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        {/* Display delete button for authenticated users */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center space-x-2">
            {/* Delete button */}
            <p
              className="cursor-pointer"
              onClick={() => deleteComment(c._id)} // Call deleteComment function on click
            >
              Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment; // Export the Comment component
