/* eslint-disable react/prop-types */
import axios from "axios";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c, post }) => {

  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true,
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 py-5 bg-gray-300 rounded-lg my-2">
      <p className="font-extrabold text-lg text-gray-700 mt-2">{c.comment}</p>
      <div className="text-gray-600">@{c.author}</div>
      <div className="flex justify-between items-center space-x-4">
        <p className="text-sm text-gray-500">
          {new Date(c.updatedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center space-x-2">
              <p
                className="cursor-pointer"
                onClick={() => deleteComment(c._id)}
              >
                Delete
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
